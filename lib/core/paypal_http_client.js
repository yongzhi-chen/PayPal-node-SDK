'use strict';

const braintreehttp = require('braintreehttp');
const AccessToken = require('./access_token').AccessToken;
const AccessTokenRequest = require('./access_token_request').AccessTokenRequest;
const sdkVersion = require('../../package').version;
const clients = require('./clients');
const TokenStatus = require('./token_status');

/**
 * PayPal Http client
 */
class PaypalHttpClient extends braintreehttp.HttpClient {
  /**
   * @param {PayPalEnvironment} environment - The environment for this client
   */
  constructor(environment) {
    super(environment);

    this.client = clients.fromEnvironment(environment);

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
    const refreshToken = this.client.getRefreshToken();
    this.client.setStatus(TokenStatus.refreshing);
    // use the parent class execute method to avoid the automatic catch handler
    return super.execute(new AccessTokenRequest(this.environment, refreshToken)).then((resp) => {
      const token = new AccessToken(resp.result);
      this.client.setToken(token);
      this.client.notify();
      return token;
    }).catch((err) => {
      this.client.setToken(null);
      this.client.notify(err);
      return Promise.reject(err);
    });
  }

  /**
   * Execute an http request handling authorization errors automatically
   * @param request - The request to execute
   * @return {Promise.<any>}
   */
  execute(request) {
    // override the BrainTree HttpClient execute method so we can attach a catch handler to every call to the api
    // to handle only authorization errors and use the parent execute method to perform the call
    // injectors are not useful here because they run before the call is made and this is an after the fact process
    // any code written here will run before the injectors do
    return super.execute(request).catch((err) => {
      if (isAuthorizationError(err)) {
        // the absent status is handled in the injector
        if (this.client.getStatus() === TokenStatus.refreshing) {
          // if is refreshing wait for the result and retry the call
          return this._wait(request);
        } else {
          // start the refresh procedure
          this.client.setStatus(TokenStatus.refreshing);
          // Set this request as the first in the queue since it was the one that originate the refresh
          // After the notification all calls are retried automatically
          const promise = this._wait(request);
          return this.fetchAccessToken().then(() => promise); // chain the result of the retried call
        }
      } else {
        // propagate all non-authorization errors
        return Promise.reject(err);
      }
    });
  }

  /**
   * A shortcut method to queue a request waiting for the new token and automatically retry the request if successful
   * @param request - A request to queue
   * @return {Promise.<any>} The retried request
   * @private
   */
  _wait(request) {
    return this.client.wait(request).then(() => {
      this._setAuthHeader(request);
      return super.execute(request);
    });
  }

  /**
   * Sets the Authorization header for this request based on the client token
   * @param request - The request to modify
   * @private
   */
  _setAuthHeader(request) {
    const token = this.client.getToken();
    request.headers.Authorization = token.authorizationString();
  }
}

/**
 * An injector that fetches token when the client has no token or is expired and queues calls if the token is refreshing
 * @param request - The current request for the client
 * @return {Promise.<any>} A
 */
function authInjector(request) {
  // If is the grant or refresh token request ignore it
  if (!(request instanceof AccessTokenRequest)) {
    const status = this.client.getStatus();
    // if the status is refreshing queue the request, set the new header and proceed to make the call
    if (status === TokenStatus.refreshing) {
      return this.client.wait(request).then(() => this._setAuthHeader(request));
      // if there is no token or is expired get an access token before executing the request
    } else if (this.client.isTokenExpired()) {
      const promise = this.client.wait(request);
      return this.fetchAccessToken().then(() => {
        // this wait does not automatically retries the request because it will be performed after the injector anyway
        this._setAuthHeader(request);
        return promise; // this promise will be resolved after the call to notify
      });
    } else {
      // otherwise the token is valid, set the authorization header
      // Note: You don't need to call Promise.resolve here because the braintree http client ignores the result of the injector
      // and Promise.all returns a resolved promise when there are no promises in the iterable anyway
      this._setAuthHeader(request);
    }
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
