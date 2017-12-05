// This class was generated on Mon, 18 Sep 2017 18:42:43 UTC by version 0.1 of Braintree SDK Generator
// templateDeleteRequestTest.js
// DO NOT EDIT
// @type request
// @json {"Name":"template.delete","Description":"Deletes a template, by ID.","QueryParameters":[],"HeaderParameters":[],"FormParameters":[],"PathParameters":[{"Type":"string","VariableName":"template_id","Description":"The ID of the template to delete.","ArrayType":0,"ReadOnly":false,"Required":true,"Properties":null}],"RequestType":null,"ResponseType":null,"ContentType":"","HttpMethod":"DELETE","Path":"/v1/invoicing/templates/{template_id}","ExpectedStatusCode":200,"FileSuffix":"Test","UseFakeInstance":true}

'use strict';

const chai = require('chai');
const client = require('../../test_harness').client();
const TemplateDeleteRequest = require('../../../lib/paypalrestsdk').TemplateDeleteRequest;
const TemplateCreate = require('./templateCreateRequestTest').TemplateCreate;

describe('TemplateDeleteRequest', function () {
  it('works as expected', function () {
    return TemplateCreate().then((r) => {

      let request = new TemplateDeleteRequest(r.result.template_id);

      return client.execute(request).then((r) => {
        chai.assert.equal(r.statusCode, 204);

        // Add your own checks here
      });
    });
  });
});
