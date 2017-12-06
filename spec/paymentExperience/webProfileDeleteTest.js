'use strict';

const chai = require('chai');
const client = require('../testHarness').client();
const WebProfileDeleteRequest = require('../../lib/paypalrestsdk').WebProfileDeleteRequest;



describe('WebProfileDeleteRequest', function () {
  it('works as expected', function () {
    let request = new WebProfileDeleteRequest('cCyyiz0fIZbVNrMfUQ');

    return client.execute(request).then((r) => {
      chai.assert.equal(r.statusCode, 200);

      // Add your own checks here
    });
  });
});
