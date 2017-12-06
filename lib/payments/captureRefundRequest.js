// This class was generated on Wed, 06 Dec 2017 11:34:54 PST by version 0.1 of Braintree SDK Generator
// captureRefundRequest.js
// @version 0.1
// @type request
// @data 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
// DO NOT EDIT
'use strict';

const querystring = require('querystring');
/**
 Refunds a captured payment, by ID. In the JSON request body, include an `amount` object.
 **/

class CaptureRefundRequest {

  constructor(captureId) {
    this.path = '/v1/payments/capture/{capture_id}/refund?';
    this.path = this.path.replace("{capture_id}", querystring.escape(captureId));
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

module.exports = {CaptureRefundRequest: CaptureRefundRequest};
