// This class was generated on Mon, 18 Sep 2017 19:00:07 UTC by version 0.1 of Braintree SDK Generator
// invoiceRecordRefundRequest.js
// DO NOT EDIT
// @type request
// @json {"Name":"invoice.record-refund","Description":"Marks the status of an invoice, by ID, as refunded. In the JSON request body, include a payment detail object that defines the payment method and other details.","QueryParameters":[],"HeaderParameters":[],"FormParameters":[],"PathParameters":[{"Type":"string","VariableName":"invoice_id","Description":"The ID of the invoice to mark as refunded.","ArrayType":0,"ReadOnly":false,"Required":true,"Properties":null}],"RequestType":{"Type":"Refund Detail","VariableName":"body","Description":"Invoicing refund details.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":[{"Type":"Currency","VariableName":"amount","Description":"Base object for all financial value related fields (balance, payment due, etc.)","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":[{"Type":"string","VariableName":"currency","Description":"3 letter currency code as defined by ISO 4217.","ArrayType":0,"ReadOnly":false,"Required":true,"Properties":null},{"Type":"string","VariableName":"value","Description":"amount up to N digit after the decimals separator as defined in ISO 4217 for the appropriate currency code.","ArrayType":0,"ReadOnly":false,"Required":true,"Properties":null}]},{"Type":"string","VariableName":"date","Description":"The date when the invoice was refunded. The date format is *yyyy*-*MM*-*dd* *z*, as defined in [Internet Date/Time Format](http://tools.ietf.org/html/rfc3339#section-5.6). For example, `2014-02-27 PST`.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"note","Description":"A note associated with the refund.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"transaction_id","Description":"The ID of the PayPal refund transaction. Required with the `PAYPAL` refund type.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"type","Description":"The PayPal refund type. Indicates whether the refund was paid through PayPal or externally in invoicing flow. The [record refund](/docs/api/invoicing/#invoices_record-refund) method supports the `EXTERNAL` refund type. The `PAYPAL` refund type is supported for backward compatibility.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null}]},"ResponseType":null,"ContentType":"application/json","HttpMethod":"POST","Path":"/v1/invoicing/invoices/{invoice_id}/record-refund","ExpectedStatusCode":200}

'use strict';

const querystring = require('querystring');
/**
 Marks the status of an invoice, by ID, as refunded. In the JSON request body, include a payment detail object that defines the payment method and other details.
 **/

class InvoiceRecordRefundRequest {

  constructor(invoiceId) {
    this.path = '/v1/invoicing/invoices/{invoice_id}/record-refund?';
    
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

module.exports = {InvoiceRecordRefundRequest: InvoiceRecordRefundRequest};
