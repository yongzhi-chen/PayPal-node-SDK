'use strict';

const TokenStatus = require('./token_status');
const EventEmitter = require('events').EventEmitter;

/**
 * Stores token, token status and a request queue for every client
 */
class PaypalClient {
  constructor() {
    this._token = null;
    this._status = TokenStatus.absent;

    // A queue is required because not all the requests made to the api are safe or idempotent thus ordering matters
    // Usually users won't combine calls that modify state but not doing so only opens the door for corner cases
    // Is just easier to retry requests in the same order they were executed to have reliable results
    this._requests = [];
    this._emitter = new EventEmitter();
    this._emitter.setMaxListeners(0);
  }

  /**
   * Gets the current token for the client
   * @return {AccessToken|null} - The current token or null if there is none
   */
  getToken() {
    return this._token;
  }

  /**
   * Sets the token for the current client also setting its status to absent or valid if the token exist or not
   * @param {AccessToken|null} token - The current token for the client or null to remove it
   */
  setToken(token) {
    this._token = token;
    this._status = !this._token ? TokenStatus.absent : TokenStatus.valid;
  }

  /**
   * Gets the current token status for the client
   * @return {TokenStatus} - The current status
   */
  getStatus() {
    return this._status;
  }

  /**
   * Set the token status for the current client
   * @param {TokenStatus} status - The new status
   */
  setStatus(status) {
    this._status = status;
  }

  /**
   * Returns true if the token for the current client needs to be fetched or refreshed
   * @return {boolean} - True if the token is missing or is expired otherwise false
   * */
  isTokenExpired() {
    return (this._status === TokenStatus.absent || !this._token || this._token.isExpired());
  }

  /**
   * Gets the refresh token for the current client if exist
   * @return {string|null} - The refresh token or null if there is none
   * */
  getRefreshToken() {
    return this._token ? this._token._refreshToken : null;
  }

  /**
   * Add a request to the queue and wait for the notify method to signal error or completion
   * @param request - The request to be queued
   * @return {Promise} - A promise that will resolve or rejects when the notify method is called
   * */
  wait(request) {
    this._requests.push(request);
    return new Promise((resolve, reject) => {
      const completeHandler = (req) => {
        if (request === req) {
          this._emitter.removeListener('complete', completeHandler);
          resolve(request);
        }
      };
      const failHandler = (err) => {
        this._emitter.removeListener('fail', failHandler);
        reject(err);
      };
      this._emitter.on('complete', completeHandler);
      this._emitter.on('fail', failHandler);
    });
  }

  /**
   * Flush the request queue resolving every call in the order they were added or rejects all calls if an error is provided
   * @param [err] - An optional error that rejects all requests instead of resolving them
   */
  notify(err) {
    if (err) {
      this._emitter.emit('fail', err);
    } else {
      for (let i = 0; i < this._requests.length; i++) {
        this._emitter.emit('complete', this._requests[i]);
      }
    }
    this._requests = [];
    this._emitter.removeAllListeners();
  }
}

module.exports = exports = PaypalClient;