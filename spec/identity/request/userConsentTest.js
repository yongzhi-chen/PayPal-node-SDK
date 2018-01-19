'use strict';

const chai = require('chai');
const environment = require('../../test_harness').environment();
const UserConsent = require('../../../lib/paypalrestsdk').UserConsent;

describe('UserConsent', function () {
  it('generates consent url correctly', function () {
    let userConsentUrl = new UserConsent(environment)
                          .responseType('code')
                          .scope('profile+email+openid+phone+address+https%3A%2F%2Furi.paypal.com%2Fservices%2Fpaypalattributes')
                          .redirectUri('http%3A%2F%2Frequestbin.fullcontact.com%2F15a7bhu1')
                          .build();

    chai.assert.equal(userConsentUrl, 'https://www.sandbox.paypal.com/signin/authorize?client_id=AdV4d6nLHabWLyemrw4BKdO9LjcnioNIOgoz7vD611ObbDUL0kJQfzrdhXEBwnH8QmV-7XZjvjRWn0kg&response_type=code&scope=profile+email+openid+phone+address+https%3A%2F%2Furi.paypal.com%2Fservices%2Fpaypalattributes&redirect_uri=http%3A%2F%2Frequestbin.fullcontact.com%2F15a7bhu1');
  });

  it('skips params that are not set', function () {
    let userConsentUrl = new UserConsent(environment).responseType('code').build();

    chai.assert.equal(userConsentUrl, 'https://www.sandbox.paypal.com/signin/authorize?client_id=AdV4d6nLHabWLyemrw4BKdO9LjcnioNIOgoz7vD611ObbDUL0kJQfzrdhXEBwnH8QmV-7XZjvjRWn0kg&response_type=code')
  });
});