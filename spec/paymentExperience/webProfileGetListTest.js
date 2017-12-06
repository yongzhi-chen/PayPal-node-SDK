'use strict';

const chai = require('chai');
const client = require('../testHarness').client();
const WebProfileGetListRequest = require('../../lib/paypalrestsdk').WebProfileGetListRequest;



describe('WebProfileGetListRequest', function () {
  it('works as expected', function () {
    let request = new WebProfileGetListRequest();

    return client.execute(request).then((r) => {
      chai.assert.equal(r.statusCode, 200);
      chai.assert.isNotNull(r.result);

      // Add your own checks here
    });
  });
});
