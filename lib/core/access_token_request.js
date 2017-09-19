'use strict';

class AccessTokenRequest {
  constructor(environment, refreshToken) {
    let path = '/v1/oauth2/token'; 
    let body = 'grant_type=client_credentials';

    if (refreshToken) {
      path = '/v1/identity/openidconnect/tokenservice';
      body += `refresh_token=${refreshToken}`;
    }

    this.path = path;
    this.body = body;
    this.verb = 'POST';
    this.headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: environment.authorizationString()
    };
  }
}

module.exports.AccessTokenRequest = AccessTokenRequest;
