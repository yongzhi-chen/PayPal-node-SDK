// This class was generated on Tue, 05 Dec 2017 14:33:38 PST by version 0.1 of Braintree SDK Generator
// invoiceNextInvoiceNumberRequest.js
// @version 0.1
// @type request
// @data H4sIAAAAAAAC/6RRy27UQBC88xWjPnsfcJwbCo9cIAtZcUFR1LEr8SC7Z+hpr7KK9t/RMGYPXnGBk92lrqmuqhf6zCPIU5BDDC3Wgme7n4d7mcYHKDX0DrnVkCxEIU8fIVA2ZGc9XGG4meEqw1nP5kJ2fOAw8MMAZ/H38ghtexZbU0NfJuhxx8ojDJrJf79r6BrcQZfoh6jjEtux9UvsK35OyLY/JpCXaRgKlFOUjIq9UP3ShcVvrKFcOudxYZoaeqvKx8rfloe5u5HhSP6Rh4wqHhTdGdhpTFALKNedlbNpkKdLxb+Evf/niN2+D/nPetmcLK6CtIoRYujco8axUmI2p2ghS5n1f9ouHZzuTg1dRTHI3AxxSkNouVjc/MhRqKFrs/QJ1seOPO1ubvdUKyZPm8PrTT0ryNP8h7wpqazmaXVO7/1zQmvobo1tylexA/k32+3p1S8AAAD//w==
// DO NOT EDIT
'use strict';

const querystring = require('querystring');
/**
 Generates the next invoice number that is available to the merchant.
 **/

class InvoiceNextInvoiceNumberRequest {

  constructor() {
    this.path = '/v1/invoicing/invoices/next-invoice-number?';
    this.verb = 'POST';
    this.body = null;
    this.headers = {
        'Content-Type': 'application/json'
        };
  }
}

module.exports = {InvoiceNextInvoiceNumberRequest: InvoiceNextInvoiceNumberRequest};
