'use strict';

const chai = require('chai');
const client = require('../testHarness').client();
const WebProfileUpdateRequest = require('../../lib/paypalrestsdk').WebProfileUpdateRequest;

function buildRequestBody() {
  return JSON.parse('{"temporary":true,"flow_config":{"bank_txn_pending_url":"Vh9hsWpSqYK","landing_page_type":"hNCysD9TGQT2A","return_uri_http_method":"i3r2XvyBLOHQBBsgsqC","user_action":"cKLBda i 3Rd56x"},"id":"UAvtSshsZUvgrWhqS","input_fields":{"address_override":9,"allow_note":true,"no_shipping":0},"name":"dXtOyW09Ev","presentation":{"locale_code":"7iPtTwKTiIqZB2","logo_image":"1urYGEI v0EN","brand_name":"U9E2U2S67vqSe0sR0"}}');
}

describe('WebProfileUpdateRequest', function () {
  it('works as expected', function () {
    let request = new WebProfileUpdateRequest('bv8UL8H3ab4GNA2s 8g');
    request.requestBody(buildRequestBody());

    return client.execute(request).then((r) => {
      chai.assert.equal(r.statusCode, 204);

      // Add your own checks here
    });
  });
});
