'use strict';

const paypal = require('../../lib/lib');
const nock = require('nock');
const clients = require('../../lib/core/clients');
const TokenStatus = require("../../lib/core/token_status");

describe('PayPalHttpClient', function () {
  let environment = new paypal.SandboxEnvironment('clientId', 'clientSecret');
  let env2 = new paypal.SandboxEnvironment('clientId2', 'clientSecret2');

  beforeEach(function () {
    clearToken();
    this.http = new paypal.PayPalHttpClient(environment);
    this.http2 = new paypal.PayPalHttpClient(env2);
    this.context = nock(environment.baseUrl);
  });

  afterEach(() => nock.cleanAll());

  function nockAccessTokenRequest(context, times, refreshTokenResponse, refreshTokenValue) {
    let accessTokenValue = refreshTokenResponse ? 'access-token-from-refresh-token' : 'simple-access-token';

    times = times ? times : 1;

    return context.post('/v1/oauth2/token').times(times).reply(200, function (uri, requestBody) {
      const token = {
        access_token: accessTokenValue,
        expires_in: 3600,
        token_type: 'Bearer'
      };
      if (refreshTokenValue) {
        token.refresh_token = refreshTokenValue;
      }
      return token;
    }, {
      'Content-Type': 'application/json'
    });
  }

  function clearToken() {
    const client = clients.fromEnvironment(environment);
    client.setToken(null);
    client.setStatus(TokenStatus.absent)
  }


  function createToken(expired, refresh) {
    const token = new paypal.AccessToken({
      access_token: 'simple-access-token',
      expires_in: expired ? 0 : 3600,
      token_type: 'Bearer',
    });
    token._dateCreated = Date.now() - (expired ? 360000 : 0);
    if (refresh) {
      token.refresh_token = 'refresh-token';
    }
    return token;
  }

  function authHeader(refresh) {
    return {
      reqheaders: {
        authorization: refresh ? 'Bearer access-token-from-refresh-token' : 'Bearer simple-access-token'
      }
    }
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
    const authTokenHeader = authHeader(false);
    const authRefreshHeader = authHeader(true);

    it('fetches access token if not yet fetched', function () {
      let request = {
        path: '/',
        verb: 'GET'
      };

      let requestNock = nock(environment.baseUrl, authTokenHeader).get('/').reply(200, function (uri, body) {
        return JSON.stringify({some_data: 'some_value'});
      }, {
        'Content-Type': 'application/json'
      });

      let accessTokenNock = nockAccessTokenRequest(this.context);

      expect(this.http.client.getToken()).not.to.exist();
      return this.http.execute(request).then((resp) => {
        expect(this.http.client.getToken()).to.exist();
        expect(resp.result.some_data).to.equal('some_value');
        expect(requestNock.isDone()).to.be.true();
        expect(accessTokenNock.isDone()).to.be.true();
      });
    });

    it('does not fetch access token if not expired and valid', function () {
      let prevToken;
      let request = {
        path: '/',
        verb: 'GET'
      };

      let requestNock = nock(environment.baseUrl, authTokenHeader).get('/').times(2).reply(200, function (uri, body) {
        return JSON.stringify({some_data: 'some_value'});
      }, {
        'Content-Type': 'application/json'
      });

      let accessTokenNock = nockAccessTokenRequest(this.context);

      expect(this.http.client.getToken()).to.not.exist();
      return this.http.execute(request).then((resp) => {
        prevToken = this.http.client.getToken();
        expect(prevToken).to.exist();
        expect(resp.result.some_data).to.equal('some_value');
        return this.http.execute(request).then((resp) => {
          expect(this.http.client.getToken()).to.equal(prevToken);
          expect(resp.result.some_data).to.equal('some_value');
          expect(requestNock.isDone()).to.be.true();
          expect(accessTokenNock.isDone()).to.be.true();
        });
      });
    });

    it('fetches an access token if expired without refresh token', function () {
      let request = {
        path: '/',
        verb: 'GET'
      };

      let requestNock = nock(environment.baseUrl, authTokenHeader).get('/').reply(200, function (uri, body) {
        return JSON.stringify({some_data: 'some_value'});
      }, {
        'Content-Type': 'application/json'
      });

      let accessTokenNock = nockAccessTokenRequest(this.context);

      expect(this.http.client.getToken()).to.not.exist();
      this.http.client.setToken(createToken(true));
      expect(this.http.client.getToken().isExpired()).to.be.true();
      return this.http.execute(request).then((resp) => {
        expect(resp.result.some_data).to.equal('some_value');
        expect(requestNock.isDone()).to.be.true();
        expect(accessTokenNock.isDone()).to.be.true();
      });
    });

    it('fetches a new token using a refresh token if expired', function () {
      let request = {
        path: '/',
        verb: 'GET'
      };

      let requestNock = nock(environment.baseUrl, authRefreshHeader).get('/').reply(200, function (uri, body) {
        return JSON.stringify({some_data: 'some_value'});
      }, {
        'Content-Type': 'application/json'
      });

      let refreshTokenNock = nockAccessTokenRequest(this.context, 1, true, 'refresh-token');

      expect(this.http.client.getToken()).to.not.exist();
      this.http.client.setToken(createToken(true, true));
      expect(this.http.client.getToken().isExpired()).to.be.true();
      return this.http.execute(request).then((resp) => {
        expect(this.http.client.getToken()).to.exist();
        expect(refreshTokenNock.isDone()).to.be.true();
        expect(requestNock.isDone()).to.be.true();
        expect(resp.result.some_data).to.equal('some_value');
      });
    });

    it('combines requests and refreshes tokens once before the call', function () {
      let request = {
        path: '/',
        verb: 'GET'
      };

      let requestNock = nock(environment.baseUrl, authTokenHeader).get('/').times(2).reply(200, function (uri, body) {
        return JSON.stringify({some_data: 'some_value'});
      }, {
        'Content-Type': 'application/json'
      });
      let accessTokenNock = nockAccessTokenRequest(this.context);

      expect(this.http.client.getToken()).to.not.exist();
      this.http.client.setToken(createToken(true, true));
      expect(this.http.client.getToken().isExpired()).to.be.true();
      return Promise.all([
        this.http.execute(request),
        this.http.execute(request),
      ]).then((values) => {
        expect(this.http.client.getToken()).to.exist();
        expect(requestNock.isDone()).to.be.true();
        expect(accessTokenNock.isDone()).to.be.true();
        expect(values[0].result.some_data).to.equal('some_value');
        expect(values[1].result.some_data).to.equal('some_value');
      })
    });

    it('combines requests and retries them when they fail requesting tokens once', function () {
      let request = {
        path: '/',
        verb: 'GET'
      };

      let failedRequestNock = nock(environment.baseUrl, authTokenHeader).get('/').times(2).reply(401);
      let successfulRequestNock = nock(environment.baseUrl, authTokenHeader).get('/').times(2).reply(200, function (uri, body) {
        return JSON.stringify({some_data: 'some_value'});
      }, {
        'Content-Type': 'application/json'
      });
      let accessTokenNock = nockAccessTokenRequest(this.context);

      expect(this.http.client.getToken()).to.not.exist();
      this.http.client.setToken(createToken(false, true));
      expect(this.http.client.getToken().isExpired()).to.be.false();
      return Promise.all([
        this.http.execute(request),
        this.http.execute(request),
      ]).then((values) => {
        expect(this.http.client.getToken()).to.exist();
        expect(failedRequestNock.isDone()).to.be.true();
        expect(successfulRequestNock.isDone()).to.be.true();
        expect(accessTokenNock.isDone()).to.be.true();
        expect(values[0].result.some_data).to.equal('some_value');
        expect(values[1].result.some_data).to.equal('some_value');
      })
    });

    it('combines requests from different clients refreshing tokens only when required', function () {
      let request = {
        path: '/',
        verb: 'GET'
      };

      let failedRequestNock = nock(environment.baseUrl, authTokenHeader).get('/').times(2).reply(401);
      let successfulRequestNock = nock(environment.baseUrl, authTokenHeader).get('/').times(2).reply(200, function (uri, body) {
        return JSON.stringify({some_data: 'some_value'});
      }, {
        'Content-Type': 'application/json'
      });
      let accessTokenNock = nockAccessTokenRequest(this.context, 2);

      expect(this.http.client.getToken()).to.not.exist();
      expect(this.http2.client.getToken()).to.not.exist();
      this.http.client.setToken(createToken(false, true));
      this.http2.client.setToken(createToken(false, true));
      expect(this.http.client.getToken().isExpired()).to.be.false();
      expect(this.http2.client.getToken().isExpired()).to.be.false();
      return Promise.all([
        this.http.execute(request),
        this.http2.execute(request),
      ]).then((values) => {
        expect(this.http.client.getToken()).to.exist();
        expect(this.http2.client.getToken()).to.exist();
        expect(failedRequestNock.isDone()).to.be.true();
        expect(successfulRequestNock.isDone()).to.be.true();
        expect(accessTokenNock.isDone()).to.be.true();
        expect(values[0].result.some_data).to.equal('some_value');
        expect(values[1].result.some_data).to.equal('some_value');
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

      expect(this.http.accessToken).to.not.exist();
      return this.http.execute(request).then((resp) => {
        expect(resp.result.some_data).to.equal('some_value');
        expect(requestNock.isDone()).to.be.true();
        expect(accessTokenNock.isDone()).to.be.true();
      });
    });
  });

});
