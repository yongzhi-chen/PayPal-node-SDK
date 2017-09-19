'use strict';

class AccessToken {

  constructor(options) {
    this._accessToken = options.access_token;
    this._tokenType = options.token_type;
    this._expiresIn = options.expires_in * 1000;
    this._dateCreated = Date.now();
  }

  isExpired() {
    return Date.now() > this._dateCreated + this._expiresIn;
  }

  authorizationString() {
    return `${this._tokenType} ${this._accessToken}`;
  }
}

module.exports.AccessToken = AccessToken;
