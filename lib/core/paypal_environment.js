'use strict';

const braintreehttp = require('braintreehttp');
const SANDBOX = 'https://api.sandbox.paypal.com';
const LIVE = 'https://api.paypal.com';

class PayPalEnvironment extends braintreehttp.Environment {
  constructor(clientId, clientSecret, baseUrl) {
    super(baseUrl);
    this.clientId = clientId;
    this.clientSecret = clientSecret;
  }

  authorizationString() {
    let encoded = new Buffer(`${this.clientId}:${this.clientSecret}`).toString('base64');

    return `Basic ${encoded}`;
  }
}

class SandboxEnvironment extends PayPalEnvironment {

  constructor(clientId, clientSecret) {
    super(clientId, clientSecret, SANDBOX);
  }
}

class LiveEnvironment extends PayPalEnvironment {

  constructor(clientId, clientSecret) {
    super(clientId, clientSecret, LIVE);
  }
}

module.exports = {
  PayPalEnvironment: PayPalEnvironment,
  LiveEnvironment: LiveEnvironment,
  SandboxEnvironment: SandboxEnvironment
}
