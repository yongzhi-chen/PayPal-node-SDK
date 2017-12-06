// This class was generated on Wed, 06 Dec 2017 14:10:39 PST by version 0.1 of Braintree SDK Generator
// planListRequest.js
// @version 0.1
// @type request
// @data H4sIAAAAAAAC/7xWTW8bNxC991cM2EsLrD7cQw+6CYldF3BrtxFyCYzsaDmrZcIlGXJW9ibwfy+Gu5IdyQ0M2PDFgIfU8L03M2/2m/obW1ILFSy6qTWJVaHeUqqiCWy8Uwt1YRInWBtrjduA3EtTWHmojWWKwA0NQeAGGTAEwgjG5YNIKXiXqIAUqDJ1D94R+AitjwQ+P4EWvnQUe0CnIeDGOJQwBIzYElNMU1Wof+TK1T6kFh++qVUfBHriaNxGFeo9RoNrSztKuKEjNquG4CtFPzFO0y1pcF27pgi+zoBrExMLChrorGljMjWCRCy35GzHNQpD7qIjfch4Cm+pxs4ymATlvBQOyxixH0DPC/Uvob50tleLGm0iCXzpTCS9D1xFHyiyoaQWrrP2rngS54/JfH2c+D3XsWIepOTgHSAk4zaWMr8pnPkIdIttsFSAqaHcJy4zoZN5WQBh1QxapcbfJGByu/5Ywhat0fK3I/kFgvNu4miDbLZU5P+kDmAc04bi93qdvJpgiZG7dKTWWW7u9KC7D+oL6x4wH8GQ4pXwsme0H+Mu0yHuP502FTIluGmIm3E+96CNq2ynaeBVDrkMU5vKPH1jJLd4CbUhq9MU3u9qWPYS9hFK51+mPteFOifUFL+b7OtCnfnYHsaukJvDmDxBiQcMklJCA9khthf0Skp1MRjcgaZHKi7Hsah37fzGO0YxAk2MxiaoZT5y+0ta0Q53BvHhfLk6vVy+A2vc53T9y0z7Ks0wmJnfUtwaupn93CCTxzTJV359rpT3Vnhh3Gd4wAUu15+oeoRyfviYtwMUHEIjDspOIllk0s+n9fszJ0IK+IjhSYF+SGQo4cti+fF05ol61IDz+ZENj9YiPfeqLpLn/Gk489I7WnFy9eFmGHtmdH0tc9oaRwkafwMtun4kPH4keHe/QsZkx5b0f+lTXr9dIi1rrEJbddKoGeHT4L+Igd0VSsyB3OhBCkOwYsHGu9mn5KVlz5nDX8SN12qh/jhdqcHL1ELNtiezgH1LjtNs/MSaZI1mqlCnt4EqJv0uL5g3XpNa/Daf3/30HwAAAP//
// DO NOT EDIT
'use strict';

const querystring = require('querystring');
/**
 Lists billing plans. To filter the plans that appear in the response, specify one or more optional query and pagination parameters.
 **/

class PlanListRequest {

  constructor() {
    this.path = '/v1/payments/billing-plans/?';
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

  status(status) {
    let params = querystring.escape(status);
    this.path += 'status=' + params + '&';
    return this;
  }

  totalRequired(totalRequired) {
    let params = querystring.escape(totalRequired);
    this.path += 'total_required=' + params + '&';
    return this;
  }
}

module.exports = {PlanListRequest: PlanListRequest};
