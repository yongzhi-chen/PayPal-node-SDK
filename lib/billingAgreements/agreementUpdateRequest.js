// This class was generated on Wed, 06 Dec 2017 14:18:32 PST by version 0.1 of Braintree SDK Generator
// agreementUpdateRequest.js
// @version 0.1
// @type request
// @data H4sIAAAAAAAC/3ySQW8TQQyF7/wKy+ehCRw47C1KQCkSbaCBC6oqZ8fNTjWZGWwvYhXlv6PJRgESievbZ8/3/HaPd7RjbJC2wrzjZDd98WSMDhesrYRiISds8OtRVvBsFKJCfgaCTYgxpC2cpx1sBrhd3MDiZAupjb1nsI7B/1noQLtQynHWe2FVB2okBvUVB5Q8aIacbtDh555lWJHQjo1Fsfn+6HDJ5Fku1Q9Zdpfaiqz7R9vjeig1tJqEtEWH30gCbSJfHuMp+KtDrDuG20XNXzOdrWAZxtNV5JkIDeMrU4dfmPx9igM2zxSVq/CjD8IeG5OeHa4kFxYLrNikPsbD4+hhtXHJGfnjw/0drMja7hq7VPlJxrkr7lkCqlSV/LjlaIe8eeHWtOJTKXGAQmKB4inM8YOw5l5a1oto7/4b7SRcZaseLTkpj1uq6HCek3E6xcWKElqq6JMXzQkdLs3KJ7Yue2xwNVvPlzh2iw1Ofr6ZFBpqDzo5/ZSvz9XoZP93owd0+P5X4dbYPxhZr/PsGZu30+nh1W8AAAD//w==
// DO NOT EDIT
'use strict';

const querystring = require('querystring');
/**
 Updates details of a billing agreement, by ID. Details include the description, shipping address, start date, and so on.
 **/

class AgreementUpdateRequest {

  constructor(agreementId) {
    this.path = '/v1/payments/billing-agreements/{agreement_id}?';
    this.path = this.path.replace("{agreement_id}", querystring.escape(agreementId));
    this.verb = 'PATCH';
    this.body = null;
    this.headers = {
        'Content-Type': 'application/json'
        };
  }

  requestBody(patchRequest) {
    this.body = patchRequest;
    return this;
  }
}

module.exports = {AgreementUpdateRequest: AgreementUpdateRequest};
