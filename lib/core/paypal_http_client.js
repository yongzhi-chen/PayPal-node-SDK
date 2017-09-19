'use strict';

const braintreehttp = require('braintreehttp');
const AccessToken = require('./access_token').AccessToken;
const AccessTokenRequest = require('./access_token_request').AccessTokenRequest;
const sdkVersion = require('../../package').version;

class PaypalHttpClient extends braintreehttp.HttpClient {

  constructor(environment, refreshToken) {
    super(environment);

    this.refreshToken = refreshToken;
    this.addInjector(authInjector(this));
    this.addInjector(function (req) {
      req.headers['Accept-Encoding'] = 'gzip';
    });
  }

  getUserAgent() {
    return 'PayPalSDK/PayPal-node-SDK ' + sdkVersion + ' (node ' + process.version + '-' + process.arch + '-' + process.platform  + '; OpenSSL ' + process.versions.openssl + ')';
  }

  fetchAccessToken() {
    if (this.accessToken && !this.accessToken.isExpired()) {
      return Promise.resolve(this.accessToken);
    }
    return this.execute(new AccessTokenRequest(this.environment, this.refreshToken)).then((resp) => {
      this.accessToken = new AccessToken(resp.result);
      return this.accessToken;
    });
  }
}

function authInjector(httpClient) {
  let promise;

  return function (request) {
    if (!(request instanceof AccessTokenRequest)) {
      promise = httpClient.fetchAccessToken().then((accessToken) => {
        request.headers.Authorization = accessToken.authorizationString();
      });
    } else {
      promise = Promise.resolve();
    }
    return promise;
  };
}

module.exports = {
  PaypalHttpClient: PaypalHttpClient
};
