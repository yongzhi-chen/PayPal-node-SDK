// This class was generated on Wed, 06 Dec 2017 14:47:47 PST by version 0.1 of Braintree SDK Generator
// verifyWebhookSignaturePostRequest.js
// @version 0.1
// @type request
// @data H4sIAAAAAAAC/9RY70/jRhD93r9itP1ylfKDFt1Jl28R5I5IQFISrq0QCoM9ifewd93ZcYJ74n+v1j8gJAFyhaN3nyJ53trvvZ3n8eaLOsaEVEfNifU0by3oMrL2quX0zKBkTK3UOlENtU8uYJ2KtkZ11CeP1uQAoVoBdytUQ/2eEedDZExIiJ3qnJ031AFhSLx69YPlZPXaECVavXZCf2fkZJynpDpfVPlbEsnhj4rEqCahGuoTssbLmO4JbFZ0m24JeV9bF0roujLgkoNX2GXGvCSx48lhODBxrjpTjB2VbDVTeHthyDYlFk1ezi19J6zNbJ0sZhJNMJ7ZNXbjiMAXWEuUgEQoMMR8iDFkjhyIhRkZYhQCiWiJO5qwhOc2gwCNx3t4JfYeuAW9a2EMBCTSDuYYZwRTtkkBuxh2/xp2D5vd0/FBs3v4cXABTC61xhFExR43YBHpIALtgCkgPacQFlqiYnltq7GipzpAL+yrHBXOVgw1WRzfNJ50NSCWScbxRlP/bL3deQ9pdhnrAK4oB48uCVIL9u3CxBbDQsFSpXZFOzg9OSxM9r5qeZ61e72TcfP05PBHcVYYjUu0c9qaiQ43GtzfBzsteB6Mx0NYXtKCPWsEtaEQtLnnxPikezw66o9G/cFxs79/UflQ32pZKiTkHM7of5Ds9Gyj5jKazTqSIaDLk4SEdbDcEt00JWT3qPZR/+N3Kl50QhvVhz4gxXtHJ/Tg5je87LO+EWJDsrJoajlBOX8TiaSu026LtbFraZJpy/KsHUkSt3ka7O7uvv/ZUeAf3nzbevfLdp6O+0e91ze1Nycj655W6Z1QVV6dSnW6i/pLZvzpcRQwodC2G72IyNx7H60zhgU6KO8afpv9f+aI3jIHhbKJeNAmX0rhxdQV1rMZMYVPOPOqxOfEPoGPcK8QdYqePWH+O+Mnp8qreXqozRUsMYHB5WcKNiQ61ubKrSfZAHoynnf1QdlkiovxcHbQHfcG3REUS8/ftEMbuDamuh2hkEXXLAqr7f3umYrsAwKYnM042NzcdfG77O+a3MPZNHg3k26l1Psg9sF2LzW9kgyXJQlyvmEaVBUIl/pwarmgvcF1+GAZ6BqTNKYGXHQhxTzxKH/SsKz/WXstty5eQuL5FiLrwbd1wj1Ja6Z6lnH5wZjbjGGf5hT7x8PQsmAMGAQ2+8qtemB4n994UPklvuUJFGr8uuCNMh85dJb3+fanzoJC1TETJyiZ20i1LNW7csd0ef1Lue4PBmSqY7/CNI2rB7Q/u2JyHYikRySRDVVHDQejsSr/P1Ad1Z7/2l5OgWs/8idA7zqlQCgcFeL2bEiq89vOzs1P/wIAAP//
// DO NOT EDIT
'use strict';

const querystring = require('querystring');
/**
 Verifies a webhook signature.
 **/

class VerifyWebhookSignaturePostRequest {

  constructor() {
    this.path = '/v1/notifications/verify-webhook-signature?';
    this.verb = 'POST';
    this.body = null;
    this.headers = {
        'Content-Type': 'application/json'
        };
  }

  requestBody(verifyWebhookSignature) {
    this.body = verifyWebhookSignature;
    return this;
  }
}

module.exports = {VerifyWebhookSignaturePostRequest: VerifyWebhookSignaturePostRequest};
