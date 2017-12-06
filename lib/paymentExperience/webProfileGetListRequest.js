// This class was generated on Wed, 06 Dec 2017 11:55:40 PST by version 0.1 of Braintree SDK Generator
// webProfileGetListRequest.js
// @version 0.1
// @type request
// @data H4sIAAAAAAAC/2SRza7TMBBG9zyFNeu0KSxYeFeVQhf8BKhggVhMki/UyLHNeEIbVX33q9z0/qh3ZelY9pxjn+kz9yBLR9SLJLFzHss/0IV3Wamgd8iNuKQuBrL00WXNhr03R9QGpwRxCA3M9WQ2XRTDpoc0Bw5qopg81H/R6JIK+jpAxoqFeygkk/31u6AduIXc0vdR+ltWsR5u2Tf8G5B1PyaQDYP3E8ophoyZnWle6SdqU82aVNAPFse1x7X+Rek6GBbh0cTuvvUhcMpYTxvzrW+ncdx+CX4k27HPmJWcoH0ElcQEUYc8K14K2sSgCFftafpONX2CHmJLlj5s9zTnkqXy/+sy8dgj6OLpxctn/5VLKmh7SmgU7XdlHfImtiD7ZrW6vLoDAAD//w==
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
    this.headers = {};
  }
}

module.exports = {WebProfileGetListRequest: WebProfileGetListRequest};
