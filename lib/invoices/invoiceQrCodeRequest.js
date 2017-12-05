// This class was generated on Tue, 05 Dec 2017 14:33:38 PST by version 0.1 of Braintree SDK Generator
// invoiceQrCodeRequest.js
// @version 0.1
// @type request
// @data H4sIAAAAAAAC/8yW32/bNhDH3/dXHLiXFlAld1v34KetSX8E2Do3STsMWRCfpZPFgiIZ8mRXCPK/D0fJjp24aIsOw97EI3m8z/eOR92oN9iSmiptV06XlF+Hq9JVpDJ1TLEM2rN2Vk3VK7IUkCkCwttTkDVQuwBoYdyawaKHk+P8724y+bFchCJ90L3heUPb/Vqczd68At3ikkBbuHiOkX7+6QlZWVBdPmqYfZwWxXq9zhdpbpjKXVgWjyWCFhm4QYbShUDRO1tFYAfc0CYyiQr+ch2UaGE5gnySA9BWgFUFmsUPgkdPAVyA2fHLzaIc/mzIAkLZRXYtBegiRTlUB2jdQhuCilbijh1EOZjvyDNoSBzGJokQqNKBSqZqE/gM+xmajSOPfUuWoTZuDeuGAu3sF9cee3DWaEuw1txstgsWlOKdocRQfSY1z6l2gaB3HSyJ7/TJkqntIk+HHc7s7jd6d+SHwcVRoCTyVtbLR9+PX/GqTJOPczjzVOq6h/l1GCd/8dh7NHnp2jlgUhQCldprUYBa1EaSEyhGKRiZni+0Mdour7St3Rzc4gOVnMO7SLv52d/qrOlB14lsjTZlelixUzejXoXfBSz2eQ/Tn5HU0EH2SLZ6LMe1bkV7VVoH1wJCFbBO8XjscWEIIiNTDidDtPFbJMv2DtQRrBtXUPUltMUm9SpTbzsK/QwDtsQUoppe3Kjz3ksziRy0XapMvceghWFsMlimbnK/t0hP4N4TuBrenf6W7uO60WUjKjy8rzkcU42dYQGYe+zn6crqgTxlNnbeuyAXaoWmo1xl6tcQsB/im2TqlLD6w5peTWs0kcRw3elA1dYwC85TYE1RTW1nzG22xdOWaUnhIV9DetnwQb5hKpOa9fojmZgJLe92Q2mCObxHo8ewBSkVxdNnE5Hi2WSyxy7j/4hsrStuDoKlmf8n12WmXhNWFPaq9DJTL11o79tmyM3XVfN4ja50dVCYk+ONEtsL/pm6/hpmDt0nkGUNRR6ciFFM8i5GGmxbsLu3/h7ZA57h6YXxWR7fa6GTW5tGhU8SfUvOvkBxOelBcP9Kqdxm6shZJjsKp9B7o0uUM4oPMXWt18z+d+LGVfJD9OJcDVWjpqpYPS2GLGu7LDa9vri5K5Hb4jo8GdV+8dGn1/6Mkbt4JMbpD5PJ7Xf/AAAA//8=
// DO NOT EDIT
'use strict';

const querystring = require('querystring');
/**
 Generates a QR code for an invoice, by ID.<br/><br/>The QR code is a PNG image in [Base64-encoded](https://www.base64encode.org/) format that corresponds to the invoice ID. You can generate a QR code for an invoice and add it to a paper or PDF invoice. When a customer uses their mobile device to scan the QR code, he or she is redirected to the PayPal mobile payment flow where he or she can pay online with PayPal or a credit card.<br/><br/>Before you get a QR code, you must:<ol><li><p>[Create an invoice](#invoices_create). Specify `qrinvoice@paypal.com` as the recipient email address in the `billing_info` object. Use a customer email address only if you want to email the invoice.</p></li><li><p>[Send an invoice](#invoices_send) to move the invoice from a draft to payable state. If you specify `qrinvoice@paypal.com` as the recipient email address, the invoice is not emailed.</p></li></ol>
 **/

class InvoiceQrCodeRequest {

  constructor(invoiceId) {
    this.path = '/v1/invoicing/invoices/{invoice_id}/qr-code?';
    this.path = this.path.replace("{invoice_id}", querystring.escape(invoiceId));
    this.verb = 'GET';
    this.body = null;
    this.headers = {
        'Content-Type': 'application/json'
        };
  }

  action(action) {
    let params = querystring.escape(action);
    this.path += 'action=' + params + '&';
    return this;
  }

  height(height) {
    let params = querystring.escape(height);
    this.path += 'height=' + params + '&';
    return this;
  }

  width(width) {
    let params = querystring.escape(width);
    this.path += 'width=' + params + '&';
    return this;
  }
}

module.exports = {InvoiceQrCodeRequest: InvoiceQrCodeRequest};
