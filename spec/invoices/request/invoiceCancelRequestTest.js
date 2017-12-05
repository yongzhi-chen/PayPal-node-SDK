// This class was generated on Mon, 18 Sep 2017 18:42:43 UTC by version 0.1 of Braintree SDK Generator
// invoiceCancelRequestTest.js
// DO NOT EDIT
// @type request
// @json {"Name":"invoice.cancel","Description":"Cancels a sent invoice, by ID, and, optionally, sends a notification about the cancellation to the payer, merchant, and Cc: emails.","QueryParameters":[],"HeaderParameters":[],"FormParameters":[],"PathParameters":[{"Type":"string","VariableName":"invoice_id","Description":"The ID of the invoice to cancel.","ArrayType":0,"ReadOnly":false,"Required":true,"Properties":null}],"RequestType":{"Type":"Cancel Notification","VariableName":"body","Description":"Cancels an email or SMS notification.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":[{"Type":"string","VariableName":"cc_emails","Description":"An array of one or more CC: emails. If you omit this parameter from the JSON request body, a notification is sent to all CC: email addresses that are part of the invoice. Otherwise, specify this parameter to limit the email addresses to which a notification is sent.\u003cblockquote\u003e\u003cstrong\u003eNote:\u003c/strong\u003e Additional email addresses are not supported.\u003c/blockquote\u003e","ArrayType":6,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"note","Description":"A note to the payer.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"boolean","VariableName":"send_to_merchant","Description":"Indicates whether to send the notification to the merchant.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"boolean","VariableName":"send_to_payer","Description":"Indicates whether to send the notification to the payer.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"subject","Description":"The subject of the notification.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null}]},"ResponseType":null,"ContentType":"","HttpMethod":"POST","Path":"/v1/invoicing/invoices/{invoice_id}/cancel","ExpectedStatusCode":200,"FileSuffix":"Test","UseFakeInstance":true}

'use strict';

const chai = require('chai');
const client = require('../../test_harness').client();
const InvoiceCancelRequest = require('../../../lib/paypalrestsdk').InvoiceCancelRequest;
const InvoiceCreate = require('./invoiceCreateRequestTest').InvoiceCreate;
const InvoiceSend = require('./invoiceSendRequestTest').InvoiceSend;

function buildRequestBody() {
  return {
    "subject": "Past Due",
    "note": "Nevermind!",
    "send_to_merchant": true,
    "send_to_payer": true,
  };
}

describe('InvoiceCancelRequest', function () {
  it('works as expected', function () {
    let invoiceId = '';
    return InvoiceCreate().then((createResp) => {
      invoiceId = createResp.result.id;
      return InvoiceSend(invoiceId)
    }).then((sendResp) => {
      let request = new InvoiceCancelRequest(invoiceId);
      request.requestBody(buildRequestBody());

      return client.execute(request);
    }).then((cancelResp) => {
      chai.assert.equal(cancelResp.statusCode, 204);
    });
  });
});
