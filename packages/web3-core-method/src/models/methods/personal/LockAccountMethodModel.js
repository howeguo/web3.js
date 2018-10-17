/*
 This file is part of web3.js.

 web3.js is free software: you can redistribute it and/or modify
 it under the terms of the GNU Lesser General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.

 web3.js is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Lesser General Public License for more details.

 You should have received a copy of the GNU Lesser General Public License
 along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
 */
/**
 * @file LockAccountMethodModel.js
 * @author Samuel Furter <samuel@ethereum.org>
 * @date 2018
 */

"use strict";

var AbstractMethodModel = require('../../../../lib/models/AbstractMethodModel');

/**
 * @param {Object} utils
 * @param {Object} formatters
 *
 * @constructor
 */
function LockAccountMethodModel(utils, formatters) {
    AbstractMethodModel.call(this, 'personal_lockAccount', 1, utils, formatters);
}

LockAccountMethodModel.prototype = Object.create(AbstractMethodModel.prototype);
LockAccountMethodModel.prototype.constructor = LockAccountMethodModel;

/**
 * This method will be executed before the RPC request.
 *
 * @method beforeExecution
 *
 * @param {AbstractWeb3Module} moduleInstance - The package where the method is called from for example Eth.
 */
LockAccountMethodModel.prototype.beforeExecution = function (moduleInstance) {
    this.parameters[0] = this.formatters.inputAddressFormatter(this.parameters[0]);
};

module.exports = LockAccountMethodModel;