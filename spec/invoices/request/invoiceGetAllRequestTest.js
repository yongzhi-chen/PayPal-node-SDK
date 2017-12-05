// This class was generated on Mon, 18 Sep 2017 18:42:43 UTC by version 0.1 of Braintree SDK Generator
// invoiceGetAllRequestTest.js
// DO NOT EDIT
// @type request
// @json {"Name":"invoice.get_all","Description":"Lists merchant invoices. To filter the invoices that appear in the response, you can specify one or more optional query parameters.","QueryParameters":[{"Type":"integer","VariableName":"page","Description":"A *zero-relative* index of the list of merchant invoices.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"integer","VariableName":"page_size","Description":"The number of invoices to list beginning with the specified `page`.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"boolean","VariableName":"total_count_required","Description":"Indicates whether the total count appears in the response. Default is `false`.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null}],"HeaderParameters":[],"FormParameters":[],"PathParameters":[],"RequestType":null,"ResponseType":{"Type":"Invoices","VariableName":"","Description":"List of merchant invoices. Can include the total invoices count and HATEOAS links for navigation.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":[{"Type":"Invoice","VariableName":"invoices","Description":"An array of invoices as search result.","ArrayType":6,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"Link Description Object","VariableName":"links","Description":"The HATEOAS links for `next` and `previous` navigation in the result set.","ArrayType":6,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"integer","VariableName":"total_count","Description":"The total number of invoices that match the search criteria.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null}]},"ContentType":"","HttpMethod":"GET","Path":"/v1/invoicing/invoices/","ExpectedStatusCode":200,"FileSuffix":"Test","UseFakeInstance":true}

'use strict';

const chai = require('chai');
const client = require('../../test_harness').client();
const InvoiceGetAllRequest = require('../../../lib/paypalrestsdk').InvoiceGetAllRequest;


describe('InvoiceGetAllRequest', function () {
  it('works as expected', function () {
    let request = new InvoiceGetAllRequest();
    request.page(3);
    request.pageSize(7);
    request.totalCountRequired(false);

    return client.execute(request).then((getAllResp) => {
      chai.assert.equal(getAllResp.statusCode, 200);
      chai.assert.isNotNull(getAllResp.result);
    });
  });
});
