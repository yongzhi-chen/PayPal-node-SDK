// This class was generated on Tue, 19 Sep 2017 17:11:32 UTC by version 0.1 of Braintree SDK Generator
// paymentListRequestTest.js
// DO NOT EDIT
// @type request
// @json {"Name":"payment.list","Description":"Lists payments that were created by the [create payment](#payment_create) call and that are in any state. The list shows the payments that are made to the merchant who makes the call. To filter the payments that appear in the response, you can specify one or more optional query and pagination parameters. See [Filtering and pagination](/docs/api/overview/#filtering-and-pagination).","QueryParameters":[{"Type":"integer","VariableName":"count","Description":"The number of items to list in the response.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"end_time","Description":"The end date and time for the range to show in the response, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). For example, `start_time=2016-03-06T11:00:00Z`.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"payee_id","Description":"Filters the response by a PayPal-assigned merchant ID that identifies the payee.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"sort_by","Description":"Sorts the response by the create time or update time.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"sort_order","Description":"Sorts the response in ascending or descending order.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"start_id","Description":"The ID of the starting resource in the response. When results are paged, you can use the `next_id` value as the `start_id` to continue with the next set of results.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"integer","VariableName":"start_index","Description":"The start index of the payments to list. Typically, you use the `start_index` to jump to a specific position in the resource history based on its cart. For example, to start at the second item in a list of results, specify `?start_index=2`.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"start_time","Description":"The start date and time for the  range to show in the response, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). For example, `start_time=2016-03-06T11:00:00Z`.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null}],"HeaderParameters":[],"FormParameters":[],"PathParameters":[],"RequestType":null,"ResponseType":{"Type":"Payment History ","VariableName":"","Description":"The list of payments that the seller made.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":[{"Type":"integer","VariableName":"count","Description":"The number of items returned in each range of results. Note that the last results range might have fewer items than the requested number of items. The maximum value is `20`.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"next_id","Description":"The ID of the next element. Use to get the next range of results.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"Payment","VariableName":"payments","Description":"An arrary of payments.","ArrayType":6,"ReadOnly":false,"Required":false,"Properties":null}]},"ContentType":"application/json","HttpMethod":"GET","Path":"/v1/payments/payment","ExpectedStatusCode":200,"FileSuffix":"Test","UseFakeInstance":true}

'use strict';

const chai = require('chai');
const client = require('../../test_harness').client();
const PaymentListRequest = require('../../../lib/lib').PaymentListRequest;

describe('PaymentListRequest', function () {
  it('works as expected', function () {
    let request = new PaymentListRequest();
    request.count(2);

    return client.execute(request).then((r) => {
      chai.assert.equal(r.statusCode, 200);
      chai.assert.isNotNull(r.result);
    });
  });
});
