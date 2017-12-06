// This class was generated on Wed, 06 Dec 2017 14:06:36 PST by version 0.1 of Braintree SDK Generator
// creditCardDeleteRequest.js
// @version 0.1
// @type request
// @data H4sIAAAAAAAC/2yRTW/iMBCG7/srrDl7CbtH31YkK5D2g7aolwqhIR4aV8Z2xxPUCPHfK5MegPb6aMZ+3neO8A/3BAZaJuvke4tsJ5Y8CYGGmnLLLomLAQzUZ5wVqgP2XsiqcUmVJa22g1rUE9Bw1xMPS2TckxBnME9rDXNCS3xLf0fe37IlSnfFjrAaUnHMwi48g4ZHZIdbT1fum6KxcfaT96ojtahV3Cnp6Ct3JVGNmYv+L2Ycxh+nGu4J7f/gBzA79JkKeO0dkwUj3JOGJcdELI4ymNB7f1qPM5RlfKTAgnKKIdMlm8UgFD7GAFPyrsUiXb3kGEDDXCT9JemiLfU3f5pVA2NBYKA6/KjOYaqL2+XqeN3GCTQ0b4laIfsgKH2eRUtgfk6np2/vAAAA//8=
// DO NOT EDIT
'use strict';

const querystring = require('querystring');
/**
 Deletes a vaulted credit card, by ID.
 **/

class CreditCardDeleteRequest {

  constructor(creditCardId) {
    this.path = '/v1/vault/credit-cards/{credit_card_id}?';
    this.path = this.path.replace("{credit_card_id}", querystring.escape(creditCardId));
    this.verb = 'DELETE';
    this.body = null;
    this.headers = {
        'Content-Type': 'application/json'
        };
  }
}

module.exports = {CreditCardDeleteRequest: CreditCardDeleteRequest};
