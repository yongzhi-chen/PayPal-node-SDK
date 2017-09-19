// This class was generated on Mon, 18 Sep 2017 18:42:43 UTC by version 0.1 of Braintree SDK Generator
// templateGetTemplatesRequestTest.js
// DO NOT EDIT
// @type request
// @json {"Name":"template.get_templates","Description":"Lists all merchant-created templates. The list shows the emails, addresses, and phone numbers from the merchant profile.","QueryParameters":[{"Type":"string","VariableName":"fields","Description":"The fields to return in the response. Value is `all` or `none`. Specify `none` to return only the template name, ID, and default attributes.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null}],"HeaderParameters":[],"FormParameters":[],"PathParameters":[],"RequestType":null,"ResponseType":{"Type":"Templates","VariableName":"","Description":"List of merchant templates.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":[{"Type":"Address","VariableName":"addresses","Description":"List of addresses in merchant profile.","ArrayType":6,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"emails","Description":"List of emails in merchant profile.","ArrayType":6,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"Link Description Object","VariableName":"links","Description":"The HATEOAS links that provide related actions for the templates in the response.","ArrayType":6,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"Phone","VariableName":"phones","Description":"List of phone numbers in merchant profile.","ArrayType":6,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"Template","VariableName":"templates","Description":"An array of templates.","ArrayType":6,"ReadOnly":false,"Required":false,"Properties":null}]},"ContentType":"","HttpMethod":"GET","Path":"/v1/invoicing/templates/","ExpectedStatusCode":200,"FileSuffix":"Test","UseFakeInstance":true}

'use strict';

const chai = require('chai');
const client = require('../../test_harness').client();
const TemplateGetTemplatesRequest = require('../../../lib/lib').TemplateGetTemplatesRequest;


describe('TemplateGetTemplatesRequest', function () {
  it('works as expected', function () {
    let request = new TemplateGetTemplatesRequest();
    request.fields('all');

    return client.execute(request).then((r) => {
      chai.assert.equal(r.statusCode, 200);
      chai.assert.isNotNull(r.result);

    });
  });
});
