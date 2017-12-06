// This class was generated on Wed, 06 Dec 2017 14:47:51 PST by version 0.1 of Braintree SDK Generator
// webhooksUpdateRequest.js
// @version 0.1
// @type request
// @data H4sIAAAAAAAC/6xVQW8jNw+9f7+C0HdJFhNP2kMPvhnZFGmxXbux2x6CIEOP6Iw2sqSKnLhGkP9ecGa8Sew020X3KEqkHsn3yAfzEddkxmZDyybGOx61yaKQKcx74jq7JC4GMzaXlDzWxDA8hJUjbxk2ThoItIF79C3xCOZtSjELQwx+C9IQVLn3rSAmyqgBRzBDZkCoPnEMNwmlbiqIy09USx/yFSfAYKFKKE1VwKZxdQOOoSrb7CtYxQwIv11+gJihKumegtzINhH3d52BR7BQQB3WSr3JSUO5gzn4InjHAnG1czGF+bWlvJ1hxjUJZTbjq+vCXBBayvvWH2Ne79tmKM0L24NZbJNWnSW7cGsK8ztmh0tPL7tx4+xBIzSBn94rPgW964ZE6BuncCc547b/4bQwl4R2GvzWjFfomdTwZ+syWTOW3FJhZllLLI7YjEPr/eN1/4ZY+iCf4f48n36EmTbrEHLXw5vc+x2gngRARaW4uyjd86HjrPAxJb+FhFkc+iGZ7iITxzbXxHup/fBmaoPhIDd9wykGpr3c/ugreZjYQS7TQEqUdcxP9R8S+arqvwLxiRnnSj7oDgeInpH7zUK3SesnFAYq66nXjUTgdql+S4JtbPMukREsnl9pX7zfubtQ+9a6cNsJfjAiKxG3gJkArSVbACeq3aoXP7JQdnwHR9W76hg2zluoMdvuo0Hj/ZR4Idkuh5eRqnfVnnsnVMXH/cwhO4Aq4Kq/u0fntXCD/fro/59NJ53pRP8b6ePjr6LXPyin+KKy/62i/yuT9uB8cOEOnn0L046wh/i8C3dvs2qQ+Ekmj1ryq4vJ4nw6mUPnen1U2lhzicmVDQpF5JPuojz+Nvr9YoXb7F8tsc53aVB07NcxrNxtm8kqxbX9FCAGqHys0TeRpd8aLtRxrYSvZtP5ooIQxa1c3a+jNTHjrQ4pjVrHIOgGqYELq5jX/a77FhP5sTBnMQiFYSQbHZcDkFJ3qCnMhUj6haSJ1ozNbLI4uzD97jFjU95/Vz4Hz+Vu4ZcPT8vm0RTm/K9EtZCdC0rLZ9GSGX9/evr4v78BAAD//w==
// DO NOT EDIT
'use strict';

const querystring = require('querystring');
/**
 Replaces webhook fields with new values. Supports only the `replace` operation. Pass a `json_patch` object with `replace` operation and `path`, which is `/url` for a URL or `/event_types` for events. The `value` is either the URL or a list of events.
 **/

class WebhooksUpdateRequest {

  constructor(webhookId) {
    this.path = '/v1/notifications/webhooks/{webhook_id}?';
    this.path = this.path.replace("{webhook_id}", querystring.escape(webhookId));
    this.verb = 'PATCH';
    this.body = null;
    this.headers = {
        'Content-Type': 'application/json'
        };
  }

  requestBody(patchRequest) {
    this.body = patchRequest;
    return this;
  }
}

module.exports = {WebhooksUpdateRequest: WebhooksUpdateRequest};
