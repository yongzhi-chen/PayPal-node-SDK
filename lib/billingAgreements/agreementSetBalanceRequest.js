// This class was generated on Wed, 06 Dec 2017 14:18:30 PST by version 0.1 of Braintree SDK Generator
// agreementSetBalanceRequest.js
// @version 0.1
// @type request
// @data H4sIAAAAAAAC/6xUYWscNxD93l8x6FMLe6skBAr7LcQNuYB9154pFGOSOWnuVq1WkkezvizG/71od+/qs1tCIV+Hpzd6783Mg7rCjlSjcM9EHQWpM8liix6DIVWpC8qGXRIXg2rUhiSDtAQzAHaRAQOcXlewHWB5UcMyjLhPm9UVMN31lAW20Q4V5ETG7YYzGtMzUzADyJAIMFi4R99TrSr1a088rJGxIyHOqrm5rdRHQkv8vPohcve8tkZpz2oP6npIRXEWdmGvKvU7ssOtp+dOfHb2hQHXLcHyAuJu/P4JOvpwaJ1pQSJkEsCjtqLhHTMOU9tXlfqN0K6CH1SzQ5+pFO56x2RVI9xTpdYcE7E4yqoJvfePtxOGskwkJw2XMdBs2sFJ+4+PJlqCux692zma3Xwp9Qh/IfPdxDmm6z3sXMBgHPqJaMHkUcjCzpG3uYYPkYG+Ypc8VUfdFSQcRm9sT9WYaY4Qw//yYy48NeTbAf6nqhLejbRMtDAtMhohhuVmtXj75vXP597d/tiKpNxobemefGlfJxwS+trETttosnZBaM9YyLV1TEY0UxZ9JFoUoqx/+h4TUH1T9THil5JPwqadgku3bwW2Zc9g1EA8Jj3jHGXw7i+CL5/Wf3wBaVEAmSBEKVPhDHo/wK7Y52JAD2VIYLI1eTQElozr0J8w/85+fXXxhD33W+vunSVb/hRB2thnDFbaeb7KvvFsE4S+2xKXNTz2GjvnaWLPo6wgE8HNcrOCkvOUbKP14XCoXY515L12Oeo2dqSzYLDINp9S/DymWLfSfZcgbx8LKKcYMk00pVyp9zEIhXm/FabknZlG688cg6rUR5F0SdJGqxq1Xm2u1XTcVKP0/Ws9L1vWW+e9C/vF6TZl/fD0pD3q8wP/y9dERshuBKXP76Ml1bx59fbxh78BAAD//w==
// DO NOT EDIT
'use strict';

const querystring = require('querystring');
/**
 Sets the balance for an agreement, by ID. In the JSON request body, specify the balance currency type and value.
 **/

class AgreementSetBalanceRequest {

  constructor(agreementId) {
    this.path = '/v1/payments/billing-agreements/{agreement_id}/set-balance?';
    this.path = this.path.replace("{agreement_id}", querystring.escape(agreementId));
    this.verb = 'POST';
    this.body = null;
    this.headers = {
        'Content-Type': 'application/json'
        };
  }

  requestBody(currency) {
    this.body = currency;
    return this;
  }
}

module.exports = {AgreementSetBalanceRequest: AgreementSetBalanceRequest};
