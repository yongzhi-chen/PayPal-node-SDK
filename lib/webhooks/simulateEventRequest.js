// This class was generated on Wed, 06 Dec 2017 14:47:47 PST by version 0.1 of Braintree SDK Generator
// simulateEventRequest.js
// @version 0.1
// @type request
// @data H4sIAAAAAAAC/8yWUW/bNhDH3/cpDtxLByhSu2AFpjejSZEMXZ3V2V6CID2Lp4i1RGrHk1OtyHcfKMmGI9uIh6ZZnwSQJ/L35/2PvC/qPVakUuVN1ZQoFNOSrKhInZDP2NRinFWpmg3THhDuaF44t4AuMoZzC1IQ/DabvgemvxvyAnOn2wh8TZnJW0DwWNUlQY1t6VDHKlJ/NMTtBTJWJMRepVfXkToj1MTj0beOq/HYBUoxHvvQb37Z1qTSL6r/rsnhdBD2F7LBeUkj4UePC69cthipV5GaMGPbb/YyQKCe2rJVaY6lp57KMOn1wAW7mlgMBew1phc29nYbr9vmRkLQGO2yoJ4CLFYUw2w4bmcJXN4lxTfz8MecdB/pY3jrGAizYpWrCGp2S6MJnC37n/+7NOFmpMw2ZXkfPSqv4XKnrj8/vIPccSdifeJW1850lsvBVUaEdPQg4vwEjO+EBayvTc6BEobNb4zeqeT8ZJWMIXAbP4h9au7r+xDla2c9jSpiTyFs0U8eeh2sE5ObDMP0tzd+xoRCN2Kq3c7XoabRaggRcFeQfWiWLWS4Qw/9qjoCY+Hq3AqxJRmtlTuuUK5fFCK1T5NEnCt9bEjy2PFtUkhVJpxnx8fHv/7oKQtrH/0Sv/7pmfx20I0gBQoIm9tbYtKPnMyzgi+JfaDdzz5EhBRtcv8PxIeW9Lc/03fGLmCDBKbzT5TtqOLS2IXfLmULGGAC93DvHzGFd03D1dnk8nQ6mUH36/WLRLvMJ1ibpEAhh/6omxjb+/VXKnJ7BDB513C229yrye/S3yu4/bUZ3umVddZSVnkQt9fuT9NsHCjDN1WF3O54DoYZ0Bs+XD3SO069bzU+d61fBB8nof2rQhQ2Ujg2/2xdy/HHp3r63jgrZIdeUGFdlwNV8sl3l8+ZSP07SeG0StXFdHap+qZSpSpZvko2hfhkq0c8/VxTJqRngtL4N06TSn9++er+h38BAAD//w==
// DO NOT EDIT
'use strict';

const querystring = require('querystring');
/**
 Simulates a webhook event. In the JSON request body, specify a sample payload.
 **/

class SimulateEventRequest {

  constructor() {
    this.path = '/v1/notifications/simulate-event?';
    this.verb = 'POST';
    this.body = null;
    this.headers = {
        'Content-Type': 'application/json'
        };
  }

  requestBody(simulateEvent) {
    this.body = simulateEvent;
    return this;
  }
}

module.exports = {SimulateEventRequest: SimulateEventRequest};
