// This class was generated on Mon, 18 Sep 2017 18:42:43 UTC by version 0.1 of Braintree SDK Generator
// invoiceRemindRequestTest.js
// DO NOT EDIT
// @type request
// @json {"Name":"invoice.remind","Description":"Sends a reminder to the payer about an invoice, by ID. In the JSON request body, include a `notification` object that defines the subject of the reminder and other details.","QueryParameters":[],"HeaderParameters":[],"FormParameters":[],"PathParameters":[{"Type":"string","VariableName":"invoice_id","Description":"The ID of the invoice for which to send a reminder.","ArrayType":0,"ReadOnly":false,"Required":true,"Properties":null}],"RequestType":{"Type":"Notification","VariableName":"body","Description":"The email or SMS notification.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":[{"Type":"string","VariableName":"cc_emails","Description":"An array of one or more CC: emails. If you omit this parameter from the JSON request body, a notification is sent to all CC: email addresses that are part of the invoice. Otherwise, specify this parameter to limit the email addresses to which notifications are sent.\u003cblockquote\u003e\u003cstrong\u003eNote:\u003c/strong\u003e Additional email addresses are not supported.\u003c/blockquote\u003e","ArrayType":6,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"note","Description":"A note to the payer.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"boolean","VariableName":"send_to_merchant","Description":"Indicates whether to send a copy of the email to the merchant.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"subject","Description":"The subject of the notification.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null}]},"ResponseType":null,"ContentType":"","HttpMethod":"POST","Path":"/v1/invoicing/invoices/{invoice_id}/remind","ExpectedStatusCode":200,"FileSuffix":"Test","UseFakeInstance":true}

'use strict';

const chai = require('chai');
const client = require('../../test_harness').client();
const InvoiceRemindRequest = require('../../../lib/paypalrestsdk').InvoiceRemindRequest;
const InvoiceCreate = require('./invoiceCreateRequestTest').InvoiceCreate;
const InvoiceSend = require('./invoiceSendRequestTest').InvoiceSend;

function buildRequestBody() {
  return {
    'subject': 'Past Due',
    'note': 'please pay soon',
    'send_to_merchant': true
  };
}

describe('InvoiceRemindRequest', function () {
  it('works as expected', function () {
    let invoiceId = ''
    return InvoiceCreate().then((createResp) => {
      invoiceId = createResp.result.id;
      return InvoiceSend(invoiceId);
    }).then((sendResp) => {
      let request = new InvoiceRemindRequest(invoiceId);
      request.requestBody(buildRequestBody());

      return client.execute(request);
    }).then((remindResp) => {
      chai.assert.equal(remindResp.statusCode, 202);
    });
  });
});
