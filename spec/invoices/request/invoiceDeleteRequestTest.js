// This class was generated on Mon, 18 Sep 2017 18:42:43 UTC by version 0.1 of Braintree SDK Generator
// invoiceDeleteRequestTest.js
// DO NOT EDIT
// @type request
// @json {"Name":"invoice.delete","Description":"Deletes a draft invoice, by ID. Deletes invoices in the draft state only. For invoices that have already been sent, you can [cancel the invoice](/docs/api/invoicing/#invoices_cancel). After you delete a draft invoice, you can no longer use it or show its details. However, you can reuse its invoice number.","QueryParameters":[],"HeaderParameters":[],"FormParameters":[],"PathParameters":[{"Type":"string","VariableName":"invoice_id","Description":"The ID of the invoice to delete.","ArrayType":0,"ReadOnly":false,"Required":true,"Properties":null}],"RequestType":null,"ResponseType":null,"ContentType":"","HttpMethod":"DELETE","Path":"/v1/invoicing/invoices/{invoice_id}","ExpectedStatusCode":200,"FileSuffix":"Test","UseFakeInstance":true}

'use strict';

const chai = require('chai');
const client = require('../../test_harness').client();
const InvoiceDeleteRequest = require('../../../lib/lib').InvoiceDeleteRequest;
const InvoiceCreate = require('./invoiceCreateRequestTest').InvoiceCreate;

describe('InvoiceDeleteRequest', function () {
  it('works as expected', function () {
    return InvoiceCreate().then((r) => {
      let request = new InvoiceDeleteRequest(r.result.id);

      return client.execute(request);
    }).then((deleteResp) => {
      chai.assert.equal(deleteResp.statusCode, 204);
    });
  });
});
