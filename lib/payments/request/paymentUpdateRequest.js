// This class was generated on Tue, 19 Sep 2017 17:11:32 UTC by version 0.1 of Braintree SDK Generator
// paymentUpdateRequest.js
// DO NOT EDIT
// @type request
// @json {"Name":"payment.update","Description":"Partially updates a payment, by ID. You can update the amount, shipping address, invoice ID, and custom data. You cannot update a payment after the payment executes.","QueryParameters":[],"HeaderParameters":[],"FormParameters":[],"PathParameters":[{"Type":"string","VariableName":"payment_id","Description":"The ID of the payment to update.","ArrayType":0,"ReadOnly":false,"Required":true,"Properties":null}],"RequestType":{"Type":"JSON Patch","VariableName":"body","Description":"A JSON patch request.","ArrayType":6,"ReadOnly":false,"Required":false,"Properties":null},"ResponseType":null,"ContentType":"application/json","HttpMethod":"PATCH","Path":"/v1/payments/payment/{payment_id}","ExpectedStatusCode":200}

'use strict';

const querystring = require('querystring');
/**
 Partially updates a payment, by ID. You can update the amount, shipping address, invoice ID, and custom data. You cannot update a payment after the payment executes.
 **/

class PaymentUpdateRequest {

  constructor(paymentId) {
    this.path = '/v1/payments/payment/{payment_id}?';
    
    this.path = this.path.replace("{payment_id}", querystring.escape(paymentId));

    this.verb = 'PATCH';
    this.body = null;
    this.headers = {};
    this.headers['Content-Type'] = 'application/json'
  }

  requestBody(body) {
    this.body = body;
    return this;
  }
}

module.exports = {PaymentUpdateRequest: PaymentUpdateRequest};
