// This class was generated on Wed, 06 Dec 2017 14:47:46 PST by version 0.1 of Braintree SDK Generator
// eventListRequest.js
// @version 0.1
// @type request
// @data H4sIAAAAAAAC/8SVT2/bRhDF7/0Ug+2lBSiSilADJdBDmihNgDRxW7WHGoI0Iofi2uQuPTuUrRr+7sWSkqw/roXCgn0dDjm/ffve8E59wYpUomhBRsJSO1GBek8uZV2LtkYl6rN24uCGZoW1V9A2grGic52ib3Eh/OkIrhviJdTIWJEQOxALuS6FGKQgYHK1NY5CFajffOv5plMlF3dqtKw9hxPWZq4C9ReyxllJaz6TTURXdED3oR3h2hlPMII2OxieTgrrCFImFMrAGrAMmK+Bp06QpR06BTTrhhnllgmk0A4yFGof+aYQfrZSwALLhhwgkx958ckIsSHZ7YXccoUy/q4QqV0SRWJt6UJNkoeW51EhVRlxng4Ggx+/dZT6I/R+CM++X70YwvAWq7qkBKZrZX56E/cHvXjQi89G/X4Sx0kc/z31cr9lxmWnbxyo3wmzr6ZcqiTH0pEvXDeaKdsUztnWxKLJqcQ0ZXkfHL8er/hEfNNTF7StPoLTZl5Sd1sn5tRGaE58CFrjnCZO/3PIOSoITFPNiMHmT1pJLDBJw2bfVC8k9oMxXyoN+15/LA/0YMVpl4LXSsSDPq+aCWE0DlvSic7+fy623g9gtoRP708CPg7UR8KMeGcBjwP1wXK1XztHKfZrfgQ56Rj8J32p4+9qG2U6561+KnvqPPqb2Uqe63zrnnvmi+M7IbWNkSP7QAtVbWwI0wIYzZx8mck1pbgQvljxIUDZvc9KzwuBAhcEOd0Qr74jBa4D2GpJGUw3m2mdntO6dOjV/I/F7Q4O/9YA+tnHL+TsmVyftbmCreHwdXZJ6SOkpTZXh6CngBnfB+qdNUJmZWqFdV2udmV06axRgfooUv9KUthMJeqX4Uh14VCJihb9aGe7RmvFeht1h7c1pULZH4LSuHc2I5W8ieP7b/4FAAD//w==
// DO NOT EDIT
'use strict';

const querystring = require('querystring');
/**
 Lists webhook event notifications. Use query parameters to filter the response.
 **/

class EventListRequest {

  constructor() {
    this.path = '/v1/notifications/webhooks-events?';
    this.verb = 'GET';
    this.body = null;
    this.headers = {
        'Content-Type': 'application/json'
        };
  }

  endTime(endTime) {
    let params = querystring.escape(endTime);
    this.path += 'end_time=' + params + '&';
    return this;
  }

  eventType(eventType) {
    let params = querystring.escape(eventType);
    this.path += 'event_type=' + params + '&';
    return this;
  }

  pageSize(pageSize) {
    let params = querystring.escape(pageSize);
    this.path += 'page_size=' + params + '&';
    return this;
  }

  startTime(startTime) {
    let params = querystring.escape(startTime);
    this.path += 'start_time=' + params + '&';
    return this;
  }

  transactionId(transactionId) {
    let params = querystring.escape(transactionId);
    this.path += 'transaction_id=' + params + '&';
    return this;
  }
}

module.exports = {EventListRequest: EventListRequest};
