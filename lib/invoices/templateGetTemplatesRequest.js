// This class was generated on Tue, 05 Dec 2017 14:33:40 PST by version 0.1 of Braintree SDK Generator
// templateGetTemplatesRequest.js
// @version 0.1
// @type request
// @data H4sIAAAAAAAC/7yUzU7bQBDH732K0Zy3Ce2hB98ioKVSW2iJuFSITLxjvHS9686OaSPEu1drkwQwUSX6cfPOjmd/85+PG/xEDWOByk3rSXlyyXqxPiQ0eMCpFNeqiwEL/OCSJiDvoWEpawr6shQmZQubnyYwrxm8Swqpjj8SaM3ADTmfDJC1wilx/gwW2joGhtA1S5YElcSm914Hh1Zi5TxP0ODnjmV1QkINK0vC4usNzldthk8qLlyiwTMSR0vPd0lVjr0dJ5HxhivQCMLaSQAX+peFUxtD4gmcke8YXIIFeb+AKLAIMfBiAqctl65a3Z3vxYjBr/ooay0gUMMG3h8M2VquqPMKpCpu2WWt0OBMhFZDJnsGvzDZ4+BXWFTkE2fD984J243hRGLLoo4TFqHz/vbc4BGTZXmgzrnBt1Gax7YT0vqxLT/BSQeGHDKbBh0G20bp+53xSOwnewVitS3mtkP+MOtt5e/aaUyz6bOdWBuPXPqnGu4e4Ztn1cX8tkGHqdiJOFz/Bz7vwrcLu2W4iMsrLnUMnB2fHqij2fzweHYKvQdoTT3rtbN5pny/IajM/gmqKA+mJI2G7+9m1y+ZcS69ebf4D1fTv6/BWo0x6O51PAtAmSDz7pqu53Gd3xrcj0E56HrU2ta7kvLL06sUAxo8Um0/stbRYoHvDuc4rBcscHr9aurCdXSlC5fTDdoUDR7+bLlUtqdK2qX9aBmL13t7ty9+AQAA//8=
// DO NOT EDIT
'use strict';

const querystring = require('querystring');
/**
 Lists all merchant-created templates. The list shows the emails, addresses, and phone numbers from the merchant profile.
 **/

class TemplateGetTemplatesRequest {

  constructor() {
    this.path = '/v1/invoicing/templates/?';
    this.verb = 'GET';
    this.body = null;
    this.headers = {
        'Content-Type': 'application/json'
        };
  }

  fields(fields) {
    let params = querystring.escape(fields);
    this.path += 'fields=' + params + '&';
    return this;
  }
}

module.exports = {TemplateGetTemplatesRequest: TemplateGetTemplatesRequest};
