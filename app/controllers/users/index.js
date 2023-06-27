const { UserModel } = require('../../model');
const { Helper, constants, ApiError } = require('../../utils');
const { successResponse, errorResponse } = Helper;
const { SUCCESS_RESPONSE } = constants;

/**
 * A collection of controller methods for users
 *@class UserController
 *
 */

class UserController {
	/**
	 *creates user
	 * @static
	 * @param {Request} req - The request from the endpoint
	 * @param {Request} res - The response returned.
	 * @param {Next} next -calls the next handler
	 * @memberof UserController
	 * @param {JSON } - A JSON response object of the newly created user
	 */

	static async createUser(req, res, next) {
		try {
			let newUser = await new UserModel({
				...req.body,
			});

			newUser = await newUser.save();

			logger.info(newUser);

			successResponse(res, {
				data: newUser,
				code: 201,
			});
		} catch (e) {
			logger.warn(e.message);
			errorResponse(
				req,
				res,
				new ApiError({ status: 401, message: e.message }),
			);
		}
	}
}

module.exports = UserController;
