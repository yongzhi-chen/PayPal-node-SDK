// This class was generated on Wed, 06 Dec 2017 14:10:39 PST by version 0.1 of Braintree SDK Generator
// planCreateRequest.js
// @version 0.1
// @type request
// @data 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
// DO NOT EDIT
'use strict';

const querystring = require('querystring');
/**
 Creates a billing plan. In the JSON request body, include the plan details. A plan must include at least one regular payment definition and, optionally, a trial payment definition. Each payment definition specifies a billing period, which determines how often and for how long the customer is charged. A plan can specify a fixed or infinite number of payment cycles. A payment definition can optionally specify shipping fee and tax amounts. The default state of a new plan is `CREATED`. Before you can create an agreement from a plan, you must activate the plan by updating its `state` to `ACTIVE`.
 **/

class PlanCreateRequest {

  constructor() {
    this.path = '/v1/payments/billing-plans/?';
    this.verb = 'POST';
    this.body = null;
    this.headers = {
        'Content-Type': 'application/json'
        };
  }

  requestBody(plan) {
    this.body = plan;
    return this;
  }
}

module.exports = {PlanCreateRequest: PlanCreateRequest};
