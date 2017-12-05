// This class was generated on Mon, 18 Sep 2017 18:42:43 UTC by version 0.1 of Braintree SDK Generator
// invoiceDeleteExternalPaymentRequestTest.js
// DO NOT EDIT
// @type request
// @json {"Name":"invoice.delete_external_payment","Description":"Deletes an external payment, by invoice ID and transaction ID.","QueryParameters":[],"HeaderParameters":[],"FormParameters":[],"PathParameters":[{"Type":"string","VariableName":"invoice_id","Description":"The ID of the invoice from which to delete a payment transaction.","ArrayType":0,"ReadOnly":false,"Required":true,"Properties":null},{"Type":"string","VariableName":"transaction_id","Description":"The ID of the payment transaction to delete.","ArrayType":0,"ReadOnly":false,"Required":true,"Properties":null}],"RequestType":null,"ResponseType":null,"ContentType":"","HttpMethod":"DELETE","Path":"/v1/invoicing/invoices/{invoice_id}/payment-records/{transaction_id}","ExpectedStatusCode":200,"FileSuffix":"Test","UseFakeInstance":true}

'use strict';

const chai = require('chai');
const client = require('../../test_harness').client();
const InvoiceDeleteExternalPaymentRequest = require('../../../lib/paypalrestsdk').InvoiceDeleteExternalPaymentRequest;
const InvoiceRecordPayment = require('./invoiceRecordPaymentRequestTest').InvoiceRecordPayment;
const InvoiceCreate = require('./invoiceCreateRequestTest').InvoiceCreate;
const InvoiceGet = require('./invoiceGetRequestTest').InvoiceGet;

describe('InvoiceDeleteExternalPaymentRequest', function () {
  it('works as expected', function () {
    let invoiceId = '';
    return InvoiceCreate().then((createResp) => {
      invoiceId = createResp.result.id;
      return InvoiceRecordPayment(invoiceId);
    }).then(() => {
      return InvoiceGet(invoiceId);
    }).then((invoiceGetResp) => {
      let txnId = invoiceGetResp.result.payments[0].transaction_id;
      let request = new InvoiceDeleteExternalPaymentRequest(invoiceId, txnId);
      return client.execute(request);
    }).then((deletePaymentResp) => {
      chai.assert.equal(deletePaymentResp.statusCode, 204);
    });
  });
});
