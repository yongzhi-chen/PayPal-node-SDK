# PayPal SDK 2.0.0-beta

This is a preview of how PayPal SDKs will look in the next major version. We've simplified the interface to only provide HTTPRequest that can easily be called via our HttpClient.
This repo currently only contains functionality for working with [Payments](https://developer.paypal.com/docs/api/payments/) and [Invoicing](https://developer.paypal.com/docs/api/invoicing/).
to serve as an example and early beta of the API going forward.

### Creating a Payment

```node
const paypal = require('paypal-rest-sdk');

let env = new paypal.SandboxEnvironment('AdV4d6nLHabWLyemrw4BKdO9LjcnioNIOgoz7vD611ObbDUL0kJQfzrdhXEBwnH8QmV-7XZjvjRWn0kg', 'EPKoPC_haZMTq5uM9WXuzoxUVdgzVqHyD5avCyVC1NCIUJeVaNNUZMnzduYIqrdw-carG9LBAizFGMyK');
let client = new paypal.PayPalHttpClient(env);

let invoiceBody = {
  "merchant_info": {
    "email": "team-dx-clients-facilitator@getbraintree.com",
    "first_name": "Dennis",
    "last_name": "Doctor",
    "business_name": "Medical Professionals, LLC",
    "phone": {
      "country_code": "001",
      "national_number": "5032141716"
    },
    "address": {
      "line1": "1234 Main St.",
      "city": "Portland",
      "state": "OR",
      "postal_code": "97217",
      "country_code": "US"
    }
  },
  "billing_info": [{
    "email": "example@example.com"
  }],
  "items": [{
    "name": "Sutures",
    "quantity": 100.0,
    "unit_price": {
      "currency": "USD",
      "value": 5
    }
  }],
  "note": "Medical Invoice 16 Jul, 2013 PST",
  "payment_term": {
    "term_type": "NET_45"
  },
  "shipping_info": {
    "first_name": "Sally",
    "last_name": "Patient",
    "business_name": "Not applicable",
    "phone": {
      "country_code": "001",
      "national_number": "5039871234"
    },
    "address": {
      "line1": "1234 Broad St.",
      "city": "Portland",
      "state": "OR",
      "postal_code": "97216",
      "country_code": "US"
    }
  },
  "tax_inclusive": false,
  "total_amount": {
    "currency": "USD",
    "value": "500.00"
  }
};


let request = new paypal.InvoiceCreateRequest();
request.requestBody(invoiceBody);

client.execute(request).then((response) => {
  console.log(response.statusCode);
  console.log(response.result);
}).catch((error) => {
  console.error(error.statusCode);
  console.error(error.message);
});
```

If you're migrating from v1, check out our [Migration Guide](./docs/Migrating.md).

## Building

To try this out, update the version of `paypal-rest-sdk` in your `package.json` to `2.0.0-beta.0`.

Please feel free to create an issue in this repo with any feedback, questions, or concerns you have.

## Running tests

To run integration tests using your client id and secret, clone this repository and run the following command:
```sh
$ npm install
$ npm test
```

*NOTE*: This API is still in beta, is subject to change, and should not be used in production.

## Feedback

If you have any suggestions/remarks/feedback related to SDK 2.0.0, feel free to create an issue.

## License
PayPal-Node-SDK is open source. See the [LICENSE](./LICENSE) file for more info.

## Contributions
Pull requests and new issues are welcome. See [CONTRIBUTING.md](CONTRIBUTING.md) for details.
