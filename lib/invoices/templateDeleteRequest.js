// This class was generated on Tue, 16 Jan 2018 14:49:56 CST by version 0.1.0-dev+01638e of Braintree SDK Generator
// templateDeleteRequest.js
// @version 0.1.0-dev+01638e
// @type request
// @data H4sIAAAAAAAC/2SQQW/iMBCF7/srrHe2CLtH31YkK9DutrRFvVSoMvFAXDm2a09QI8R/r9JARen109PM994BN7olKDC10WmmiSFHTJAoKdfJRrbBQ6H8wFlocU5KsenFopxA4q6j1C910i0xpQz1tJaYkzaUrumfkNprttTcfGEHrPo4WGVO1u8g8aiT1RtHV7bP1kDiL/Un/k171ZBYlCJsBTf0qS44iLHnYP87Jd2PD6cS96TNrXc91Fa7TAN47WwiA8WpI4llCpESW8pQvnPuuB4zlHk8MsAB5Rh8pks2C57Jn2LQMTpb68G0eMnBQ2LOHP8TN8EMk1f/qlWFcR8oFPufhfX7YGvrd8W5Sy4OF2scIVG9RaqZzANr7vIsGIL6NZ0ef7wDAAD//w==
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
