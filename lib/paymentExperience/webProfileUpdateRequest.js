// This class was generated on Wed, 06 Dec 2017 14:52:18 PST by version 0.1 of Braintree SDK Generator
// webProfileUpdateRequest.js
// @version 0.1
// @type request
// @data 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
// DO NOT EDIT
'use strict';

const querystring = require('querystring');
/**
 Updates a web experience profile, by ID. In the JSON request body, specify the profile details. If your request omits any profile parameters, any previously set values for those parameters are removed.
 **/

class WebProfileUpdateRequest {

  constructor(profileId) {
    this.path = '/v1/payment-experience/web-profiles/{profile_id}?';
    this.path = this.path.replace("{profile_id}", querystring.escape(profileId));
    this.verb = 'PUT';
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

module.exports = {WebProfileUpdateRequest: WebProfileUpdateRequest};
