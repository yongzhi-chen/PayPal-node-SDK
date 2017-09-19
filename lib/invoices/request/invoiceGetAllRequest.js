// This class was generated on Mon, 18 Sep 2017 19:00:07 UTC by version 0.1 of Braintree SDK Generator
// invoiceGetAllRequest.js
// DO NOT EDIT
// @type request
// @json {"Name":"invoice.get_all","Description":"Lists merchant invoices. To filter the invoices that appear in the response, you can specify one or more optional query parameters.","QueryParameters":[{"Type":"integer","VariableName":"page","Description":"A *zero-relative* index of the list of merchant invoices.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"integer","VariableName":"page_size","Description":"The number of invoices to list beginning with the specified `page`.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"boolean","VariableName":"total_count_required","Description":"Indicates whether the total count appears in the response. Default is `false`.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null}],"HeaderParameters":[],"FormParameters":[],"PathParameters":[],"RequestType":null,"ResponseType":{"Type":"Invoices","VariableName":"","Description":"List of merchant invoices. Can include the total invoices count and HATEOAS links for navigation.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":[{"Type":"Invoice","VariableName":"invoices","Description":"An array of invoices as search result.","ArrayType":6,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"Link Description Object","VariableName":"links","Description":"The HATEOAS links for `next` and `previous` navigation in the result set.","ArrayType":6,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"integer","VariableName":"total_count","Description":"The total number of invoices that match the search criteria.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null}]},"ContentType":"application/json","HttpMethod":"GET","Path":"/v1/invoicing/invoices/","ExpectedStatusCode":200}

'use strict';

const querystring = require('querystring');
/**
 Lists merchant invoices. To filter the invoices that appear in the response, you can specify one or more optional query parameters.
 **/

class InvoiceGetAllRequest {

  constructor() {
    this.path = '/v1/invoicing/invoices/?';

    this.verb = 'GET';
    this.body = null;
    this.headers = {};
    this.headers['Content-Type'] = 'application/json'
  }

  page(page) {
    let params = querystring.escape(page);
    this.path += 'page=' + params + '&';
    return this;
  }

  pageSize(pageSize) {
    let params = querystring.escape(pageSize);
    this.path += 'page_size=' + params + '&';
    return this;
  }

  totalCountRequired(totalCountRequired) {
    let params = querystring.escape(totalCountRequired);
    this.path += 'total_count_required=' + params + '&';
    return this;
  }
}

module.exports = {InvoiceGetAllRequest: InvoiceGetAllRequest};
