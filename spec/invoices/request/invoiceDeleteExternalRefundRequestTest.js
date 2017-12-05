// This class was generated on Mon, 18 Sep 2017 18:42:43 UTC by version 0.1 of Braintree SDK Generator
// invoiceDeleteExternalRefundRequestTest.js
// DO NOT EDIT
// @type request
// @json {"Name":"invoice.delete_external_refund","Description":"Deletes an external refund, by invoice ID and transaction ID.","QueryParameters":[],"HeaderParameters":[],"FormParameters":[],"PathParameters":[{"Type":"string","VariableName":"invoice_id","Description":"The ID of the invoice from which to delete the refund transaction.","ArrayType":0,"ReadOnly":false,"Required":true,"Properties":null},{"Type":"string","VariableName":"transaction_id","Description":"The ID of the refund transaction to delete.","ArrayType":0,"ReadOnly":false,"Required":true,"Properties":null}],"RequestType":null,"ResponseType":null,"ContentType":"","HttpMethod":"DELETE","Path":"/v1/invoicing/invoices/{invoice_id}/refund-records/{transaction_id}","ExpectedStatusCode":200,"FileSuffix":"Test","UseFakeInstance":true}

'use strict';

const chai = require('chai');
const client = require('../../test_harness').client();
const InvoiceDeleteExternalRefundRequest = require('../../../lib/paypalrestsdk').InvoiceDeleteExternalRefundRequest;
const InvoiceCreate = require('./invoiceCreateRequestTest').InvoiceCreate;
const InvoiceRecordRefund = require('./invoiceRecordRefundRequestTest').InvoiceRecordRefund;
const InvoiceGet = require('./invoiceGetRequestTest').InvoiceGet;


describe('InvoiceDeleteExternalRefundRequest', function () {
  it('works as expected', function () {
    let invoiceId = '';
    return InvoiceCreate().then((createResp) => {
      invoiceId = createResp.result.id;
      return InvoiceRecordRefund(invoiceId);
    }).then(() => {
      return InvoiceGet(invoiceId);
    }).then((getResp) => {
      let refundId = getResp.result.refunds[0].transaction_id;
      let request = new InvoiceDeleteExternalRefundRequest(invoiceId, refundId);

      return client.execute(request);
    }).then((deleteRefundRequest) => {
      chai.assert.equal(deleteRefundRequest.statusCode, 204);
    });
  });
});
