// This class was generated on Wed, 06 Dec 2017 11:55:40 PST by version 0.1 of Braintree SDK Generator
// webProfileDeleteRequest.js
// @version 0.1
// @type request
// @data H4sIAAAAAAAC/2SRzc7TMBRE9zyFddduU1h6h5qgVuKnQMUGVcipp8RSYpvrG9qo6rujkIiWftujsX1mfKWPtgMZOqNeJI4n32Lp0EJAmkrkI/skPgYyVP7FWVl1Rq1wSWCPcISaz2lVD2pbLknT5x487CzbDgLOZL4fNG1gHfiZvovcPbOdleY/dqX9kEbNLOzDT9L0zbK3dYtZf1b44d0L7X0DtS1VPClp/rkqiWqqOeq+ZbbD9MJK0xdY9ym0A5mTbTNG8Kv3DEdGuIemHccEFo9MJvRteztMGWSZLhnhiHKKIeORrWMQhDlGpGkjkj5AmujGhav31b6iaQAyVPx+XSQ7dAiyuO9dPPxVLq736jfSVF0SjgL3Vaz0eR0dyLxZrW6v/gAAAP//
// DO NOT EDIT
'use strict';

const querystring = require('querystring');
/**
 Deletes a web experience profile, by ID.
 **/

class WebProfileDeleteRequest {

  constructor(profileId) {
    this.path = '/v1/payment-experience/web-profiles/{profile_id}?';
    this.path = this.path.replace("{profile_id}", querystring.escape(profileId));
    this.verb = 'DELETE';
    this.body = null;
    this.headers = {};
  }
}

module.exports = {WebProfileDeleteRequest: WebProfileDeleteRequest};
