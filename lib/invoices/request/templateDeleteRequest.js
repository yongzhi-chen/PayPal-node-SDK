// This class was generated on Mon, 18 Sep 2017 19:00:07 UTC by version 0.1 of Braintree SDK Generator
// templateDeleteRequest.js
// DO NOT EDIT
// @type request
// @json {"Name":"template.delete","Description":"Deletes a template, by ID.","QueryParameters":[],"HeaderParameters":[],"FormParameters":[],"PathParameters":[{"Type":"string","VariableName":"template_id","Description":"The ID of the template to delete.","ArrayType":0,"ReadOnly":false,"Required":true,"Properties":null}],"RequestType":null,"ResponseType":null,"ContentType":"application/json","HttpMethod":"DELETE","Path":"/v1/invoicing/templates/{template_id}","ExpectedStatusCode":200}

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
    this.headers = {};
    this.headers['Content-Type'] = 'application/json'
  }
}

module.exports = {TemplateDeleteRequest: TemplateDeleteRequest};
