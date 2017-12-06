// This class was generated on Wed, 06 Dec 2017 11:34:55 PST by version 0.1 of Braintree SDK Generator
// orderCaptureRequest.js
// @version 0.1
// @type request
// @data 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
// DO NOT EDIT
'use strict';

const querystring = require('querystring');
/**
 Captures a payment for an order, by ID. To use this call, the original payment call must specify an `order` intent. In the JSON request body, include the payment amount and indicate whether this capture is the final capture for the authorization.
 **/

class OrderCaptureRequest {

  constructor(orderId) {
    this.path = '/v1/payments/orders/{order_id}/capture?';
    this.path = this.path.replace("{order_id}", querystring.escape(orderId));
    this.verb = 'POST';
    this.body = null;
    this.headers = {
        'Content-Type': 'application/json'
        };
  }

  requestBody(capture) {
    this.body = capture;
    return this;
  }
}

module.exports = {OrderCaptureRequest: OrderCaptureRequest};
