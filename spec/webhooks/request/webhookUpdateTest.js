'use strict';

const chai = require('chai');
const client = require('../../test_harness').client();
const WebhookUpdateRequest = require('../../../lib/paypalrestsdk').WebhookUpdateRequest;
const WebhookGetRequest = require('../../../lib/paypalrestsdk').WebhookGetRequest;
const WebhookCreate = require('./WebhookCreateTest').WebhookCreate;

function buildRequestBody(url) {
  return JSON.parse('[ { "op": "replace", "path": "/url", "value": "' + url + '" } ]');
}

describe('WebhookUpdateRequest', function () {
  it('works as expected', function () {
    return WebhookCreate().then((r) => {
        let WebhookId = r.result.id;
        let updateRequest = new WebhookUpdateRequest(WebhookId);
        let url = "https://example.com/" + Math.random().toString(36).substring(7);
        updateRequest.requestBody(buildRequestBody(url));

        return client.execute(updateRequest).then((r) => {
            chai.assert.equal(r.statusCode, 200);

            let getRequest = new WebhookGetRequest(WebhookId);

            return client.execute(getRequest).then((r) => {
                chai.assert.equal(r.statusCode, 200);
                chai.assert.equal(r.result.url, url);
            });
        });
    });
  });
});
