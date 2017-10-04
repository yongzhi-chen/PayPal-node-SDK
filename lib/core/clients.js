const PaypalClient = require('./paypal_client');

/**
 * An in-memory dictionary of every used client to cache tokens and handle token status
 * */
class Clients {
  constructor() {
    this._clients = {};
  }

  /**
   * Returns a single unique client for each different environment
   * @param {PayPalEnvironment} env - The environment that request the client
   * @return {PaypalClient} - The client for the current environment
   */
  fromEnvironment(env) {
    const clientId = env.clientId;
    const base = env.baseUrl;
    // The dictionary has two levels because technically is possible to create two environments for the same client
    // and they will hold different tokens. This is a corner case, of course, and is unlikely to happen in the majority of the applications
    // but is better to be safe than sorry and avoid unexpected results in user code
    if (!this._clients[clientId]) {
      this._clients[clientId] = {};
      this._clients[clientId][base] = new PaypalClient();
    }
    if (this._clients[clientId] && !this._clients[clientId][base]) {
      this._clients[clientId][base] = new PaypalClient();
    }
    return this._clients[clientId][base];
  }
}


module.exports = exports = new Clients();