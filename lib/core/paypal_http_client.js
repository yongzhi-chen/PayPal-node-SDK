'use strict';

const braintreehttp = require('braintreehttp');
const AccessToken = require('./access_token').AccessToken;
const AccessTokenRequest = require('./access_token_request').AccessTokenRequest;
const sdkVersion = require('../../package').version;
const TokenCache = require('./token_cache');

/**
 * PayPal Http client
 */
class PaypalHttpClient extends braintreehttp.HttpClient {

  /**
   * @param {PayPalEnvironment} environment - The environment for this client
   */
  constructor(environment, refreshToken) {
    super(environment);

    this._cache = TokenCache.cacheForEnvironment(environment, refreshToken);
    this.refreshToken = refreshToken;
    this.addInjector(authInjector.bind(this));
    this.addInjector(function (req) {
      req.headers['Accept-Encoding'] = 'gzip';
    });
  }

  /**
   * Returns the user agent for this client implementation
   * @override
   * @return {string} - The user agent string
   */
  getUserAgent() {
    return 'PayPalSDK/PayPal-node-SDK ' + sdkVersion + ' (node ' + process.version + '-' + process.arch + '-' + process.platform + '; OpenSSL ' + process.versions.openssl + ')';
  }

  fetchAccessToken() {
    this._cache.lock();
    return super.execute(new AccessTokenRequest(this.environment, this.refreshToken)).then((resp) => {
      const token = new AccessToken(resp.result);
      this._cache.setToken(token);
      this._cache.notify();
      this._cache.unlock();
      return token;
    }).catch((err) => {
      this._cache.setToken(null);
      this._cache.notify(err);
      this._cache.unlock();
      return Promise.reject(err);
    });
  }
  
  /**
   * Sets the Authorization header for this request based on the client token
   * @param request - The request to modify
   * @private
   */
  _setAuthHeader(request) {
    const token = this._cache.getToken();
    request.headers.Authorization = token.authorizationString();
  }
}

/**
 * An injector that fetches token when the client has no token or is expired and queues calls if the token is refreshing
 * @param request - The current request for the client
 * @return {Promise.<any>} A
 */
function authInjector(request) {
  if (request.headers['Authorization'] || request instanceof AccessTokenRequest) {
    return;
  }
  if (this._cache.isValid()) {
    this._setAuthHeader(request);
  } else if (this._cache.isLocked()) {
    return this._cache.wait(request).then(() => this._setAuthHeader(request));
  } else if (!this._cache.isValid()) {
    const promise = this._cache.wait(request);
    return this.fetchAccessToken().then(() => {
      this._setAuthHeader(request);
      return promise;
    });
  }
}

/**
 * Checks if an error is an authorization error
 * @param err - The error to inspect
 * @return {boolean} - True if is an authorization error otherwise false
 */
function isAuthorizationError(err) {
  return err.statusCode === 401;
}

module.exports = {
  PaypalHttpClient: PaypalHttpClient
};
