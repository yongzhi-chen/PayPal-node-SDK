// This class was generated on Thu, 18 Jan 2018 17:23:56 CST by version 0.1.0-dev+01638e of Braintree SDK Generator
// creditCardListRequest.js
// @version 0.1.0-dev+01638e
// @type request
// @data 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
// DO NOT EDIT
'use strict';

const querystring = require('querystring'); // eslint-disable-line no-unused-vars
/**
 Lists vaulted credit cards. To filter the cards in the response, specify one or more optional query parameters.
 **/

class CreditCardListRequest {

  constructor() {
    this.path = '/v1/vault/credit-cards?';
    this.verb = 'GET';
    this.body = null;
    this.headers = {
      'Content-Type': 'application/json'
    };
  }

  endTime(endTime) {
    let params = querystring.escape(endTime);

    this.path += 'end_time=' + params + '&';
    return this;
  }

  externalCardId(externalCardId) {
    let params = querystring.escape(externalCardId);

    this.path += 'external_card_id=' + params + '&';
    return this;
  }

  externalCustomerId(externalCustomerId) {
    let params = querystring.escape(externalCustomerId);

    this.path += 'external_customer_id=' + params + '&';
    return this;
  }

  merchantId(merchantId) {
    let params = querystring.escape(merchantId);

    this.path += 'merchant_id=' + params + '&';
    return this;
  }

  page(page) {
    let params = querystring.escape(page);

    this.path += 'page=' + params + '&';
    return this;
  }

  pageSize(pageSize) {
    let params = querystring.escape(pageSize);

    this.path += 'page_size=' + params + '&';
    return this;
  }

  sortBy(sortBy) {
    let params = querystring.escape(sortBy);

    this.path += 'sort_by=' + params + '&';
    return this;
  }

  sortOrder(sortOrder) {
    let params = querystring.escape(sortOrder);

    this.path += 'sort_order=' + params + '&';
    return this;
  }

  startTime(startTime) {
    let params = querystring.escape(startTime);

    this.path += 'start_time=' + params + '&';
    return this;
  }

  totalRequired(totalRequired) {
    let params = querystring.escape(totalRequired);

    this.path += 'total_required=' + params + '&';
    return this;
  }
}

module.exports = {CreditCardListRequest: CreditCardListRequest};
