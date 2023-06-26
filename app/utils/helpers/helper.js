const constants = require('../constants');
const genericErrors = require('../error/generic');
const rateLimit = require('express-rate-limit');
const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');
// const { faker } = require('@faker-js/faker');
const crypto = require('crypto');
// const config = require('../../../config/env');

// const { PAYSTACK_HASH, PAYSTACK_SECRET_KEY } = config;
const { serverError } = genericErrors;
const { SUCCESS_RESPONSE, SUCCESS, FAIL } = constants;

/**
 *  Contains Helper Methods and Functions for the App
 *@class Helper
 */

class Helper {
	/**
	 * Generates a JSON response for success scenarios.
	 * @static
	 * @param {Response} res - Response object.
	 * @param {object} options - An object containing response properties.
	 * @param {object} options.data - The payload.
	 * @param {string} options.message -  HTTP Status code.
	 * @param {number} options.code -  HTTP Status code.
	 * @memberof Helper
	 * @returns {JSON} - A JSON success response.
	 */
	static successResponse(
		res,
		{ data, message = SUCCESS_RESPONSE, code = 200 },
	) {
		return res.status(code).json({
			status: SUCCESS,
			message,
			data,
		});
	}

	/**
	 * Generates a JSON response for failure scenarios.
	 * @static
	 * @param {Request} req - Request object.
	 * @param {Response} res - Response object.
	 * @param {object} error - The error object.
	 * @param {number} error.status -  HTTP Status code, default is 500.
	 * @param {string} error.message -  Error message.
	 * @param {object|array} error.errors -  A collection of  error message.
	 * @memberof Helper
	 * @returns {JSON} - A JSON server response.
	 */

	static errorResponse(req, res, error) {
		const aggregateError = { ...error };
		return res.status(aggregateError.status).json({
			status: FAIL,
			message: aggregateError.message,
			errors: aggregateError.errors,
		});
	}
}

module.exports = Helper;
