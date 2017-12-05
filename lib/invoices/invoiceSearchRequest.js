// This class was generated on Tue, 05 Dec 2017 14:33:39 PST by version 0.1 of Braintree SDK Generator
// invoiceSearchRequest.js
// @version 0.1
// @type request
// @data H4sIAAAAAAAC/+xZT3PbthO9/z7FDn6XRCNLSdymU93c2Jm409hu7PYSe6QVsRSRggALLJ0wmXz3DgiSkk3JSWqPelBOmoF2F2/f4s/D8pM4wZzERChzbVVCI0/okkwMxSH5xKmClTViIn5Tnj00Rh44Q4YcOckgOkDiFJNTOIJjA5wR/Hp+egKO/i7JM8ytrIagTKJLSYAwi14zsPN3lHCM5wtKVKrq8NSLK4bi95JcdYYOc2JyXkzeXg3FK0JJ7vboS+vy22NnyNntsTcR4EVVkJh8EvFXdCT8iU7hXFNDUkijR81xJKUFXHQzBMgHzmEVoz4Js6E8NboSkxS1pzi9ciS7gTNnC3KsKODr8Myt1YSmDyjMqK5JrgElVYJMHt5nxBk5YAtaeYacXJKh4b3Wd1lVFSvnyBfWeBrBcQozdiXNht1gHcSDNbq6I1R0rXPa4FuaDU6m1Lrvg1ov7e7Ja5jh83BZbHbKLPrcUo5K94i9yAiUUaxQgyYOdQab1rzVDoBSOvJbA2nkNHGEAd1UItNawGQktFYQrCC1rsbcbns4bEZzZFAeBlVVVYO9wevXg72BlAMYfBwMAT1ISpWpiwZvjw2TM8S18/hC5QQv6whXjzLmYjIes7XajxRxOrJuMc4412OXJvv7+z//31MS8Oz9OHr+eItsyZLuJkqWtOscNRl/gafd5qjAKifDd3PUGO0CV0npHJmk6rOl7XtyU7aMeoq5LQ33+PoFPbVaINAUjvtUGTRJOGevUZfhWtLIJCFVpKWHR3PUaBIaLkkuaQjEyejxg128mxbASrI3E9lvLgVoLSCxQfEsiziv4Pj8FH549vSnb6pAuIf/1WKt2esBjYWAsgjC4ASkWigGTAP0sEYlJSpH7cFTEDQcanJjIbY5dKsai8LZwqmwpm8k/xBZXn1FnqbM5+Q2XNhRokWTB1743by38BS4WH8w2DT1xB1xjW505EvNfovgpl59XI8w/Avh3+2A3FRRR4kqVDhk56VXhryfmvDPN2iyLgS0ISCE2HoCqXKe74G+9v9voGu8F/Lgvk3gntHxV2ji2u67Ku4Yu1MXR7J2XBlHnr6ojRuudp2nL+rjyNMOKeQ7+OLS3ylcoskILmx7E8+rZnDY9M0q4Ez5RiujBzSAAfsoZA/0AfNC0xBml818l2ICby/Fm6OXf5wcHh1eiqvZA+e7sWsVnwJJEKBT1wb8ig5WRlC7Qu0aFCeh67ettvWuKYvi+7vm+7vmfu+aq8/BLK7cW13ott/ZT31tez5Ir7Yju9JTfYGma7wvd1DX8222kpHw6uDi6PTgHLQyf/k6fYPXalHLo4drZTcT93NayfZmbgfNQRby62Cjv/kkuQXw+T03feBgKpcwpnEPr+ltBLLWHt19OmeGPvCs5npWOLpWtvSzFZJXDrJSM3h66KyUYVqsew2uHMhrc4lrJr4lb5Rh5TvQhm829z6JwwZ5YQ2Tab7SCCwKHa4GZc34nbfhgnnFXLwmzqwUE3F2en4h4uceMRHj66fjiFeZxbj7snP0oaCESZ7Xl+ELK0lMnj158vl//wAAAP//
// DO NOT EDIT
'use strict';

const querystring = require('querystring');
/**
 Lists invoices that match search criteria. In the JSON request body, include a `search` object that specifies the search criteria.
 **/

class InvoiceSearchRequest {

  constructor() {
    this.path = '/v1/invoicing/search?';
    this.verb = 'POST';
    this.body = null;
    this.headers = {
        'Content-Type': 'application/json'
        };
  }

  requestBody(body) {
    this.body = body;
    return this;
  }
}

module.exports = {InvoiceSearchRequest: InvoiceSearchRequest};
