// This class was generated on Tue, 05 Dec 2017 14:33:37 PST by version 0.1 of Braintree SDK Generator
// invoiceDeleteExternalPaymentRequest.js
// @version 0.1
// @type request
// @data H4sIAAAAAAAC/6ySTW/UMBCG7/wKa86mWTj6hpqgVuJjgRUXVK2m8Wxj5NhmPCmNovx35CaluwWpl96iR28m7zOTCT5hT2DAhdvoWjqz5EloT3dCHNDvE449BQENNeWWXRIXAxio73NZYVAPWbVmtboe1TpPXdYKg1XCGDK25WV1WZ+Bhi8D8bhFxp6EOIP5caXhgtASP6XvI/dP2RalO2ET7MZUTLKwCzeg4Tuyw2tPp4Z7Z/+R2XX3ReNBSUd/qx849up359pOSVTLYhQ+WB4rFZ93zDguFTYavhLaz8GPYA7oMxXwa3BMFozwQBq2HBOxOMpgwuD9rJ8VOPrg8xL/aflo8RJ9r5YMZVmGFFhQTjFkOmbnMQiFNQaYknctlkLVzxwDaLgQSR9JumjLj9V8aHYNLBcGA9Xtm2q5iAs36xPlano851ytsq+Z2sg2V9PpqmbQ0NwlaoXsN0EZ8nm0BObtZjO/+gMAAP//
// DO NOT EDIT
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
    this.headers = {
        'Content-Type': 'application/json'
        };
  }
}

module.exports = {InvoiceDeleteExternalPaymentRequest: InvoiceDeleteExternalPaymentRequest};
