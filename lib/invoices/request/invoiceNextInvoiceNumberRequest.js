// This class was generated on Mon, 18 Sep 2017 19:00:07 UTC by version 0.1 of Braintree SDK Generator
// invoiceNextInvoiceNumberRequest.js
// DO NOT EDIT
// @type request
// @json {"Name":"invoice.next_invoice_number","Description":"Generates the next invoice number that is available to the merchant.","QueryParameters":[],"HeaderParameters":[],"FormParameters":[],"PathParameters":[],"RequestType":null,"ResponseType":{"Type":"","VariableName":"","Description":"","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":[{"Type":"string","VariableName":"number","Description":"The next invoice number that is available to the merchant. This number is auto-incremented from the most recent invoice number.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null}]},"ContentType":"application/json","HttpMethod":"POST","Path":"/v1/invoicing/invoices/next-invoice-number","ExpectedStatusCode":200}

'use strict';

const querystring = require('querystring');
/**
 Generates the next invoice number that is available to the merchant.
 **/

class InvoiceNextInvoiceNumberRequest {

  constructor() {
    this.path = '/v1/invoicing/invoices/next-invoice-number?';

    this.verb = 'POST';
    this.body = null;
    this.headers = {};
    this.headers['Content-Type'] = 'application/json'
  }
}

module.exports = {InvoiceNextInvoiceNumberRequest: InvoiceNextInvoiceNumberRequest};
