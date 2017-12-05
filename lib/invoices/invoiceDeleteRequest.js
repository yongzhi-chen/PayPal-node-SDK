// This class was generated on Tue, 05 Dec 2017 14:33:36 PST by version 0.1 of Braintree SDK Generator
// invoiceDeleteRequest.js
// @version 0.1
// @type request
// @data H4sIAAAAAAAC/2SST2/aQBDF7/0Uo+mllSyb9uhbFIiI1D+0Rb1EKBq8A95q2XFnx6QW4rtXxiaQ5Gb9/Obtvnl7wG+0YyzRx734inPHgY0xwymnSn1jXiKWOD3hBAROaWMwyjNYd3A/zeH8f+T9B1jNozoZGYPE0OVwJ3pRWU0GNe0ZKCiT62DNHCFxtAw6aaGiCA8VxYrDyW+cXH0onFSpoMYXA/JxW7w/+z4OEx9zuNkY68lpCPY2wPmUKBAkblmhTQzeQBRSLU/gLYFjIx9SDnN54j3rZUx5kD9Hh9ju1qw5ZvijZe0WpLRjY01YPqwynDM51tf0TnT3mi3I6hfsgMuu6ctKpj5uMcPfpJ7WgV+W+OjdmwKXNcP9FGRzvUYwGffSX/dGlbrhhEmGP5nc9xg6LDcUEvfgb+uVHZamLWe4UGlYzXPCMrYhHFeDhpMNJj3sUWokJr5mtxKN4yhDaprgK+ovWvxJEjHDuVnzla0W17+92ZfZcobDQrDEYv/pqvRz58Xhkv6IGc7+NVwZu19G1qZbcYzl58nk+O4/AAAA//8=
// DO NOT EDIT
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
    this.headers = {
        'Content-Type': 'application/json'
        };
  }
}

module.exports = {InvoiceDeleteRequest: InvoiceDeleteRequest};
