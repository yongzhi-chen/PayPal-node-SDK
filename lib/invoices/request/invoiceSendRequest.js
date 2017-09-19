// This class was generated on Mon, 18 Sep 2017 19:00:07 UTC by version 0.1 of Braintree SDK Generator
// invoiceSendRequest.js
// DO NOT EDIT
// @type request
// @json {"Name":"invoice.send","Description":"Sends an invoice, by ID, to a customer.\u003cblockquote\u003e\u003cstrong\u003eNote:\u003c/strong\u003e After you send an invoice, you cannot resend it.\u003c/blockquote\u003e\u003cbr/\u003eOptionally, set the `notify_merchant` query parameter to also send the merchant an invoice update notification. Default is `true`.","QueryParameters":[{"Type":"boolean","VariableName":"notify_merchant","Description":"Indicates whether to send the invoice update notification to the merchant. Default is `true`.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null}],"HeaderParameters":[],"FormParameters":[],"PathParameters":[{"Type":"string","VariableName":"invoice_id","Description":"The ID of the invoice to send.","ArrayType":0,"ReadOnly":false,"Required":true,"Properties":null}],"RequestType":null,"ResponseType":null,"ContentType":"application/json","HttpMethod":"POST","Path":"/v1/invoicing/invoices/{invoice_id}/send","ExpectedStatusCode":200}

'use strict';

const querystring = require('querystring');
/**
 Sends an invoice, by ID, to a customer.<blockquote><strong>Note:</strong> After you send an invoice, you cannot resend it.</blockquote><br/>Optionally, set the `notify_merchant` query parameter to also send the merchant an invoice update notification. Default is `true`.
 **/

class InvoiceSendRequest {

  constructor(invoiceId) {
    this.path = '/v1/invoicing/invoices/{invoice_id}/send?';
    
    this.path = this.path.replace("{invoice_id}", querystring.escape(invoiceId));

    this.verb = 'POST';
    this.body = null;
    this.headers = {};
    this.headers['Content-Type'] = 'application/json'
  }

  notifyMerchant(notifyMerchant) {
    let params = querystring.escape(notifyMerchant);
    this.path += 'notify_merchant=' + params + '&';
    return this;
  }
}

module.exports = {InvoiceSendRequest: InvoiceSendRequest};
