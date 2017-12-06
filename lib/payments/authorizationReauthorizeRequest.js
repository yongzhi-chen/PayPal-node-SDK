// This class was generated on Wed, 06 Dec 2017 11:34:52 PST by version 0.1 of Braintree SDK Generator
// authorizationReauthorizeRequest.js
// @version 0.1
// @type request
// @data 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
// DO NOT EDIT
'use strict';

const querystring = require('querystring');
/**
 Re-authorizes a PayPal account payment, by authorization ID. To ensure that funds are still available, re-authorize a payment after the initial three-day honor period. Supports only the `amount` request parameter. You can re-authorize a payment only once from four to 29 days after three-day honor period for the original authorization expires. If 30 days have passed from the original authorization, you must create a new authorization instead. A re-authorized payment itself has a new three-day honor period. You can re-authorize a transaction once for up to 115% of the originally authorized amount, not to exceed an increase of $75 USD.
 **/

class AuthorizationReauthorizeRequest {

  constructor(authorizationId) {
    this.path = '/v1/payments/authorization/{authorization_id}/reauthorize?';
    this.path = this.path.replace("{authorization_id}", querystring.escape(authorizationId));
    this.verb = 'POST';
    this.body = null;
    this.headers = {
        'Content-Type': 'application/json'
        };
  }

  requestBody(authorization) {
    this.body = authorization;
    return this;
  }
}

module.exports = {AuthorizationReauthorizeRequest: AuthorizationReauthorizeRequest};
