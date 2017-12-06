// This class was generated on Wed, 06 Dec 2017 11:55:41 PST by version 0.1 of Braintree SDK Generator
// webProfilePartialUpdateRequest.js
// @version 0.1
// @type request
// @data H4sIAAAAAAAC/3ySQW/TQBCF7/yK0Zy3SUGIg29RAkqQaA2NuKCqGtsTvGizu50dN7Wi/He0sUNLgrhZz6O373sze7yhLWOBO66uooSNdTyJJGrJXXWxIWU0uOBUi41qg8cCy+G368eBBAQ7roCfI4tlXzOMTgaqHlaLCaw8aMvw+e72BoQfO04KVWh6AylybTc9EETSuoVQ/eJazXE8krYQNsP34Agu1JRzgAYYnjdAvgECzzt4ItfxBA1+7Vj6koS2rCwJix/3BpdMDcu5+inI9lwrSdu/tD2u+5h7SirW/0SD30ksVY7H/sZ8D7a56GvdMqwW5yAaIJ6KHEly8JkI9cNb1wa/MTW33vVYbMglzsJjZ4UbLFQ6NlhKiCxqOWHhO+cO98MMJx1M/gQ/dl/mjv8RPssP42Iu8s88UE6VCY4urzeVMgjF6PoTDpyuQgMIp9BJzekM7cN/0Ubhgi3PpBh84sEliwbnwSv7ERfR4FI1fmFtQ5OPdbaeL3HYKBY4fXo7jdRv2evVy71OX11/mu5fdnlAgx+fI9fKzZ2SdmkeGsbi3fX7w5vfAAAA//8=
// DO NOT EDIT
'use strict';

const querystring = require('querystring');
/**
 Partially-updates a web experience profile, by ID. In the JSON request body, specify a patch object, the path of the profile location to update, and a new value.
 **/

class WebProfilePartialUpdateRequest {

  constructor(profileId) {
    this.path = '/v1/payment-experience/web-profiles/{profile_id}?';
    this.path = this.path.replace("{profile_id}", querystring.escape(profileId));
    this.verb = 'PATCH';
    this.body = null;
    this.headers = {};
  }

  requestBody(patchRequest) {
    this.body = patchRequest;
    return this;
  }
}

module.exports = {WebProfilePartialUpdateRequest: WebProfilePartialUpdateRequest};
