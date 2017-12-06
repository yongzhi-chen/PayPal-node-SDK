// This class was generated on Wed, 06 Dec 2017 14:18:31 PST by version 0.1 of Braintree SDK Generator
// agreementTransactionsRequest.js
// @version 0.1
// @type request
// @data H4sIAAAAAAAC/7yUT28aQQzF7/0Uls/bbNpDD3uLQtpE6h/aol6iCJkdw040zEw8pu0K8d2r2U02QEgrcuhxHsZ+P/vBGj/TkrFCWgjzkr2eqJBPVKsNPmGBI0612JifWOFHmzTBdgnMgwB5GBoUMGvhanQCkwBz65QFtOHd72hDChQjk4D13efCKQafuIAUubbztlNDN5gcJCVRIG+AvQFDynC3YmkhktCSlSWdYIFfszYeJKyu1zhpYyZMKtYvsMAfJJZmju/J2Ztp7veEddLw47Aw712SX/SPHZwAzibNBs5EqO0nnhb4jcl88a7Fak4ucRbuVlbYDMJYQmRRywkrv3JuU/zTcLeK5y33m/q/pm8KvGQyLDurvynwfZDlvjYmbY470ZCtqTUHma9GD6xDaZfLX42tmwfSHfyjsFVWz1DnGk7aN8lilvog99rAdjYYm+z+wPZYn/CdeaBsNBM+0r2Y5cAJrw+Y3Or/t3tslU3zjo93D2F2y7XuQ7x7WQ43BZ4Hr+zvT4IUo7M15UnlbepgLlXjJ9YmGKzww8UE+0hiheXPN2WkNltM5cw6Z/3i9eA6levtIG7KvX/Ki9+Ra2XzXUlX6TwYxurt6enm1R8AAAD//w==
// DO NOT EDIT
'use strict';

const querystring = require('querystring');
/**
 Lists transactions for an agreement, by ID. To filter the transactions that appear in the response, specify the optional start and end date query parameters.
 **/

class AgreementTransactionsRequest {

  constructor(agreementId) {
    this.path = '/v1/payments/billing-agreements/{agreement_id}/transactions?';
    this.path = this.path.replace("{agreement_id}", querystring.escape(agreementId));
    this.verb = 'GET';
    this.body = null;
    this.headers = {
        'Content-Type': 'application/json'
        };
  }

  endDate(endDate) {
    let params = querystring.escape(endDate);
    this.path += 'end_date=' + params + '&';
    return this;
  }

  startDate(startDate) {
    let params = querystring.escape(startDate);
    this.path += 'start_date=' + params + '&';
    return this;
  }
}

module.exports = {AgreementTransactionsRequest: AgreementTransactionsRequest};
