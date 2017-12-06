// This class was generated on Wed, 06 Dec 2017 11:34:55 PST by version 0.1 of Braintree SDK Generator
// orderGetRequest.js
// @version 0.1
// @type request
// @data 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
// DO NOT EDIT
'use strict';

const querystring = require('querystring');
/**
 Shows details for an order, by ID.
 **/

class OrderGetRequest {

  constructor(orderId) {
    this.path = '/v1/payments/orders/{order_id}?';
    this.path = this.path.replace("{order_id}", querystring.escape(orderId));
    this.verb = 'GET';
    this.body = null;
    this.headers = {
        'Content-Type': 'application/json'
        };
  }
}

module.exports = {OrderGetRequest: OrderGetRequest};
