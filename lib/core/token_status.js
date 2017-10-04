'use strict';

/**
 * The token status for every client
 * @enum TokenStatus
 * @type {{absent: number, valid: number, refreshing: number}}
 */
const TokenStatus = {
  absent: 0,
  valid: 1,
  refreshing: 2
};

module.exports = exports = TokenStatus;