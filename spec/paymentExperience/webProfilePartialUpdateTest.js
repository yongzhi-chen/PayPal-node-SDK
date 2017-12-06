'use strict';

const chai = require('chai');
const client = require('../testHarness').client();
const WebProfilePartialUpdateRequest = require('../../lib/paypalrestsdk').WebProfilePartialUpdateRequest;

function buildRequestBody() {
  return JSON.parse('{}');
}

describe('WebProfilePartialUpdateRequest', function () {
  it('works as expected', function () {
    let request = new WebProfilePartialUpdateRequest('h2X6MpYGy6GEEb');
    request.requestBody(buildRequestBody());

    return client.execute(request).then((r) => {
      chai.assert.equal(r.statusCode, 204);

      // Add your own checks here
    });
  });
});
