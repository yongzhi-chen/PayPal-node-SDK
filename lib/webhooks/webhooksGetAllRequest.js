// This class was generated on Wed, 06 Dec 2017 14:47:50 PST by version 0.1 of Braintree SDK Generator
// webhooksGetAllRequest.js
// @version 0.1
// @type request
// @data H4sIAAAAAAAC/6SRQW8TMRCF7/wKa84mCRw4+BalLa1U2gUiOFQVmWRnuwbHNjOzwKrKf0fupgE2iAM9+sl+73vP93CFWwIH32ndpvRFJnekzzEEsHBCsmGf1acIDi69qBgMwTxeNU1ig9FgzhOw8LYj7itk3JISC7ibe1j2uZiLso93YOEDssd1oH0oxk2b+JOWW+O8Mx+KjdGWfiX6+HBmkpyikFn3D+fV3sjXK0NRvfameE7MCTXYBTVezGpeVZcXi/ny4vpqVXjnzNgPgDML7wjr6xh6cA0GoSJ87TxTfRAqTplYPQm42IWwu7VwTlgT/1H61sJZ4u1Yq1DbsVYiSHRgKJZFGpoN2mHAj8MAJnjR4xn/+lcmNYfdnlr3ZgxyzPAYdcQyjwZL9D94Xv3f/DsLixSV4n5BwJyD32AJnn6WFMHCuWp+Q9qmGhy8Pl3C8BPgYPrtxTQm9c3+hUx/q3D6I9NGqX6vqJ0sUk3gXs5mu2c/AQAA//8=
// DO NOT EDIT
'use strict';

const querystring = require('querystring');
/**
 Lists all webhooks for an app.
 **/

class WebhooksGetAllRequest {

  constructor() {
    this.path = '/v1/notifications/webhooks?';
    this.verb = 'GET';
    this.body = null;
    this.headers = {
        'Content-Type': 'application/json'
        };
  }

  anchorType(anchorType) {
    let params = querystring.escape(anchorType);
    this.path += 'anchor_type=' + params + '&';
    return this;
  }
}

module.exports = {WebhooksGetAllRequest: WebhooksGetAllRequest};
