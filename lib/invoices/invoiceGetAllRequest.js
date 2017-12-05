// This class was generated on Tue, 05 Dec 2017 14:33:37 PST by version 0.1 of Braintree SDK Generator
// invoiceGetAllRequest.js
// @version 0.1
// @type request
// @data H4sIAAAAAAAC/6xUwU4bSxC8v69o9RHts3nvkMPeLCAhUhJIsHJByG7vtr1NxjPDTK/BIP49ml1jzK4jRcI3q7wzXVVT1U/4jZaMOYpdOSl4sGCdkDGY4SnHIohXcRZz/CJRIyw5FBVZhc3ncQBjB3MxygG04i0OWpECec8UQGzzX+DonY2cwdrVUJCF6LmQ+RqcZXABli4wuGYiGbirOazBU6AlK4c4wAy/J+xyC2F+/YTjtW8FKC84YIY/KQjNDG+UeVpwT84Ijh45uH8DG1JZ8RGILfkB3LyhaiRq+t3XixmOQqB1O/U4wx9M5YU1a8znZCIn4K6WwOUWuAzOc1DhiLmtjXnO/o70JMpjn/m4YrD1csYhEXz127WkZ7wQa8Uu4F60asS0LguXME3XTg+sYeacYbJ9DeqUzKRwtdVJeLmwK+ezLaUg5Qj3FWu1iVFzFJqjmxDFbooGcMpzqo2CRJg2NA+j7CbDc6aSw5uc3WT40YVlF7skrbpYGsFRWw7pygS1pFts5/nb1+t7t7d/+xMJJ2RBbGHqknfM2yZj46It4Xw0PrsYXYER+yvC3AWwtJIFpRHvte66K6qvaUdtp4wWKI1+E2iKEJlCUaUXr412CH54Z2qTB5PylcbEzW650D7rxqy9LezbObX8oNPG66kPvBJXx+mOyTsZTsGNfGhVf9wnO13cq6XNzL69kvb4krTY7JL2SYogykHoMIV7zvDEWWW76QyS9yZtBXF2eBtd2i3nqv4ra+VKzPHT2Rjb7mGOw9V/w5au2MXwhfgQMzx78Fwol1dKWscTVzLm/x8fP//zGwAA//8=
// DO NOT EDIT
'use strict';

const querystring = require('querystring');
/**
 Lists merchant invoices. To filter the invoices that appear in the response, you can specify one or more optional query parameters.
 **/

class InvoiceGetAllRequest {

  constructor() {
    this.path = '/v1/invoicing/invoices/?';
    this.verb = 'GET';
    this.body = null;
    this.headers = {
        'Content-Type': 'application/json'
        };
  }

  page(page) {
    let params = querystring.escape(page);
    this.path += 'page=' + params + '&';
    return this;
  }

  pageSize(pageSize) {
    let params = querystring.escape(pageSize);
    this.path += 'page_size=' + params + '&';
    return this;
  }

  totalCountRequired(totalCountRequired) {
    let params = querystring.escape(totalCountRequired);
    this.path += 'total_count_required=' + params + '&';
    return this;
  }
}

module.exports = {InvoiceGetAllRequest: InvoiceGetAllRequest};
