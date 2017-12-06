// This class was generated on Tue, 19 Sep 2017 17:11:32 UTC by version 0.1 of Braintree SDK Generator
// paymentUpdateRequestTest.js
// DO NOT EDIT
// @type request
// @json {"Name":"payment.update","Description":"Partially updates a payment, by ID. You can update the amount, shipping address, invoice ID, and custom data. You cannot update a payment after the payment executes.","QueryParameters":[],"HeaderParameters":[],"FormParameters":[],"PathParameters":[{"Type":"string","VariableName":"payment_id","Description":"The ID of the payment to update.","ArrayType":0,"ReadOnly":false,"Required":true,"Properties":null}],"RequestType":{"Type":"JSON Patch","VariableName":"body","Description":"A JSON patch request.","ArrayType":6,"ReadOnly":false,"Required":false,"Properties":null},"ResponseType":null,"ContentType":"application/json","HttpMethod":"PATCH","Path":"/v1/payments/payment/{payment_id}","ExpectedStatusCode":200,"FileSuffix":"Test","UseFakeInstance":true}

'use strict';

const chai = require('chai');
const client = require('../../test_harness').client();
const PaymentUpdateRequest = require('../../../lib/paypalrestsdk').PaymentUpdateRequest;
const PaymentCreate = require('./paymentCreateRequestTest').PaymentCreate;

function buildRequestBody() {
  return [{
    "path": "/transactions/0/amount",
    "op": "replace",
    "value": {
      "currency": "USD",
      "total": "11"
    }
  }];
}

describe('PaymentUpdateRequest', function () {
  it('works as expected', function () {
    return PaymentCreate('sale', 'paypal').then((createResponse) => {
      let request = new PaymentUpdateRequest(createResponse.result.id);
      request.requestBody(buildRequestBody());
      return client.execute(request).then((r) => {
        chai.assert.equal(r.statusCode, 200);
      });
    });
  });
});
