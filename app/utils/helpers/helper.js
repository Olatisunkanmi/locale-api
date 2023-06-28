const constants = require('../constants');
const genericErrors = require('../error/generic');
const rateLimit = require('express-rate-limit');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');
const crypto = require('crypto');
// const config = require('../../../config/env');

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

	/**
	 * it validates a schema and returns a boolean
	 * @static
	 * @param { Joi } schema - The validation Schema
	 * @param { Object } object - The data to be validated { req payload from client}
	 * @memberof Helper
	 * @returns { boolean } -True if validation is successfull || Null if otherwise
	 */
	static validateInput(schema, object) {
		return schema.validateAsync(object);
	}

	/**
	 * Generates log for module errors.
	 * @static
	 * @param {object} error - The module error object.
	 * @memberof Helpers
	 * @returns { Null } -  It returns null.
	 */
	static moduleErrLogMessager(error) {
		return logger.error(
			`${error.status} - ${error.name} - ${error.message}`,
		);
	}

	/**
	 * Checks  if an array is empty
	 * @static
	 * @param { Array } arr - Array to be checked
	 * @memberof Helper
	 * @returns { Json || Null } - returns JSON || Null if otherwise
	 */
	static checkEmptyArray(arr) {
		if (!arr) {
			return null;
		}

		if (arr.length === 0) {
			return null;
		}
		if (arr.length === 1) {
			return arr[0];
		}
		return arr;
	}
	/**
	 * Generates a unique ID
	 * @static
	 * @private
	 * @returns { string } ID - generated ID
	 */
	static generateID() {
		return uuidv4();
	}
	/**
	 * hash password
	 * @static
	 * @param { string } password - The password to be hashed
	 * @memberof Helper
	 * @returns { string } - A string contaning the hash and salt of a password
	 */
	static hashPassword(password) {
		const salt = bcrypt.genSaltSync(10);
		return bcrypt.hashSync(password, salt);
	}

	/**
	 * This checks if a plain text matches a certain hash value by generating
	 * a new hash with the salt used to create that hash.
	 * @static
	 * @param {string} plainpassword - plain text to be used in the comparison.
	 * @param {string} hashedpassword - hashed value created with the salt.
	 * @memberof Helper
	 * @returns { Boolean } - True if the both passwords match and false if otherwise
	 */
	static comparePassword(plainpassword, hashedpassword) {
		return bcrypt.compareSync(plainpassword, hashedpassword);
	}

	/**
	 * Generates unique api key
	 * @static
	 * @returns
	 */
	static generateApiKey() {
		return crypto.randomBytes(16).toString('hex');
	}
	/**
	 * generates a signed json web token
	 * @static
	 * @param { number | string | Buffer | Object } payload - Payload to sign
	 * @param {number | string} expiresIn - expressed in seconds or a string describing a time span. Default is 2d
	 * @memberof Helper
	 * @returns { string }- A signed JWT tokwn
	 */
	static generateToken(payload) {
		const { config } = require('../../../config');
		return jwt.sign({ payload }, config.SECRET_KEY, {
			expiresIn: config.SECRET_EXPIRES,
		});
	}

	/**
	 * verify a signed web token
	 * @static
	 * @param {string} token - signed token
	 * @param {string} secret -secret key
	 * @memberof Helper
	 * @returns { string | Buffer | Object }- Decoded JWT payload if
	 * token is valid or an error message if otherwise.
	 */
	static verifyToken(token) {
		const { config } = require('../../../config');
		return jwt.verify(token, config.SECRET_KEY);
	}
	/**
	 * Generates a token and adds it to the user object
	 * @static
	 * @param { Object } user - The user object
	 * @memberof Helper
	 * @returns { Object } - The user object with an attached token
	 */
	static addTokenToData(user) {
		const { id, first_name, last_name, email } = user;

		const token = Helper.generateToken({
			id,
			first_name,
			last_name,
			email,
		});

		return {
			id,
			first_name,
			last_name,
			email,
			token,
		};
	}
}

module.exports = Helper;
