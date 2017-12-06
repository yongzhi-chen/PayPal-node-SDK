'use strict';

const chai = require('chai');
const client = require('../testHarness').client();
const WebProfileGetRequest = require('../../lib/paypalrestsdk').WebProfileGetRequest;



describe('WebProfileGetRequest', function () {
  it('works as expected', function () {
    let request = new WebProfileGetRequest('JWYZYv7E5ST3');

    return client.execute(request).then((r) => {
      chai.assert.equal(r.statusCode, 200);
      chai.assert.isNotNull(r.result);

      // Add your own checks here
    });
  });
});
