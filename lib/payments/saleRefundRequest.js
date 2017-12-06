// This class was generated on Wed, 06 Dec 2017 11:35:00 PST by version 0.1 of Braintree SDK Generator
// saleRefundRequest.js
// @version 0.1
// @type request
// @data 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
// DO NOT EDIT
'use strict';

const querystring = require('querystring');
/**
 Refunds a sale, by ID. For a full refund, include an empty payload in the JSON request body. For a partial refund, include an `amount` object in the JSON request body.
 **/

class SaleRefundRequest {

  constructor(saleId) {
    this.path = '/v1/payments/sale/{sale_id}/refund?';
    this.path = this.path.replace("{sale_id}", querystring.escape(saleId));
    this.verb = 'POST';
    this.body = null;
    this.headers = {
        'Content-Type': 'application/json'
        };
  }

  requestBody(refundRequest) {
    this.body = refundRequest;
    return this;
  }
}

module.exports = {SaleRefundRequest: SaleRefundRequest};
