// This class was generated on Tue, 05 Dec 2017 14:33:38 PST by version 0.1 of Braintree SDK Generator
// invoiceRecordPaymentRequest.js
// @version 0.1
// @type request
// @data H4sIAAAAAAAC/7xW0W/bthN+//0VB/YlMRQrbX7bML1lTYpmWBKvCYYNgZGexVPEhiJZ8hRPC/K/D5Rk2Y7drUONvBnnj+R33313ukdxgRWJTCjzYFVOY0+59fLAYVORYZGIEwq5V46VNSIT5+jvA3BJEBi5DmALQAP96QRmDZydJIABHCo5hjOT61oSIPQ3giRGpcHOPlHOwCXGUKEMddcuYBVxaSWgkWC5JN+fC6BMi/v56vICPH2uKTDMrGzGIhG/1uSbCXqsiMkHkd1ME/GeUJJ/Hn1nffU8NkEu12KP4rpxUZ3AXpk7kYjf0CucaVpX7VbJDaWuS4Kzk6hPpNsDgS1U6O8HgUQijr3HpnvnMBEfCOWl0Y3ICtSBYuBzrTxJkbGvKRETbx15VhREZmqtn6YdhgJ3lwykeylvO+U2yUfVNmhP1soU/hPBPrDKcClhXntPJm82eWBl6y1W+wkDLWxSWA+oNRTKoMkVanhAXRN40sgkoVCkZYC9GWo00YeD22pKgDgf7+8skS95YSXB9USOQBMzeVggILexJUJvfNl2zdUl/P/N6x924YjkX7m26m0Q7QoBtYs2vQCp7hQDFpF69LCkXFWoAwRy6JFjTZY5KDPk0JYrnkDnvHVeIdN68jvx/VfkKZFpa2fGP2BeklnrzvkwtwZMYX2FDCrAqGmaZnQwOj8fHYykHMHor1HyTIGbM8PkDTGcIFN6rSqCd+0N072S2WVpytbqMFbExdj6u7TkSqe+yI+Ojn58FSiPHA++G3+//62d95VO6ObsVo2GURzdan0/kseweBbmistWv4+nv1+ffrg4/uXjcIgbRy/jZWO31Piy/YF6DMcQAYAh2Fy1w2Kg3XN9IaXZownYFvgfvhftpIMJNhPUSzGXR7fKPzn+Y/JN4u8mq/js1rxWQC/K7Ut8VnWKbTtsMMrcQaHtvBsAN90yBJ6K2sjpXiptHlJ0Kh3Q6at+doTbfnPqwPuLBSbUzlnP4XmfdLBOjfaxoYgr/8Sx018QP3LWwwzz+zl6CbmtHLKaKa242Yme06eICs6aQN09MZyIt9YwmX65EOicVjlGMdNPwRqRiPfM7rwbI5mYXF5di26VEplIH16vaLWQKn1c7k1P6cbGefqno5xJXrUb5lsrSWRvDg+f/vc3AAAA//8=
// DO NOT EDIT
'use strict';

const querystring = require('querystring');
/**
 Marks the status of an invoice, by ID, as paid. Include a payment detail object that defines the payment method and other details in the JSON request body.
 **/

class InvoiceRecordPaymentRequest {

  constructor(invoiceId) {
    this.path = '/v1/invoicing/invoices/{invoice_id}/record-payment?';
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

module.exports = {InvoiceRecordPaymentRequest: InvoiceRecordPaymentRequest};
