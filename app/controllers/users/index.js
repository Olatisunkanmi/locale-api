const { UserModel, ApiKeyModel } = require('../../model');
const { Helper, constants, ApiError } = require('../../utils');
const { successResponse, errorResponse } = Helper;
const { SUCCESS_RESPONSE, ERROR_CREATING_USER } = constants;

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
			const user = await new UserModel({
				...req.body,
			});

			let apiKey = await new ApiKeyModel({
				apiKey: user.api_key,
				user_id: user.id,
			});

			const data = await user.save();
			await apiKey.save();

			successResponse(res, {
				message:
					'Please keep your api key safe, you will not be able to retrieve it again.',
				data: data,
				code: 201,
			});
		} catch (e) {
			logger.warn(e.message);
			errorResponse(
				req,
				res,
				new ApiError({ status: 401, message: ERROR_CREATING_USER }),
			);
		}
	}
}

module.exports = UserController;
