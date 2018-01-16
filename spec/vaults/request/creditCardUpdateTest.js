'use strict';

const chai = require('chai');
const client = require('../../test_harness').client();
const CreditCardUpdateRequest = require('../../../lib/paypalrestsdk').CreditCardUpdateRequest;
const CreditCardGetRequest = require('../../../lib/paypalrestsdk').CreditCardGetRequest;
const CreditCardCreate = require('./CreditCardCreateTest').CreditCardCreate;

function buildRequestBody() {
  return JSON.parse('[ { "op": "add", "path": "/billing_address/line1", "value": "53 N Main St." }]');
}

describe('CreditCardUpdateRequest', function () {
  it('works as expected', function () {
    return CreditCardCreate().then((r) => {
        let creditCardId = r.result.id;
        let updateRequest = new CreditCardUpdateRequest(creditCardId);
        updateRequest.requestBody(buildRequestBody());

        return client.execute(updateRequest).then((r) => {
            chai.assert.equal(r.statusCode, 200);

            let getRequest = new CreditCardGetRequest(creditCardId);

            return client.execute(getRequest).then((r) => {
                chai.assert.equal(r.statusCode, 200);
                chai.assert.equal(r.result.billing_address.line1, "53 N Main St.");
            });
        });
    });
  });
});
