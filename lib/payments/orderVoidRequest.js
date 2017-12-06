// This class was generated on Wed, 06 Dec 2017 11:34:56 PST by version 0.1 of Braintree SDK Generator
// orderVoidRequest.js
// @version 0.1
// @type request
// @data H4sIAAAAAAAC/+xa3XPbuBF/71+xw3tJMrLoXNrrVG9uLDeaiT9qK5lJXQ+1IpYiLiDAAkspaib/+w0IUpYl+uviaPLgJ5vAAvhhv3eFr9EJFhQNImMF2f7cSBH1okNyqZUlS6OjQfTRSOF6YCykqFNSrgeooV7Qg+kSRod9+GQqP6sNg99jRQAyA84JSlwWpBlydIDKEoolTIk0lGhZolJLv39W+X9SLLmyJPpRL/p3RXZ5hhYLYrIuGlxe9aJ3hILs5uiRscXm2BlyfmPsazRelv6+jq3Us6gXfUQrcaponQ9JBxfGOcHoEEy4T7gcm/q2HuiBtbgMe+/3onNCcarVMhpkqBz5gf9V0pKIBmwr6kVn1pRkWZKLBrpS6ttVoCHHYRM/6IdcabSjMLYCX5++jX0L80ErBbaoHaZ++FFgm4F1tNcsxMJUmrdhrMa3GdiqQSDpwUJyDlNL+HmvKt138vF+4aaVtaTTZSe2S84t0V6ao8WUycLo4nTvr7++/ju0yyA1gq5exMKkLpaaaWbRbxALaSnl2JLjuCXe88QuftmHM1yeoQJhyIE3EFeVpbEMqFS7tST3FErU25BNIohRKrfNieuJbUagENJ/esyBDHBqKr5hyOGAp1Om20Q2kxknC4tlJ1Q/C34WMqI+HOMXWVQFKNIzzkE6eL0PK4G6HixymeYgdaoqQW7w32p//01aqfovhS8lw9cFzUmDkDPJDqaUGUs1AwSlskAFpZGa+2FN3C66ucX4keQL056HmVfABx4Xtxf4TmFsqNBtEslRCyX1LMmIOoXSEjzLxEMOxk4CMhNWN+6gNaSCODcCjFbL/m4EKLWrrI/kndJbzT6L74b4vIDuluGOxOdyWZZhZlt67eSz8HbmD1uWJ0K69NbMZ10w0FI+m9fP5x1dNWXDqLql2Ew26c8KtWQqXB9GoTiwIZFfSQ2U1A1NDziXDsqAa+kF/uqVbWC/evVssjuRMeOXTvEyfnmWwBNI4OohMrjVyG5YmGf8jIQvtZvygwimy9WH7cORsWApq7RwPbBUWnKk2dUkzS6cI6+tb6jbTY2VM6mD1/EbPmvAd3czHqAAqSVkSlgW3YmoQCZALcBTwCIn3ThXZyqbEizQQdhD9EBquBxpJquJN1ZmxhbIVy9y5tIN4piNUa4vibO+sbM450LFNkvfvHnzj18c1T2Svb/1f3v5xPEmK7Lby/Gbkx29iSOLlYBj1DijOjAeSeVl++Lo+Ohl25JIFTon0zgrsvX2xN6skoLio+Oji6oo0C7jl21h/+Prd7F2l66bZeEea2Q7ivPh4Ns6fQ2s0eHTtmXuAcOe6g44fn43gDQWdyLx8/1dhYqHdmOfrsm5wSUl9edkTUUTM/2d0o7Wpyd0XW1Y9GA83CY33LOkvOeCy3cH4+HpwQXUS1tLxlLGZk52LmkR/5Ijk0G3V5Ns+qXffpB9lGhJc9Ik4vcIoE3XjW5iY53lrgnEB9EpOtpVkdwASgojuvV4Hduq2DCCdoWPtPA1oyV0HZ7x8nB4dj58ezAeHl7BuI56nq5uQK+KjmaPG1dxjEx9OJ06o8j/98ERTMLqxK+egNSOCXcmCGs4BNWElJzJqVSSuxvwiuakvEY5UoosXC/14Z2yjNLriuvHGfvjbnK7z/4stfgzt4Fz4srqtuW0Snwm3QAmN4rJyfD96F+jf74fTsBYmJwdnI9HB+/ff0pW433Y6GmtHdAaTV10T+r9SlyWqCZ9ONXez8LUcN5YvSOYo6rIQYoapl5JA/A7E+Lw5VUxfI/Gw+Pk5HScnA/fDkcfh4crqE1aek3ah4ualw7QUstQEoAz9EoNqUJZuJqpdbFd/9piKSU5J3F30ryJ6sPJwYfxu9Pz0X+Gh8nZwafj4cn4SYBVGivOjZX/J9E6HvdTFMVrTqJTn9ddUF1PhYA4JQeLfLmpxsETeRVq3VRdpc3J+iAAwzlprlCpZdsRaX+lhYVUypdxClNq9PKGs5xc0/5JXd4VPzOypFO6/9fksrJpjo6g0rIpVqUDdM6kss4S6t9Jaz6FzGPDwze3lxomKVpOfKTd1TVrOXfebysra6PTR+81QLpH+YlGCTps7/qstZIQphWDNtBaW10Jubh5W+BgQZagQEErI10lko/zFNfmfCe0HF0QUv3q4XpRH05M++Khxv8UmNoXFPciQgZF6HziRisUUkuu1e6Rh5qi9Bp596nSQUsIHsAD7h60f/M46ZJMalRJs8HWqeCIgc3WwvH5hy4PfmKgMJZuVZgmxm1A9Bb5ePnMjRT38MmzI5D9GGg7Di5VKb672aO8ooaNfuKOz9W3XvTWaCbN7VuMslQyDS9Ffg/Z/jvm8riOTNEgOju9GEfhrVI0iOL567jNC+JagC7+2r5K+hYLs9c80hp+Kess44KRK/fWh+3Br/v73/7yBwAAAP//
// DO NOT EDIT
'use strict';

const querystring = require('querystring');
/**
 Voids, or cancels, an order, by ID. You cannot void an order if the payment has already been partially or fully captured.
 **/

class OrderVoidRequest {

  constructor(orderId) {
    this.path = '/v1/payments/orders/{order_id}/do-void?';
    this.path = this.path.replace("{order_id}", querystring.escape(orderId));
    this.verb = 'POST';
    this.body = null;
    this.headers = {
        'Content-Type': 'application/json'
        };
  }
}

module.exports = {OrderVoidRequest: OrderVoidRequest};
