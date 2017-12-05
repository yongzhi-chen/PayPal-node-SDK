// This class was generated on Mon, 18 Sep 2017 18:42:43 UTC by version 0.1 of Braintree SDK Generator
// invoiceSendRequestTest.js
// DO NOT EDIT
// @type request
// @json {"Name":"invoice.send","Description":"Sends an invoice, by ID, to a customer.\u003cblockquote\u003e\u003cstrong\u003eNote:\u003c/strong\u003e After you send an invoice, you cannot resend it.\u003c/blockquote\u003e\u003cbr/\u003eOptionally, set the `notify_merchant` query parameter to also send the merchant an invoice update notification. Default is `true`.","QueryParameters":[{"Type":"boolean","VariableName":"notify_merchant","Description":"Indicates whether to send the invoice update notification to the merchant. Default is `true`.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null}],"HeaderParameters":[],"FormParameters":[],"PathParameters":[{"Type":"string","VariableName":"invoice_id","Description":"The ID of the invoice to send.","ArrayType":0,"ReadOnly":false,"Required":true,"Properties":null}],"RequestType":null,"ResponseType":null,"ContentType":"","HttpMethod":"POST","Path":"/v1/invoicing/invoices/{invoice_id}/send","ExpectedStatusCode":200,"FileSuffix":"Test","UseFakeInstance":true}

'use strict';

const chai = require('chai');
const client = require('../../test_harness').client();
const InvoiceSendRequest = require('../../../lib/paypalrestsdk').InvoiceSendRequest;
const InvoiceCreate = require('./invoiceCreateRequestTest').InvoiceCreate;

function invoiceSend(id) {
  let request = new InvoiceSendRequest(id);
  request.notifyMerchant(false);
  return client.execute(request);
}

describe('InvoiceSendRequest', function () {
  it('works as expected', function () {
    return InvoiceCreate().then((r) => {
      return invoiceSend(r.result.id)
    }).then((r) => {
      chai.assert.equal(r.statusCode, 202);
    });
  });
});

module.exports = {InvoiceSend: invoiceSend}
