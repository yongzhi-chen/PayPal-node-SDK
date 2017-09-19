// This class was generated on Mon, 18 Sep 2017 19:00:06 UTC by version 0.1 of Braintree SDK Generator
// invoiceDeleteRequest.js
// DO NOT EDIT
// @type request
// @json {"Name":"invoice.delete","Description":"Deletes a draft invoice, by ID. Deletes invoices in the draft state only. For invoices that have already been sent, you can [cancel the invoice](/docs/api/invoicing/#invoices_cancel). After you delete a draft invoice, you can no longer use it or show its details. However, you can reuse its invoice number.","QueryParameters":[],"HeaderParameters":[],"FormParameters":[],"PathParameters":[{"Type":"string","VariableName":"invoice_id","Description":"The ID of the invoice to delete.","ArrayType":0,"ReadOnly":false,"Required":true,"Properties":null}],"RequestType":null,"ResponseType":null,"ContentType":"application/json","HttpMethod":"DELETE","Path":"/v1/invoicing/invoices/{invoice_id}","ExpectedStatusCode":200}

'use strict';

const querystring = require('querystring');
/**
 Deletes a draft invoice, by ID. Deletes invoices in the draft state only. For invoices that have already been sent, you can [cancel the invoice](/docs/api/invoicing/#invoices_cancel). After you delete a draft invoice, you can no longer use it or show its details. However, you can reuse its invoice number.
 **/

class InvoiceDeleteRequest {

  constructor(invoiceId) {
    this.path = '/v1/invoicing/invoices/{invoice_id}?';
    
    this.path = this.path.replace("{invoice_id}", querystring.escape(invoiceId));

    this.verb = 'DELETE';
    this.body = null;
    this.headers = {};
    this.headers['Content-Type'] = 'application/json'
  }
}

module.exports = {InvoiceDeleteRequest: InvoiceDeleteRequest};
