// This class was generated on Wed, 06 Dec 2017 14:47:48 PST by version 0.1 of Braintree SDK Generator
// webhooksDeleteRequest.js
// @version 0.1
// @type request
// @data H4sIAAAAAAAC/2SRT08CMRDF736K5p0bFo2n3gy7BhL/oBIvhphCB7e6tLWdVTeE727qQhS8/vLa+c2bDW70mqDwSYva+7c0MNQQEyRKSstoA1vvoFD+4CS02CWlWHRiUg4gcddS7KY66jUxxQT1NJcYkzYUj+mlj+tjNtVcH7ANZl3IUomjdS+QeNTR6kVDh7LP1vzznNUkJqXwK8E17V0Fe9HvlXUvYtRdP2EocU/a3Lqmg1rpJlEG762NZKA4tiQxjT5QZEsJyrVNs533GUrcf5JhRil4l+gvG3nH5HYx6BAau9RZtHhN3kFizByuiWtvcsXVVTWr0BcCheLjtHCe7Wr3KBX7IxWb3wa2kKi+Ai2ZzANrbtPIG4I6G55vT74BAAD//w==
// DO NOT EDIT
'use strict';

const querystring = require('querystring');
/**
 Deletes a webhook, by ID.
 **/

class WebhooksDeleteRequest {

  constructor(webhookId) {
    this.path = '/v1/notifications/webhooks/{webhook_id}?';
    this.path = this.path.replace("{webhook_id}", querystring.escape(webhookId));
    this.verb = 'DELETE';
    this.body = null;
    this.headers = {
        'Content-Type': 'application/json'
        };
  }
}

module.exports = {WebhooksDeleteRequest: WebhooksDeleteRequest};
