// This class was generated on Wed, 06 Dec 2017 14:18:26 PST by version 0.1 of Braintree SDK Generator
// agreementCancelRequest.js
// @version 0.1
// @type request
// @data H4sIAAAAAAAC/6RTwW7TQBC98xWjOZu6IE6+VQ2oQaIJJOKCqnTsncRbbXbd2TFgRfl3tHZwi4NAiNNqn2b2vTdv9oC3tGcskHbCvGevFxX5ih1mOONYiW3UBo8FXvdwBILSOmf9DsaWDMoO5rMLmHvQmuH9anELwo8tR4UymC4D6yvXGgbycD/2baKS8saceILcQygfuFL4ZrVOtaFnJwc+KIPWpDBUlxx7KmGKwcM2SH8dtDtKXUDe9ODIB7QPbTq8gaoVYV91F5jhx5alW5LQnpUlYvHlLsMbJsMyRd8F2U+xJWn9C3bAddekoUYV63eY4WcSS6Xj6bA31pwNel0zzGcQthPxGk72kuQrEeoGlssMPzGZhXcdFltykRPw2Fphg4VKyxkuJTQsajli4VvnjndDDUcdHhklX418qxQOzMZw/mRjGuSZqSswT/ef3oYMFPruM8P/ZPMEPPf59xjSUv12/JOtespgUFrV5Hf8v/qGHI6pKjbBRx7eSXCG18Er+1M4SE3jbNVvdf4Qg8cMb1SbD6x1MFjgcrFa47CIWGD+9VXeUJcEx/z0WV+OHmJ+eL5+x3z872+/N1wpmxR8G6+DYSxeX745vvgBAAD//w==
// DO NOT EDIT
'use strict';

const querystring = require('querystring');
/**
 Cancels a billing agreement, by ID. In the JSON request body, include an `agreement_state_descriptor` object with an optional note that describes the reason for the cancellation and the agreement amount and currency.
 **/

class AgreementCancelRequest {

  constructor(agreementId) {
    this.path = '/v1/payments/billing-agreements/{agreement_id}/cancel?';
    this.path = this.path.replace("{agreement_id}", querystring.escape(agreementId));
    this.verb = 'POST';
    this.body = null;
    this.headers = {
        'Content-Type': 'application/json'
        };
  }

  requestBody(agreementStateDescriptor) {
    this.body = agreementStateDescriptor;
    return this;
  }
}

module.exports = {AgreementCancelRequest: AgreementCancelRequest};
