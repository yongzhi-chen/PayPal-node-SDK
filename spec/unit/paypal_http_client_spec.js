'use strict';

let paypal = require('../../lib/lib');
let nock = require('nock');

describe('PayPalHttpClient', function () {
  let environment = new paypal.SandboxEnvironment('clientId', 'clientSecret');

  beforeEach(function () {
    this.http = new paypal.PayPalHttpClient(environment);
    this.http_with_refresh_token = new paypal.PayPalHttpClient(environment, 'refresh-token');
    this.context = nock(environment.baseUrl);
  });

  function nockAccessTokenRequest(context, times, refreshToken) {
    let path = '/v1/oauth2/token';
    let accessTokenValue = refreshToken ? 'refresh-token-based-access-token' : 'simple-access-token';

    times = times ? times : 1;
    if (refreshToken) {
      path = '/v1/identity/openidconnect/tokenservice';
    }

    return context.post(path).times(times).reply(200, function (uri, requestBody) {
      return {
        access_token: accessTokenValue,
        expires_in: 3600,
        token_type: 'Bearer'
      };
    }, {
      'Content-Type': 'application/json'
    });
  }

  describe('user agent', function () {
    it('returns properly formatted user agent', function () {
      let version = require('../../package').version;
      expect(this.http.getUserAgent()).to.include('PayPalSDK/PayPal-node-SDK ' + version);
      expect(this.http.getUserAgent()).to.include('OpenSSL');
      expect(this.http.getUserAgent()).to.include('node');
    });
  });

  describe('execute', function () {
    it('fetches access token if not yet fetched', function () {
      let request = {
        path: '/',
        verb: 'GET'
      };

      let requestNock = nock(environment.baseUrl, {
        reqheaders: {
          authorization: 'Bearer simple-access-token'
        }
      }).get('/').reply(200, function (uri, body) {
        return JSON.stringify({some_data: 'some_value'});
      }, {
        'Content-Type': 'application/json'
      });

      let accessTokenNock = nockAccessTokenRequest(this.context);

      expect(this.http.accessToken).to.not.exist;
      return this.http.execute(request).then((resp) => {
        expect(resp.result.some_data).to.equal('some_value');
        expect(requestNock.isDone()).to.be.true;
        expect(accessTokenNock.isDone()).to.be.true;
      });
    });

    it('does not fetch access token if not expired and valid', function () {
      let request = {
        path: '/',
        verb: 'GET'
      };

      let requestNock = nock(environment.baseUrl, {
        reqheaders: {
          authorization: 'Bearer simple-access-token'
        }
      }).get('/').times(2).reply(200, function (uri, body) {
        return JSON.stringify({some_data: 'some_value'});
      }, {
        'Content-Type': 'application/json'
      });

      let accessTokenNock = nockAccessTokenRequest(this.context, 1);

      expect(this.http.accessToken).to.not.exist;
      return this.http.execute(request).then((resp) => {
        expect(resp.result.some_data).to.equal('some_value');
        return this.http.execute(request).then((resp) => {
          expect(resp.result.some_data).to.equal('some_value');
          expect(requestNock.isDone()).to.be.true;
          expect(accessTokenNock.isDone()).to.be.true;
        });
      });
    });

    it('fetches access token if expired', function () {
      let request = {
        path: '/',
        verb: 'GET'
      };

      let requestNock = nock(environment.baseUrl, {
        reqheaders: {
          authorization: 'Bearer simple-access-token'
        }
      }).get('/').times(1).reply(200, function (uri, body) {
        return JSON.stringify({some_data: 'some_value'});
      }, {
        'Content-Type': 'application/json'
      });

      let accessTokenNock = nockAccessTokenRequest(this.context, 1);

      expect(this.http.accessToken).to.not.exist;
      this.http.accessToken = new paypal.AccessToken({
        access_token: 'simple-access-token',
        expires_in: 0,
        token_type: 'Bearer'
      });

      this.http.accessToken._dateCreated = Date.now() - 360000;

      expect(this.http.accessToken.isExpired()).to.be.true;
      return this.http.execute(request).then((resp) => {
        expect(resp.result.some_data).to.equal('some_value');
        expect(requestNock.isDone()).to.be.true;
        expect(accessTokenNock.isDone()).to.be.true;
      });
    });

    it('fetches access token with refresh token not yet fetched', function () {
      let request = {
        path: '/',
        verb: 'GET'
      };

      let requestNock = nock(environment.baseUrl, {
        reqheaders: {
          authorization: 'Bearer refresh-token-based-access-token'
        }
      }).get('/').reply(200, function (uri, body) {
        return JSON.stringify({some_data: 'some_value'});
      }, {
        'Content-Type': 'application/json'
      });

      let accessTokenNock = nockAccessTokenRequest(this.context, 1, 'refresh-token');

      expect(this.http.accessToken).to.not.exist;
      return this.http_with_refresh_token.execute(request).then((resp) => {
        expect(resp.result.some_data).to.equal('some_value');
        expect(requestNock.isDone()).to.be.true;
        expect(accessTokenNock.isDone()).to.be.true;
      });
    });

    it('fetches access token with refresh token if expired', function () {
      let request = {
        path: '/',
        verb: 'GET'
      };

      let requestNock = nock(environment.baseUrl, {
        reqheaders: {
          authorization: 'Bearer refresh-token-based-access-token'
        }
      }).get('/').reply(200, function (uri, body) {
        return JSON.stringify({some_data: 'some_value'});
      }, {
        'Content-Type': 'application/json'
      });

      let accessTokenNock = nockAccessTokenRequest(this.context, 1, 'refresh-token');

      expect(this.http.accessToken).to.not.exist;
      this.http.accessToken = new paypal.AccessToken({
        access_token: 'refresh-token-based-access-token',
        expires_in: 0,
        token_type: 'Bearer'
      });

      this.http.accessToken._dateCreated = Date.now() - 360000;

      expect(this.http.accessToken.isExpired()).to.be.true;
      return this.http_with_refresh_token.execute(request).then((resp) => {
        expect(resp.result.some_data).to.equal('some_value');
        expect(requestNock.isDone()).to.be.true;
        expect(accessTokenNock.isDone()).to.be.true;
      });
    });

    it('sets Accept-Encoding header to gzip', function () {
      let request = {
        path: '/',
        verb: 'GET'
      };

      let requestNock = nock(environment.baseUrl, {
        reqheaders: {
          'accept-encoding': 'gzip'
        }
      }).get('/').reply(200, function (uri, body) {
        return JSON.stringify({some_data: 'some_value'});
      }, {
        'Content-Type': 'application/json'
      });

      let accessTokenNock = nockAccessTokenRequest(this.context);

      expect(this.http.accessToken).to.not.exist;
      return this.http.execute(request).then((resp) => {
        expect(resp.result.some_data).to.equal('some_value');
        expect(requestNock.isDone()).to.be.true;
        expect(accessTokenNock.isDone()).to.be.true;
      });
    });
  });

});
