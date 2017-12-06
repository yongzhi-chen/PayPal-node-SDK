// This class was generated on Wed, 06 Dec 2017 14:47:47 PST by version 0.1 of Braintree SDK Generator
// webhookSubscribedEventTypesListRequest.js
// @version 0.1
// @type request
// @data H4sIAAAAAAAC/5STTY/TMBCG7/wKa87epnDg4NtqW9iVFihQcVlVlRNPiCG1jWfSElX578hJCv2SUI95PR/POzPZw0e9QVCww7zy/ueEmpyKaHM0d7hFx3fcBqRJbYlBwgzTY2DrHSh4tsQk+jAx5vVPJEofhRZjTSnyVjzNJiDhc4OxXeioN8gYCdTLSsIjaoPxXH3n4+ZcW2iuTrQ9LNuQ8Imjdd9Bwjcdrc5rPLW1tuaCflmheJoJXwqu8MDak+8qW1SCvUiuT50lE/cx6nboO5XwBbX55OoWVKlrwiT8amxEA4pjgxIW0QeMbJFAuaauu9UQg8RDkSQmiYJ3hIP219i8n276EM/DDs4cXt1KcnVw1O/nNvBROCZ/uUJ0CdP3Wvcnc8F174ROAP9le3sr2zDVTsKDd4xuHCvoEGpb6NQ++0HegYRH5vABufIGFLyfL2G4KVCQbV9nzrMtxwzKRkbK9v+OqMuOfgqQMP8dsGA0X1lzQw/eIKg302n36g8AAAD//w==
// DO NOT EDIT
'use strict';

const querystring = require('querystring');
/**
 Lists event subscriptions for a webhook, by ID.
 **/

class WebhookSubscribedEventTypesListRequest {

  constructor(webhookId) {
    this.path = '/v1/notifications/webhooks/{webhook_id}/event-types?';
    this.path = this.path.replace("{webhook_id}", querystring.escape(webhookId));
    this.verb = 'GET';
    this.body = null;
    this.headers = {
        'Content-Type': 'application/json'
        };
  }
}

module.exports = {WebhookSubscribedEventTypesListRequest: WebhookSubscribedEventTypesListRequest};
