'use strict';

const braintreehttp = require('braintreehttp');
const paypal = require('../lib/paypalrestsdk');

function client() {
  let clientId = process.env.PAYPAL_CLIENT_ID || 'AdV4d6nLHabWLyemrw4BKdO9LjcnioNIOgoz7vD611ObbDUL0kJQfzrdhXEBwnH8QmV-7XZjvjRWn0kg';
  let clientSecret = process.env.PAYPAL_CLIENT_SECRET || 'EPKoPC_haZMTq5uM9WXuzoxUVdgzVqHyD5avCyVC1NCIUJeVaNNUZMnzduYIqrdw-carG9LBAizFGMyK';

  let env = new paypal.SandboxEnvironment(
    clientId, clientSecret
  );

  return new paypal.PayPalHttpClient(env);
}

module.exports = {client: client};
