// This class was generated on Wed, 06 Dec 2017 14:52:18 PST by version 0.1 of Braintree SDK Generator
// webProfileGetListRequest.js
// @version 0.1
// @type request
// @data H4sIAAAAAAAC/2SRT4/TMBBH73wKa85pUzhw8K0qhR74E6CCA+IwSX6hrhzbjCe0UdXvjkLK7qp7svQse97TXOgj9yBLJ9SLJLFzHstf0IV3WamgN8iNuKQuBrL03mXNhr03J9QG5wRxCA3M7WU2XRTDpoc0Bw5qopg81Ec0uqSCPg+QsWLhHgrJZH/8LGgHbiH39G2U/p5VrId79gW/B2Tdjwlkw+D9hHKKIWNmF5pP+o7aVLMmFfSNxXHtcat/VroOhkV4NLH71/o/cMpYTxfzr6+ncdx+Cn4k27HPmJWcoH0AlcQEUYc8K14L2sSgCDdt4pS8a3gaXR5zDFTQTjV9gB5iS5bebfc055Ol8s/LMvHYI+jicQPlk/3lkgranhMaRftVWYe8iS3Ivlqtri/+AgAA//8=
// DO NOT EDIT
'use strict';

const querystring = require('querystring');
/**
 Lists all web experience profiles for a merchant or subject.
 **/

class WebProfileGetListRequest {

  constructor() {
    this.path = '/v1/payment-experience/web-profiles/?';
    this.verb = 'GET';
    this.body = null;
    this.headers = {
        'Content-Type': 'application/json'
        };
  }
}

module.exports = {WebProfileGetListRequest: WebProfileGetListRequest};
