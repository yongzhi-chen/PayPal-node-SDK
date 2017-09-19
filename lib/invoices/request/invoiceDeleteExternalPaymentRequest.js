// This class was generated on Mon, 18 Sep 2017 19:00:07 UTC by version 0.1 of Braintree SDK Generator
// invoiceDeleteExternalPaymentRequest.js
// DO NOT EDIT
// @type request
// @json {"Name":"invoice.delete_external_payment","Description":"Deletes an external payment, by invoice ID and transaction ID.","QueryParameters":[],"HeaderParameters":[],"FormParameters":[],"PathParameters":[{"Type":"string","VariableName":"invoice_id","Description":"The ID of the invoice from which to delete a payment transaction.","ArrayType":0,"ReadOnly":false,"Required":true,"Properties":null},{"Type":"string","VariableName":"transaction_id","Description":"The ID of the payment transaction to delete.","ArrayType":0,"ReadOnly":false,"Required":true,"Properties":null}],"RequestType":null,"ResponseType":null,"ContentType":"application/json","HttpMethod":"DELETE","Path":"/v1/invoicing/invoices/{invoice_id}/payment-records/{transaction_id}","ExpectedStatusCode":200}

'use strict';

const querystring = require('querystring');
/**
 Deletes an external payment, by invoice ID and transaction ID.
 **/

class InvoiceDeleteExternalPaymentRequest {

  constructor(invoiceId, transactionId) {
    this.path = '/v1/invoicing/invoices/{invoice_id}/payment-records/{transaction_id}?';
    
    this.path = this.path.replace("{invoice_id}", querystring.escape(invoiceId));
    
    this.path = this.path.replace("{transaction_id}", querystring.escape(transactionId));

    this.verb = 'DELETE';
    this.body = null;
    this.headers = {};
    this.headers['Content-Type'] = 'application/json'
  }
}

module.exports = {InvoiceDeleteExternalPaymentRequest: InvoiceDeleteExternalPaymentRequest};
