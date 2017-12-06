// This class was generated on Wed, 06 Dec 2017 14:06:36 PST by version 0.1 of Braintree SDK Generator
// creditCardUpdateRequest.js
// @version 0.1
// @type request
// @data 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
// DO NOT EDIT
'use strict';

const querystring = require('querystring');
/**
 Updates information for a vaulted credit card, by ID. In the JSON request body, specify the values to update.
 **/

class CreditCardUpdateRequest {

  constructor(creditCardId) {
    this.path = '/v1/vault/credit-cards/{credit_card_id}?';
    this.path = this.path.replace("{credit_card_id}", querystring.escape(creditCardId));
    this.verb = 'PATCH';
    this.body = null;
    this.headers = {
        'Content-Type': 'application/json'
        };
  }

  requestBody(patchRequest) {
    this.body = patchRequest;
    return this;
  }
}

module.exports = {CreditCardUpdateRequest: CreditCardUpdateRequest};
