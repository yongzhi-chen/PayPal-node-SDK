// This class was generated on Tue, 05 Dec 2017 14:33:37 PST by version 0.1 of Braintree SDK Generator
// invoiceDeleteExternalRefundRequest.js
// @version 0.1
// @type request
// @data H4sIAAAAAAAC/6ySTW/UMBCG7/wKa86mWTj6hrqLWomPBVZcULWaxpPGyLHNeFIaRfnvyOuF7raHXrhFj95M3mcmM3zCgcCAC/fRtXRhyZPQnh6EOKDfM3VjsKBhTblll8TFAAbWh1hWGNTfqKpRrW4ndZymrtcKg1XCGDK25V11vb4ADV9G4mmLjAMJcQbz40bDFaElfkrfRx6esi1Kf8Zm2E2peGRhF+5Aw3dkh7eezv327rnLrj8UjZ2Snv5V7zgO6nfv2l5JVHUth0DVPHUqQu+YcaodVhq+EtrPwU9gOvSZCvg1OiYLRngkDVuOiVgcZTBh9H7RLxqcfPBli+clHy3+R92bmqEsdUiBBeUUQ6ZTdhmDUDjGAFPyrsVSqPmZYwANVyLpI0kfbfmvNh82uw3UC4OB5v5NUy/iwt3xiXIzP55zaarra6Y2ss3NfL6oBTRsHhK1QvaboIz5MloC83a1Wl79AQAA//8=
// DO NOT EDIT
'use strict';

const querystring = require('querystring');
/**
 Deletes an external refund, by invoice ID and transaction ID.
 **/

class InvoiceDeleteExternalRefundRequest {

  constructor(invoiceId, transactionId) {
    this.path = '/v1/invoicing/invoices/{invoice_id}/refund-records/{transaction_id}?';
    this.path = this.path.replace("{invoice_id}", querystring.escape(invoiceId));
    this.path = this.path.replace("{transaction_id}", querystring.escape(transactionId));
    this.verb = 'DELETE';
    this.body = null;
    this.headers = {
        'Content-Type': 'application/json'
        };
  }
}

module.exports = {InvoiceDeleteExternalRefundRequest: InvoiceDeleteExternalRefundRequest};
