// This class was generated on Wed, 06 Dec 2017 14:47:46 PST by version 0.1 of Braintree SDK Generator
// eventResendRequest.js
// @version 0.1
// @type request
// @data H4sIAAAAAAAC/8yWQU/bShDH7+9TjPZdQHJiHugh1beIgIjUNilEvaAINt5JvGDvurNjwEX57tXaCQ2JA0WktNfZ8e7v/5/Z8T6IzzJDEQm8RcNtQodGiUB00cWkc9bWiEicVWEHEu5wnFh7A1U6GMt6omPp0wIYl9DrtqFjSsjRKG2mTxIcSEIfgeoUbotAfCmQyoEkmSEjORFdjAJxilIhrUZPLGWrsYHk5EnsQQzL3MtxTNpMRSC+StJynOKyzEu9LnGYIPS6YCfACT4jE9jW/Mrzd4hkWR+5F4gzlKpv0lJEE5k69IFvhSZUImIqMBADsjkSa3QiMkWazkZ1DjquN3nkP64OPluUo0lFawvFeo2EeWBZw8t+zxEutXJroB0D0h/uTV+gyji2hWHodd0K3OFr4WqDZz7L5dY4bLJ4nXgd8xkff7+BMaFkvGSdYWPPKskI0ijwGXCXoHmpge+kg3pXFYA2cNEzjGSQV/aaWMokj3YS5txFYcjWpq6tkSdtS9Mw4SwNaRIfHBx8+Ndh7Pdu/d8+3H2rJ1Xdgl+8yeyTmnyphXMiGZj0dIqE6gVn3hX8Fsl52s3s8wxfomXuP0D8hnG5ZcKP2tzAEgn0x9cYN9ziVJub5ycO1XO3RZj6qwAXp53hcb9zDtWno51Q2diFMtdhIhmtdK1qYXcrY+mnIrtBAKGzBcXNzb1Y/Cv7ewG3+W4ameGidR6lLOrAdmO715reSYYrskxS2fA7mK+AWurDiaUKu8F1OLEEeC+zPMUArjqQyzLzWbLgxJL+vjaW21fbkOh/fUfWMJr540LIPE/nVOG1q4bPKXP+CTmxSkRi0D8fivpVJSIR3v4XPnm/hfOauFal0oUPi9fULHx8ixzf5xgzqnOWXLgjq1BE+3v7s39+AAAA//8=
// DO NOT EDIT
'use strict';

const querystring = require('querystring');
/**
 Resends a webhook event notification, by ID. Any pending notifications are not resent.
 **/

class EventResendRequest {

  constructor(eventId) {
    this.path = '/v1/notifications/webhooks-events/{event_id}/resend?';
    this.path = this.path.replace("{event_id}", querystring.escape(eventId));
    this.verb = 'POST';
    this.body = null;
    this.headers = {
        'Content-Type': 'application/json'
        };
  }

  requestBody(eventResend) {
    this.body = eventResend;
    return this;
  }
}

module.exports = {EventResendRequest: EventResendRequest};
