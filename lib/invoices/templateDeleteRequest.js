// This class was generated on Tue, 05 Dec 2017 14:33:40 PST by version 0.1 of Braintree SDK Generator
// templateDeleteRequest.js
// @version 0.1
// @type request
// @data H4sIAAAAAAAC/2SQzWrrMBCF9/cpxKxFnHuX2l1ilwT6k7ahmxLKxJrEKrKkjsahJuTdi+umpOn24zDznXOAW2wJDAi1yaPQxJInIdBQUq7ZJXExgIHyE2eF6pTUatOrRTkBDfcdcb9ExpaEOIN5XmuYE1riS3oVub1kS5TmBzvAqk+DVRZ2YQcanpAdbjxd2L44+8t01ZBalCpulTT0baskqrHaIPyfGfvxx1TDA6G9C74Hs0WfaQBvnWOyYIQ70rDkmIjFUQYTOu+P6zFDWcYjAxxQTjFkOmezGITCVwwwJe9qHEyL1xwDaJiLpBuSJtph5eq6WlUwTgIGiv3fwoV9dLULu+LUJReHswGOoKF6T1QL2UdB6fIsWgLzbzo9/vkAAAD//w==
// DO NOT EDIT
'use strict';

const querystring = require('querystring');
/**
 Deletes a template, by ID.
 **/

class TemplateDeleteRequest {

  constructor(templateId) {
    this.path = '/v1/invoicing/templates/{template_id}?';
    this.path = this.path.replace("{template_id}", querystring.escape(templateId));
    this.verb = 'DELETE';
    this.body = null;
    this.headers = {
        'Content-Type': 'application/json'
        };
  }
}

module.exports = {TemplateDeleteRequest: TemplateDeleteRequest};
