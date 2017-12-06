// This class was generated on Wed, 06 Dec 2017 11:34:59 PST by version 0.1 of Braintree SDK Generator
// refundGetRequest.js
// @version 0.1
// @type request
// @data H4sIAAAAAAAC/+xZX28bNwx/36cg1Jc2OPvSZmsxvwVNu+aha7YEe8kCgz7xfGp10o3ixTGKfPdB98f1v6zpmnod4CdDFKX7iT+SouiP6lcsSY0UU147PZySqESdUMjYVGK8UyN1XvhZAE2CxgbIPQNCq57AZA6nJ0OVqN9q4vkZMpYkxEGNLq8S9YZQE69LX3su12VnKMWK7KO6mFcRWBA2bqoS9QeywYmlFcBjozfwXhQEpyfgc5CCOqQN7FlhsgLEQyj8rD9QBH/MjPP2e4eJ+p1Qv3N2rkY52kBR8FdtmLQaCdeUqDP2FbEYCmrkamtvr1odCtJuEoVRFCrvArWyxYFaQJsH2jjHcY9dGF3ALIq/CG0nWIb7ya5Y+trJJoyFfNOoFc5LcgKtSgIzIwVMmPDDoK7Cw0G7i/KsZiaXzbeCu5SCiQZZgYyZEMPp+bvBj8+evoB+GWRe09XjVPsspMYJTRnjBqk2TJmkTEHSXnkQlUP6ZAhnOD9DC9pTAOcFQl1VngXQ2n5rQw/iRskaOePORTct8Wli0xCotYnDiLmLWZz4WppoWKXw21M2NbmMZ4zVVqhxFuIs5ERDeIs3pqxLsOSmUoAJ8PQQFoSGpAtg4zJbawqjP+vDw6Osts0vtSNr2tE5XZMDbaZGAkwo90yNATRlpkQLlTdOhu2atF+0usXFF6rPfP89zKMD3vNzaX+AryRjzYXuYqRAp61x03FOtJWUXmHPSYTcBju1F0hc3aWDPpBKksJr8M7Oh7sh0LhQM7psO3uL2T19K/RFgv6Zwx3RFwpTVe3MJnv95J68neXD3uRjbUJ2Z+mzTAz0mvvw+v6yY6gn4gXtdha7ya78WaA2QmUYwmn/YmhK+QVrYI3rdBKQwgSoWlzzSPjBAXewDw72IbsTjgVvttIreLNn4AEYuLoPB3cG2UqERcNPScdHd/f8IILJfDHgIbz23D10QwJMFVMgJ6FR6XaRAmVpfafdb+rZTI1rs07ccO8BX93PuIcDZFhJzfT5BkxAS8stDJhQvEhbEmlXZVfGhEJjMeX2ulmjEKDTEDVgVpBb7h7NMEC7g07AOLg8dULsSNbW5Z5LlKvHhUgVRmkq3tswNCT50PM0LaS0KefZ0dHRz48CNeYY/DR8/mRHRtBLx95mhO60S2q7etPcs4u33AnbFucvluJ8Z8+xa28yGru6nBDf8SZrVCBWG4zZh+j+pyfQrnhgmNa4D+MlAsd+8p6yLX2+qLjZQDp2gBFMtHtXBw2YbHR8uHxzfPHq3fE5NEv7RhpWJvXXxNeGZumjAoU8hkGjsu7Wz78RBRUyORl3RednPKkvTb3r+8GxolvOTybABMPOMhMThjvjMU59uv7WUf4XiTSm8/9L0g+Csj3dNzOryWVHmOpK/7uLKPiaM2quIotBoN3oO76Prm4T9dI7ISd9W7uqrMnapvv71unfiFRvm1eiGqlfXl2o9r8gNVLp9dO0C9aQthSlHxf/+tyqRL26qSgT0ueCUoeXXpMaPTs8vP3hbwAAAP//
// DO NOT EDIT
'use strict';

const querystring = require('querystring');
/**
 Shows details for a refund, by ID.
 **/

class RefundGetRequest {

  constructor(refundId) {
    this.path = '/v1/payments/refund/{refund_id}?';
    this.path = this.path.replace("{refund_id}", querystring.escape(refundId));
    this.verb = 'GET';
    this.body = null;
    this.headers = {
        'Content-Type': 'application/json'
        };
  }
}

module.exports = {RefundGetRequest: RefundGetRequest};
