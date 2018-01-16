'use strict';

const chai = require('chai');
const client = require('../../test_harness').client();
const CreditCardGetRequest = require('../../../lib/paypalrestsdk').CreditCardGetRequest;
const CreditCardCreate = require('./CreditCardCreateTest').CreditCardCreate;


describe('CreditCardGetRequest', function () {
  it('works as expected', function () {
    return CreditCardCreate().then((r) => {
      let request = new CreditCardGetRequest(r.result.id);

      return client.execute(request).then((r) => {
        chai.assert.equal(r.statusCode, 200);
        chai.assert.isNotNull(r.result);
      });
    });
  });
});
