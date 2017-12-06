// This class was generated on Wed, 06 Dec 2017 11:34:53 PST by version 0.1 of Braintree SDK Generator
// captureGetRequest.js
// @version 0.1
// @type request
// @data H4sIAAAAAAAC/+xZT3Pcug2/91Ng9C6JR5ac5750ujdPHDc+JHFjTy6uZ4MloRUTilRJyOttxt+9Q1Ha/xvbjbPTN7MnjUiABPADQBD8nnzAipJBIrDmxlE2Jk7S5JS8cKpmZU0ySC5LO/EgiVFpD4V1gNDRS6hxWpHhFEZTOD/NkjT5Z0NueoEOK2JyPhlc36TJO0JJbnX0zLpqdewCuVwa+55cTesgo2enzDhJk8/oFI40Lcs+VHJN9KuS4PwUbAFc0prQrS6TUokS2IIv7aTXMuhx4hxO49ZHafKJUH40epoMCtSewsC/G+VIJgN2DaXJhbM1OVbkk4FptL6/iTTkOS4SBsOQr63xFMdmunWirSu3ptJJrwawQ+NRhPEnydsNLAo8NzJWtjG8LsdsfN3AvTUjSQoTxSWMHOG3w6b2zyfaVvwb58iI6Ubhrrl0RIeiRIeCycH55cfDv/7+6m/Qs4Gwkm5e5NIKnyvDNHYYFsilciQ4d+Q574kPA7HPX2ZwgdML1CAteTCWwTd1bR0Dat0vrehZHCldAWfYOem6JeYT64ZAKVX4DTJ3oYwj23AbGcsQ/nrIxqrg4cRhvVHUMAthFgqiDN7jnaqaCjSZMZegPLw6ghmgPu1CWBmhG0l+8K/m6OhYNLr9UvzTKv5d0i0ZkGqs2MOIChviqCSQJFSFGmqrDGeRJ++Zlpe4eiL5xPb7YREc8JHb5b0CPwnGigttQ6REI7Uy42FBtBGUnmCPSRA5BjvJ9ggJ3F066AOpIi6tBGv0NNsNgMr4xqERm9Gbze7hW4IvAPRjDHcEny9VXceZdfT6yT14O8uHvcmHUnmxtfRZBAZ6yn14/f9lR9+M2DLqzSh2k135M5NaMVU+g/N4e3CxmJ+hBlqZjiYFLpWHOso1DYAfHLhO7IODfcjuBGPGu43wMt7tEXgGBG4eg8HWIFuKsGD4Mclw7e6uH0Qwms5+XAZn1oGjojHSp+CoduTJsG9JulW4RF7g76j7Ra1TY2Vi1gkL7j3gpzsaj3AA4QiZhqyqzYWoRCZAIyFQwKQks9iaASvau7NMQRk4N0zOEK8wFdZVyIAeJBXKkAy015/O3sDx8fHf4ZLalgj8kb2+eVEy136Q52yt9pkiLjLrxnnJlc5dIQLDbz4yHP6RvX65q2L9ka2q5+zxPPoecWuVoKFpqhG5LZeJlgQiSRtvDsW37hCMZ/wzSzuyVhOaDeL6YRGifDjvoC0LfG6kEsjkg7NxGeV1pAk9tc0aRxUq0xZxMX30WQUbLq1T/2m7QVBaLX3wtDAVKAOHMp5d09Y0L87OX2ZwSgU2mkN2+dJq9eWZDaGV+TaUcw2HdvSVxIaGXSBc7wSdGMAgTPCzrqA5dKQxFGvX706u3n48uYSWte+IYa1ye0vuVtEk/61EJov+sCVZjZbXv8gla3RkeNh51gOR09eY1vSt3eCVC3EUsBmhp13d7Byht2YorNycEeN824WMvhfRHbUeG4/ERek9h2QYAo2iD7bn5C253WnUirBRlz5ttRQZfEbdBFl/eJbGv6B+/O/06o6v+XgGizvMDfDjc3N1dWGrWhOTfGD9Ej34Rgjyvmi0nsKM8Wn7xaLkwe0m6CHu0zM8bZsaHSvUejp8woYzpgc2/UV1/ELffrWKnPv71n5kCOF5Dz9mwfg4pTWEI8EIhRpugwvOUlyhSEsfi0u6w4BoCiPUaASls9QhG0rbcsNbeM63lf0DxjYLtChtfrboHpWaOpzbBx8OtlfBPkQBsnXpam3Ym+ypRpp1ArAOd3unQupdMnu2o7K6qeX/UlY78rZxIoa7Rs8QF/pz19c392nyxhomw/3DWF3rUOUFQL96G+rEd8z1+7bPlAySf7y9SuLTcjJI8ttXeRfqPu/yYf59/op8n6TJ27uaBJO8ZOTGvwln9+D3o6P7v/wXAAD//w==
// DO NOT EDIT
'use strict';

const querystring = require('querystring');
/**
 Shows details for a captured payment, by ID.
 **/

class CaptureGetRequest {

  constructor(captureId) {
    this.path = '/v1/payments/capture/{capture_id}?';
    this.path = this.path.replace("{capture_id}", querystring.escape(captureId));
    this.verb = 'GET';
    this.body = null;
    this.headers = {
        'Content-Type': 'application/json'
        };
  }
}

module.exports = {CaptureGetRequest: CaptureGetRequest};
