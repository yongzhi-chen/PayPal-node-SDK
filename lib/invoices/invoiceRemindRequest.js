// This class was generated on Tue, 05 Dec 2017 14:33:39 PST by version 0.1 of Braintree SDK Generator
// invoiceRemindRequest.js
// @version 0.1
// @type request
// @data H4sIAAAAAAAC/6xVTW/bSAy9768g5izY3l1gD7oFzhZxgcRuHfTSBg6toaJJR0NlhkoqBP7vxWjkxB8JgqC5GBZF8D0+PlKP6gJrUrky7p5NQSNPtXFaZeqUQuFNI4adytWSnA6AkF6TB2GQiqDBjjzgmlsBdDBUyWDdwex0BDPXZ31ezi/A011LQWDNusvAuMK2mgDh2rGY0hQYoa6B17dUCEiFAppK4yj0NUKbXnDZPz4RQaeBpSIPmgSNDSOVqS8t+W6BHmsS8kHl368ydUaoyR9GP7GvD2MLlGov9qguuybKFMQbd6My9Q29wbWlfflW5li6y4pgdrrlPSRCyR4eKlNUUclATu+IGzs48R67BDrJ1FdCPXe2U3mJNlAM3LXGk1a5+JYytfDckBdDQeWutXZzlXIoSCry1MGu2sd9xOG82AHVaCywh+X5EnZrvIvsENhl+7a2RbHq0cMRsRMHGKGjuOwo0qvZE0yneSIcRjAroeMWuDbRVCZAsx0slJ7r1/yJe02CCXFIEoeF1j4DAGrtKYTepCiAPu6El4Nxj2AeLfpgAmUQGipM2R2yEQZrEks6Ls6DW3ZZhR4u8hr9aCeTf4u15eLnXctC/XP6LYJ4djcpcsFCeQqPd+NworWJNdEeYUcQxwKhbRr2QnpAGx/C7Tvhv/c6ofdt9qYdHAsdOyEypL2r9KfGPKCzZraEL6xMXN6V8KomX1To5IjbzOk4MArwUFF/qZ5XvuCm23ol6T60sK32wV28JupwXV9c/YPL+5HLn07VJmaFhl2gVCeGMzVlJ+SG+6WwaeyAOr4N/e06E2nOSSrWKleL+fJSpdOtcjW+/3ucds+4m+EfhfHj853ejJ8+df//aqgQ0ktBacOUNan8n8lk89dvAAAA//8=
// DO NOT EDIT
'use strict';

const querystring = require('querystring');
/**
 Sends a reminder to the payer about an invoice, by ID. In the JSON request body, include a `notification` object that defines the subject of the reminder and other details.
 **/

class InvoiceRemindRequest {

  constructor(invoiceId) {
    this.path = '/v1/invoicing/invoices/{invoice_id}/remind?';
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

module.exports = {InvoiceRemindRequest: InvoiceRemindRequest};
