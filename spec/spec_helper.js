'use strict';

let chai = require('chai');
let dirtyChai = require('dirty-chai');

chai.use(dirtyChai);

chai.config.includeStack = true;

global.assert = chai.assert;
global.expect = chai.expect;
