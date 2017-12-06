// This class was generated on Wed, 06 Dec 2017 11:34:51 PST by version 0.1 of Braintree SDK Generator
// authorizationCaptureRequest.js
// @version 0.1
// @type request
// @data H4sIAAAAAAAC/+xbUW/bOBJ+v18x0L60gSKl29sezm9Bu0XzsNvcJtiXXuCOyZHFLUXqyFESX5H/fqAo2bFjN8k1Me4WfDJEDskhv5nhcD74a/YrNpRNMuy4tk79G1lZUwhsuXOU5dk78sKpNrRmk+xtbPeARkLrrCDv+y9YG5/DbAEn7wo4rwmsU3NlUEOLi4YMg0Ctoek8g29JqGoRxivDoc9W8Hmcij4XWZ79oyO3OEWHDTE5n00+XeTZB0JJbrP1vXXNZtspcr3W9jU7X7Rhx56dMvMsz35Hp3CmadtJTJW8cwhhUyfvgqpc0/rGgS0MZxd0P3YOF3G5ozz7jVB+NHqRTSrUnkLDvzrlSGYTdh3l2amzLTlW5LOJ6bS+uYgy5DlOstR9hc+G8ruAOx7VAnZoPIoe5seoODTc1nF1ltjYzvCWsxzb757gaA1RJIcrxTXMHOGXw671T6faLphF5xwZsdiq3CeuHdGhqNGhYHJwcvbx8K8/vvobjMNAWEkXL0pphS+D8c5dbwGlVI4El448l6PwYRD25csCTnFxihqkJQ/GMviuba1jCC4xSCvyT2E7+QY4U0mMSvu7J7HquHsQKKUKn0HnKAY4sx33pr8O4fNDNlcVT68ctltVDb0QeqEiKuAXvFZN14AmM+calIdXR7AE1OdwVStRgzJCd5L85J/d0dFr0en+l+KXVvHrjC7JgFRzxR5mVNngRzWBJKGaENmsMlzEMeU4aH2K80eKX9lxPayCAT5wuXLcwHeCsWFCuxCp0UitzHxaEW0FZRRImASVo7OThMrG0UM4GB2pIa6tBGv0otgPgMr4zqER29Fb9ib41uALAH0bwz3B52vVtrHnLnpjZwJvb/FwPPKpVF7sTH1uAwOjZHKv/73o6LsZW0a9HcWhc0h/llorpsYXcBKfBy7m70vUQCszyOTAtfLhGRX0WgTADw7coPbBQXLZvWDMeL0VXsbrhMATIHDxEAx2Otmah4WDn5MMj+zh+UEEs8XywxXw3jpwVHVG+hwctY48GfbxpR5n4Rr51vhBepz0drUiTJgs4LuLGA8wAOEImaasmu2JqESmvuYUJOCqJtPvZKxpWNG/nWUOysCJYXKGeGNQZV2DDOhBUqUMySD76bf3b+H169d/hzPqSyLwU/Hm4kXN3PpJWbK12heKuCqsm5c1N7p0lQgDfvBxwOFPxZuX+0rW76tFPUON58HviEurBE1N18zI7XhM9CIQRXp/cyi+DJdgvOOfWNuZtZrQbFHXT6vg5dNd9bITI5VAJh+MjeuoryNN6Kkv1jhqUJk+iYvhY4wq6/XA2mrpg6WFriAZRijj2XV9TvPi/cnLAt5RhZ3mEF0+97v6/MQHoZX5MpWrHU7t7A8SWwp2QfBuJejYAAZlgp0NCc2hI40hWfv04fj854/HZ9APHSti2KrSXpK7VHRV/lAjk0V/2ItsesubZzLJFh0Zng6WdY/njDmmNUNA763ylh8FbGboaV8vO0forZkKK7dHxNjfVyGj7UV0Z73FxivxtvaeQzAMjkbRBvt78pLc/nbUq7B1L2PY6iUK+B11F3T95l0av8L24/ewr+H6WrVHDmJcYXUA3743N2cXtmk1Mcl75q/Rg++EIO+rTusFLAc+br2YlNy73BV6iOuMAx63TIuOFWq9mD5iweWgexZ9pjz+Vt1+M4tc2fvOemRw4VUNP0bB/uUWYnq4EoxQqOEymOAyxFWKtPQxuaRrDIjmMEONRlC+DB2yo7xPN7yFp+RWEoGx6wR6lLbTFgOp1LXh3j749WB3FuyDFyBbl2/mhuORPfaQlpUAbMPb3qkQeteOvdhTWt218r9Jqx152zkR3V2jZ4gT/X/n1xc3Qcq31nh6KJ2aeNQUhhKPmgogiUdNTEHiUROPmsBLPGqKjolHTS6beNTEoyYeNfGoiUdNPGriUROPmnjUxKMmHjXxqIlHTTxq4lH/7DzqW9v/XXckxtpWhywvAPqHtyFP/MDc/tLXmbJJdvrx7DyLf8XNJll5+aocfN2Xa1le+XXzv7c35Sqx/Pm6JcEkzxi582/DhT758ejVzV/+AwAA//8=
// DO NOT EDIT
'use strict';

const querystring = require('querystring');
/**
 Captures and processes an authorization, by ID. The original payment call must specify an intent of `authorize`.
 **/

class AuthorizationCaptureRequest {

  constructor(authorizationId) {
    this.path = '/v1/payments/authorization/{authorization_id}/capture?';
    this.path = this.path.replace("{authorization_id}", querystring.escape(authorizationId));
    this.verb = 'POST';
    this.body = null;
    this.headers = {
        'Content-Type': 'application/json'
        };
  }

  requestBody(capture) {
    this.body = capture;
    return this;
  }
}

module.exports = {AuthorizationCaptureRequest: AuthorizationCaptureRequest};
