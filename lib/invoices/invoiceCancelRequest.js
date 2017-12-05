// This class was generated on Tue, 05 Dec 2017 14:33:36 PST by version 0.1 of Braintree SDK Generator
// invoiceCancelRequest.js
// @version 0.1
// @type request
// @data H4sIAAAAAAAC/7xVQU8bPRC9f79i5LOV5GulHvaGQitSCZI2qJcWRY49YU29nsWeha5Q/nvl9QZIFoRQaS9R8jyZefPmeXwnzlSFohDW35DVONLKa3RCimOMOtiaLXlRiGkHR1AQ0TP00RLWLcyOJShvJFAXrJxrZYoyKdoT243VKp2AWlPDwCVCruIyzNRhtWoxSKgw6FJ57pLCVBeAlbIujoQUXxoM7UIFVSFjiKL4fiHFCSqD4RD9RKE6xBaKyz3sTpy3deo+crD+UkjxTQWr1g73VVlZM1DkvESYHQNtOvJ9YOol95boHoWg2lxhIsVXVGbuXSuKjXIRE3Dd2IBGFBwalGIRqMbAFqMofOPc9iLHYOSc5J5uLrF6LO6Q+5pM+/wcfZYVKMDydLk3p1dR74HH3F+WVetVHuqA35EHlUonXcljoldRQJhO730Asw201ABVNpnJRqh3M4VNoKqbx+fl/AxCFg+SEvLQjDZmKzOBcu6hAChjAsaIEbhUDCokawY+mPQI5lxiuLURJcQatd20h2yYwNnMEofJCW5Lq8tneI1+NJPJe712pH9eN8TY/c6fOnIgf5mRM2IsMjx+jMORMTZfyEHt1JMnhtjUNQVG01cbH5bbd8KH1zqhc7F80Q6eGIdOSAxxbzn8qTEP6KyJHKonbk5aXium1W4VDbjNvEnjwgi3JSYbJJrpXx3XvXH2/Hep/nULnW5vwP9v6P+cHWKzvkLNT27c/mx3Gd9ybeWVu01RsSYfMedJsBRT8oy+38NC1bXrq46vYrd8T5jrU+SSjCjEYr48F/m9EYUY3/w/zlvD+sv+G8bx3cPjsh3fP7sff9WoGc2SFTdxSgZF8W4y2f73GwAA//8=
// DO NOT EDIT
'use strict';

const querystring = require('querystring');
/**
 Cancels a sent invoice, by ID, and, optionally, sends a notification about the cancellation to the payer, merchant, and Cc: emails.
 **/

class InvoiceCancelRequest {

  constructor(invoiceId) {
    this.path = '/v1/invoicing/invoices/{invoice_id}/cancel?';
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

module.exports = {InvoiceCancelRequest: InvoiceCancelRequest};
