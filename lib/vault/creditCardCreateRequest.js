// This class was generated on Wed, 06 Dec 2017 14:06:36 PST by version 0.1 of Braintree SDK Generator
// creditCardCreateRequest.js
// @version 0.1
// @type request
// @data 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
// DO NOT EDIT
'use strict';

const querystring = require('querystring');
/**
 Stores credit card details in the PayPal vault. To use the vaulted card to make a payment, specify this ID as the `credit_card_id` in a [`credit_card_token`](/docs/api/payments/#definition-credit_card_token) object. If you include a `payer_id` when you store the credit card, you must also include that ID as the `external_customer_id` in the `credit_card_token` object.<br/>You can also use the ID of the vaulted credit card to show details for, update, or delete the vaulted card.
 **/

class CreditCardCreateRequest {

  constructor() {
    this.path = '/v1/vault/credit-cards?';
    this.verb = 'POST';
    this.body = null;
    this.headers = {
        'Content-Type': 'application/json'
        };
  }

  requestBody(creditCard) {
    this.body = creditCard;
    return this;
  }
}

module.exports = {CreditCardCreateRequest: CreditCardCreateRequest};
