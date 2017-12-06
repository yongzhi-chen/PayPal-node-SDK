// This class was generated on Wed, 06 Dec 2017 11:55:40 PST by version 0.1 of Braintree SDK Generator
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
    this.headers = {};
  }

  requestBody(webProfile) {
    this.body = webProfile;
    return this;
  }
}

module.exports = {WebProfileCreateRequest: WebProfileCreateRequest};
