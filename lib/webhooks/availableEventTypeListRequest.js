// This class was generated on Wed, 06 Dec 2017 14:47:45 PST by version 0.1 of Braintree SDK Generator
// availableEventTypeListRequest.js
// @version 0.1
// @type request
// @data H4sIAAAAAAAC/5SSz27TQBDG7zzFaE4guXHgwMG3qqT0UCBABYcqQhPvBC84u8vMOMGq8u5obSuq0kiop9V+mj+/+WYe8CNtGSukHfmW1i1f8I6DXVifeNZ6NSzwHWstPpmPASu89WoKx3gY4hUswr7xdQMUetjzuonxN9QUQLt1Tl/zDK6jAEGuCnED2qUUxdhNJQpQZrj/PuUOIgTasq5eli7WWvpg/FMog5TOC9dWTp20HLGH8PLVDAv83LH0SxLasrEoVverAm+YHMupeh1le6otyZpT7Qv/6Vjtrk+MVejaNkuaYlAetQccX1wM8PkDt6OJ30h89mvy+6yt2ZX94/E1D3IpQv1Yd54bkvsU2h6rDbXKI5QXdkdhKTGxmOdMfYboKczQ60deuT7hugxAGeC/bG+fy5YNPKwOBV7FYBwmW5FSan09LvmXxoAF3pilD2xNdFjh+8UdjuvBCsvd6zJE85spQ48H8eiO81CLv4lrY/fVyDq9io6xejOfH178AwAA//8=
// DO NOT EDIT
'use strict';

const querystring = require('querystring');
/**
 Lists available events to which any webhook can subscribe. For a list of supported events, see [Webhook event names](/docs/integration/direct/webhooks/event-names/).
 **/

class AvailableEventTypeListRequest {

  constructor() {
    this.path = '/v1/notifications/webhooks-event-types?';
    this.verb = 'GET';
    this.body = null;
    this.headers = {
        'Content-Type': 'application/json'
        };
  }
}

module.exports = {AvailableEventTypeListRequest: AvailableEventTypeListRequest};
