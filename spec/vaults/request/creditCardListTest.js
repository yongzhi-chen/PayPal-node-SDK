'use strict';

const chai = require('chai');
const client = require('../../test_harness').client();
const CreditCardListRequest = require('../../../lib/paypalrestsdk').CreditCardListRequest;
const CreditCardCreate = require('./CreditCardCreateTest').CreditCardCreate;


describe('CreditCardListRequest', function () {
  it('works as expected', function () {
    return CreditCardCreate().then((r) => {
        let request = new CreditCardListRequest();

        return client.execute(request).then((r) => {
          chai.assert.equal(r.statusCode, 200);
          chai.assert.isNotNull(r.result);

          // Add your own checks here
        });
    });
  });
});
