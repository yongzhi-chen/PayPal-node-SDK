// This class was generated on Wed, 06 Dec 2017 14:52:17 PST by version 0.1 of Braintree SDK Generator
// webProfileCreateRequest.js
// @version 0.1
// @type request
// @data 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
// DO NOT EDIT
'use strict';

const querystring = require('querystring');
/**
 Creates a web experience profile. In the JSON request body, specify the profile name and details.
 **/

class WebProfileCreateRequest {

  constructor() {
    this.path = '/v1/payment-experience/web-profiles/?';
    this.verb = 'POST';
    this.body = null;
    this.headers = {
        'Content-Type': 'application/json'
        };
  }

  requestBody(webProfile) {
    this.body = webProfile;
    return this;
  }
}

module.exports = {WebProfileCreateRequest: WebProfileCreateRequest};
