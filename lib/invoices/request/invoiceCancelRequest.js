// This class was generated on Mon, 18 Sep 2017 19:00:06 UTC by version 0.1 of Braintree SDK Generator
// invoiceCancelRequest.js
// DO NOT EDIT
// @type request
// @json {"Name":"invoice.cancel","Description":"Cancels a sent invoice, by ID, and, optionally, sends a notification about the cancellation to the payer, merchant, and Cc: emails.","QueryParameters":[],"HeaderParameters":[],"FormParameters":[],"PathParameters":[{"Type":"string","VariableName":"invoice_id","Description":"The ID of the invoice to cancel.","ArrayType":0,"ReadOnly":false,"Required":true,"Properties":null}],"RequestType":{"Type":"Cancel Notification","VariableName":"body","Description":"Cancels an email or SMS notification.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":[{"Type":"string","VariableName":"cc_emails","Description":"An array of one or more CC: emails. If you omit this parameter from the JSON request body, a notification is sent to all CC: email addresses that are part of the invoice. Otherwise, specify this parameter to limit the email addresses to which a notification is sent.\u003cblockquote\u003e\u003cstrong\u003eNote:\u003c/strong\u003e Additional email addresses are not supported.\u003c/blockquote\u003e","ArrayType":6,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"note","Description":"A note to the payer.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"boolean","VariableName":"send_to_merchant","Description":"Indicates whether to send the notification to the merchant.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"boolean","VariableName":"send_to_payer","Description":"Indicates whether to send the notification to the payer.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"subject","Description":"The subject of the notification.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null}]},"ResponseType":null,"ContentType":"application/json","HttpMethod":"POST","Path":"/v1/invoicing/invoices/{invoice_id}/cancel","ExpectedStatusCode":200}

'use strict';

const querystring = require('querystring');
/**
 Cancels a sent invoice, by ID, and, optionally, sends a notification about the cancellation to the payer, merchant, and Cc: emails.
 **/

class InvoiceCancelRequest {

  constructor(invoiceId) {
    this.path = '/v1/invoicing/invoices/{invoice_id}/cancel?';
    
    this.path = this.path.replace("{invoice_id}", querystring.escape(invoiceId));

    this.verb = 'POST';
    this.body = null;
    this.headers = {};
    this.headers['Content-Type'] = 'application/json'
  }

  requestBody(body) {
    this.body = body;
    return this;
  }
}

module.exports = {InvoiceCancelRequest: InvoiceCancelRequest};
