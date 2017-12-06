'use strict';

const chai = require('chai');
const client = require('../testHarness').client();
const WebProfileCreateRequest = require('../../lib/paypalrestsdk').WebProfileCreateRequest;

function buildRequestBody() {
  return JSON.parse('{"temporary":true,"flow_config":{"return_uri_http_method":"7YA9U8SGKOQTpq","user_action":"qRi1r MhzebuM","bank_txn_pending_url":"dNX3Axz7rE2","landing_page_type":"W57WEzQJTwNIiCaN"},"id":"hZ6SdrSFQQOy","input_fields":{"allow_note":true,"no_shipping":3,"address_override":4},"name":"7Pxw7vJsgG16qh","presentation":{"brand_name":"uX pNT29dXBbC2","locale_code":"4MaiJPIaWSOvPPZ3","logo_image":"P5S0EpIygFdrQZ"}}');
}

describe('WebProfileCreateRequest', function () {
  it('works as expected', function () {
    let request = new WebProfileCreateRequest();
    request.requestBody(buildRequestBody());

    return client.execute(request).then((r) => {
      chai.assert.equal(r.statusCode, 201);
      chai.assert.isNotNull(r.result);

      // Add your own checks here
    });
  });
});
