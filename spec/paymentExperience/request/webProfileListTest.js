'use strict';

const chai = require('chai');
const client = require('../../test_harness').client();
const WebProfileListRequest = require('../../../lib/paypalrestsdk').WebProfileListRequest;
const WebProfileCreate = require('./webProfileCreateTest').WebProfileCreate;


describe('WebProfileListRequest', function () {
  it('works as expected', function () {
    return WebProfileCreate().then((r) => {
        let request = new WebProfileListRequest();

        return client.execute(request).then((r) => {
          chai.assert.equal(r.statusCode, 200);
          chai.assert.isNotNull(r.result);

          // Add your own checks here
        });
    });
  });
});
