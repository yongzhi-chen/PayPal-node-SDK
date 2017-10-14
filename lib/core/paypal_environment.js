'use strict';

const braintreehttp = require('braintreehttp');
const SANDBOX = 'https://api.sandbox.paypal.com';
const LIVE = 'https://api.paypal.com';

/**
 * Base class for PayPal Environments
 */
class PayPalEnvironment extends braintreehttp.Environment {
  /**
   * @param {string} clientId - The client id for this environment
   * @param {string} clientSecret - The client secret
   * @param {string} baseUrl - The base url to execute requests
   */
  constructor(clientId, clientSecret, baseUrl) {
    super(baseUrl);
    this.clientId = clientId;
    this.clientSecret = clientSecret;
  }

  /**
   * Authorization header string for basic authentication with the current client id and secret
   * @return {string} - The authorization header value
   */
  authorizationString() {
    let encoded = new Buffer(`${this.clientId}:${this.clientSecret}`).toString('base64');

    return `Basic ${encoded}`;
  }
}

/**
 * Sandbox Environment
 */
class SandboxEnvironment extends PayPalEnvironment {

  constructor(clientId, clientSecret) {
    super(clientId, clientSecret, SANDBOX);
  }
}

/**
 * Live Environment
 */
class LiveEnvironment extends PayPalEnvironment {

  constructor(clientId, clientSecret) {
    super(clientId, clientSecret, LIVE);
  }
}

module.exports = {
  PayPalEnvironment: PayPalEnvironment,
  LiveEnvironment: LiveEnvironment,
  SandboxEnvironment: SandboxEnvironment
};
