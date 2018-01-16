'use strict';

const chai = require('chai');
const client = require('../../test_harness').client();
const WebhookListRequest = require('../../../lib/paypalrestsdk').WebhookListRequest;
const WebhookCreate = require('./WebhookCreateTest').WebhookCreate;

function WebhookList() {
  let request = new WebhookListRequest();
  return client.execute(request);
}

describe('WebhookListRequest', function () {
  it('works as expected', function () {
    return WebhookCreate().then((r) => {
        let request = new WebhookListRequest();

        return WebhookList().then((r) => {
          chai.assert.equal(r.statusCode, 200);
          chai.assert.isNotNull(r.result);

          // Add your own checks here
        });
    });
  });
});

module.exports = {
  WebhookList: WebhookList
}