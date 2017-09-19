// This class was generated on Mon, 18 Sep 2017 18:42:43 UTC by version 0.1 of Braintree SDK Generator
// invoiceRecordPaymentRequestTest.js
// DO NOT EDIT
// @type request
// @json {"Name":"invoice.record-payment","Description":"Marks the status of an invoice, by ID, as paid. Include a payment detail object that defines the payment method and other details in the JSON request body.","QueryParameters":[],"HeaderParameters":[],"FormParameters":[],"PathParameters":[{"Type":"string","VariableName":"invoice_id","Description":"The ID of the invoice to mark as paid.","ArrayType":0,"ReadOnly":false,"Required":true,"Properties":null}],"RequestType":{"Type":"Payment Detail","VariableName":"body","Description":"Payment details.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":[{"Type":"Currency","VariableName":"amount","Description":"Base object for all financial value related fields (balance, payment due, etc.)","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":[{"Type":"string","VariableName":"currency","Description":"3 letter currency code as defined by ISO 4217.","ArrayType":0,"ReadOnly":false,"Required":true,"Properties":null},{"Type":"string","VariableName":"value","Description":"amount up to N digit after the decimals separator as defined in ISO 4217 for the appropriate currency code.","ArrayType":0,"ReadOnly":false,"Required":true,"Properties":null}]},{"Type":"string","VariableName":"date","Description":"The date when the invoice was paid. The date format is *yyyy*-*MM*-*dd* *z*, as defined in [Internet Date/Time Format](http://tools.ietf.org/html/rfc3339#section-5.6).","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"method","Description":"The payment mode or method. Required with the `EXTERNAL` payment type.","ArrayType":0,"ReadOnly":false,"Required":true,"Properties":null},{"Type":"string","VariableName":"note","Description":"Optional. A note associated with the payment.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"transaction_id","Description":"The ID for a PayPal payment transaction. Required with the `PAYPAL` payment type.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"transaction_type","Description":"The transaction type.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"type","Description":"The payment type in an invoicing flow. The [record refund](/docs/api/invoicing/#invoices_record-refund) method supports the `EXTERNAL` refund type. The `PAYPAL` refund type is supported for backward compatibility.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null}]},"ResponseType":null,"ContentType":"","HttpMethod":"POST","Path":"/v1/invoicing/invoices/{invoice_id}/record-payment","ExpectedStatusCode":200,"FileSuffix":"Test","UseFakeInstance":true}

'use strict';

const chai = require('chai');
const client = require('../../test_harness').client();
const InvoiceRecordPaymentRequest = require('../../../lib/lib').InvoiceRecordPaymentRequest;
const InvoiceCreate = require('./invoiceCreateRequestTest').InvoiceCreate;
const InvoiceSend = require('./invoiceSendRequestTest').InvoiceSend;

function buildRequestBody() {
  return {
    method: 'CASH',
    date: '2017-07-11 00:01:00 PST',
    amount: {
      value: '10',
      currency: 'USD'
    }
  };
}

/**
 * Sends and creates a payment on an invoice with the given id
 */
function invoiceRecordPayment(id) {
  return InvoiceSend(id).then(() => {
    let request = new InvoiceRecordPaymentRequest(id);
    request.requestBody(buildRequestBody());

    return client.execute(request);
  })
}

describe('InvoiceRecordPaymentRequest', function () {
  it('works as expected', function () {
    return InvoiceCreate().then((resp) => {
      return resp.result.id;
    }).then((id) => {
      return invoiceRecordPayment(id);
    }).then((invoicePaymentResp) => {
      chai.assert.equal(invoicePaymentResp.statusCode, 204);
    });
  });
});

module.exports = {
  InvoiceRecordPayment: invoiceRecordPayment
}
