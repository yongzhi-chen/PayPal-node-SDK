// This class was generated on Tue, 05 Dec 2017 14:33:38 PST by version 0.1 of Braintree SDK Generator
// invoiceRecordRefundRequest.js
// @version 0.1
// @type request
// @data H4sIAAAAAAAC/7xWTW/cNhC991cMmIu90K78kTaobm7sIFvU9jZeFC0Mw54VRxZjimTIkR3V8H8vKGm/XcRAjFxHw9F7b96Q8yjOsCKRCWXurcpp5Cm3Xg49FbWRIhHHFHKvHCtrRCZO0d8F4JIgMHIdwBaABvrDCcwaGB8ngAG6AiRHMDbtgd8vzs/A05eaAsPMyiYBZXJdSwIEh01FhkESo9JgZ58pZ+ASY6hQhrqfztMq4tJKQCPBckm+PxdGIhF/1uSbCXqsiMkHkV1eJeIjoSS/Gf1gfbUZmyCXa7FHMW1cVCiwV+ZWJOIv9ApnmtaVu1bbck1LgvFxFCmi7xOBLVTo79ZUEok48h6b7l97ifhEKM+NbkRWoA4UA19q5UmKjH1NiZh468izoiAyU2v9dNXlUOCuyAJ495PrTqNt/LEXW8jHLVZlbnuIqwq/GGgfWEW6lDOvvSeTN9uAsLK14S1Iv2GguTMK6wG1hkIZNLlCDfeoawJPGpkkFIq0DLAzQ40mGnNhsJoSIM5Hu69G5P98sUJwncghaGImD/MMyG2cgtB7XbZjdHEObw/2372GM5JvYm3V2wLaNQJqFy17BlLdKgYsIvToZ0m5qlAHCOTQI8eeLDkos+DQtiueQOe8dV4h0zr5V/H/C3hKZHp2SuMHeCjJrE3qw9pFtsgrrK+QQQUYNE3TDIaD09PBcCDlAAb/DpINFS7HhskbYjhGpnSqKoIPbYWrnZLZZWnK1uowUsTFyPrbtORKp77IDw8Pf30TKI84hz+PftkdxYNAX7FymhK4OdjbfzvcOxgevIPJxfTme4fzhWYx9hkRjyCGAUOwuWpn8EFx2arZKfiDwLFHE7CV7Ns38gSbCer5FbdydARzLEsaN5OjfyZHf9ws0htHP4pU/PwclQ0CERGMjVQ5MoXo5/Z1XDahdbRDJYFLb+vbcl6htVW0KWrdRNeqxQNQaPvQmf+yWw76Wlc7qbR5SNGpdJGdvulnJ1yvbRK78zc71M5Zz917fnPy9/Tk09mmqO3PnpM7jlxfIF7y1sMM87sH9BJyWzlkNVNacfMqbbl6ilnBWROoqxPDiXhvDZPpH1mBzukot7Im/RysEYn4yOxOW7YiE5Pzi6no1gqRifR+f0WruVTp43KHeEo3N7CTr45yJnnRblzvrSSRHeztPf30HwAAAP//
// DO NOT EDIT
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
    this.headers = {
        'Content-Type': 'application/json'
        };
  }

  requestBody(body) {
    this.body = body;
    return this;
  }
}

module.exports = {InvoiceRecordRefundRequest: InvoiceRecordRefundRequest};
