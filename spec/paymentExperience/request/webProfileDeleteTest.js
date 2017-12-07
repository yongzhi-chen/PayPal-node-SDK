'use strict';

const chai = require('chai');
const client = require('../../test_harness').client();
const WebProfileDeleteRequest = require('../../../lib/paypalrestsdk').WebProfileDeleteRequest;
const WebProfileCreate = require('./webProfileCreateTest').WebProfileCreate;

describe('WebProfileDeleteRequest', function () {
  it('works as expected', function () {
    return WebProfileCreate().then((r) => {
        let deleteRequest = new WebProfileDeleteRequest(r.result.id);

        return client.execute(deleteRequest).then((r) => {
          chai.assert.equal(r.statusCode, 204);
        });
    });
  });
});
