// This class was generated on Mon, 18 Sep 2017 18:42:43 UTC by version 0.1 of Braintree SDK Generator
// invoiceQrCodeRequestTest.js
// DO NOT EDIT
// @type request
// @json {"Name":"invoice.qr_code","Description":"Generates a QR code for an invoice, by ID.\u003cbr/\u003e\u003cbr/\u003eThe QR code is a PNG image in [Base64-encoded](https://www.base64encode.org/) format that corresponds to the invoice ID. You can generate a QR code for an invoice and add it to a paper or PDF invoice. When a customer uses their mobile device to scan the QR code, he or she is redirected to the PayPal mobile payment flow where he or she can pay online with PayPal or a credit card.\u003cbr/\u003e\u003cbr/\u003eBefore you get a QR code, you must:\u003col\u003e\u003cli\u003e\u003cp\u003e[Create an invoice](#invoices_create). Specify `qrinvoice@paypal.com` as the recipient email address in the `billing_info` object. Use a customer email address only if you want to email the invoice.\u003c/p\u003e\u003c/li\u003e\u003cli\u003e\u003cp\u003e[Send an invoice](#invoices_send) to move the invoice from a draft to payable state. If you specify `qrinvoice@paypal.com` as the recipient email address, the invoice is not emailed.\u003c/p\u003e\u003c/li\u003e\u003c/ol\u003e","QueryParameters":[{"Type":"string","VariableName":"action","Description":"The type of URL for which to generate a QR code. Default is `pay` and is the only supported value.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"integer","VariableName":"height","Description":"The height, in pixels, of the QR code image. Valid value is from 150 to 500. Default is 500.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"integer","VariableName":"width","Description":"The width, in pixels, of the QR code image. Valid value is from 150 to 500. Default is 500.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null}],"HeaderParameters":[],"FormParameters":[],"PathParameters":[{"Type":"string","VariableName":"invoice_id","Description":"The ID of the invoice for which to generate a QR code.","ArrayType":0,"ReadOnly":false,"Required":true,"Properties":null}],"RequestType":null,"ResponseType":{"Type":"","VariableName":"","Description":"base64 encoded image of type image/png","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":[{"Type":"string","VariableName":"image","Description":"","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null}]},"ContentType":"","HttpMethod":"GET","Path":"/v1/invoicing/invoices/{invoice_id}/qr-code","ExpectedStatusCode":200,"FileSuffix":"Test","UseFakeInstance":true}

'use strict';

const chai = require('chai');
const client = require('../../test_harness').client();
const InvoiceQrCodeRequest = require('../../../lib/paypalrestsdk').InvoiceQrCodeRequest;
const InvoiceCreate = require('./invoiceCreateRequestTest').InvoiceCreate;

describe('InvoiceQrCodeRequest', function () {
  it('works as expected', function () {
    return InvoiceCreate().then((r) => {
      let request = new InvoiceQrCodeRequest(r.result.id);
      request.height(5);
      request.width(6);

      return client.execute(request)
    }).then((r) => {
      chai.assert.equal(r.statusCode, 200);
      chai.assert.isNotNull(r.result);
    });
  });
});
