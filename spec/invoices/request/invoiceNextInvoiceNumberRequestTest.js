// This class was generated on Mon, 18 Sep 2017 18:42:43 UTC by version 0.1 of Braintree SDK Generator
// invoiceNextInvoiceNumberRequestTest.js
// DO NOT EDIT
// @type request
// @json {"Name":"invoice.next_invoice_number","Description":"Generates the next invoice number that is available to the merchant.","QueryParameters":[],"HeaderParameters":[],"FormParameters":[],"PathParameters":[],"RequestType":null,"ResponseType":{"Type":"","VariableName":"","Description":"","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":[{"Type":"string","VariableName":"number","Description":"The next invoice number that is available to the merchant. This number is auto-incremented from the most recent invoice number.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null}]},"ContentType":"","HttpMethod":"POST","Path":"/v1/invoicing/invoices/next-invoice-number","ExpectedStatusCode":200,"FileSuffix":"Test","UseFakeInstance":true}

'use strict';

const chai = require('chai');
const client = require('../../test_harness').client();
const InvoiceNextInvoiceNumberRequest = require('../../../lib/paypalrestsdk').InvoiceNextInvoiceNumberRequest;


describe('InvoiceNextInvoiceNumberRequest', function () {
  it('works as expected', function () {
    let request = new InvoiceNextInvoiceNumberRequest();

    return client.execute(request).then((numberResp) => {
      chai.assert.equal(numberResp.statusCode, 200);
      chai.assert.isNotNull(numberResp.result);
    });
  });
});
