const db = require('../../db');
const { users } = require('../../db/queries');
const { Helper } = require('../../utils');

const { fetchUserByEmail, fetchUserById, fetchUsers } = users;
const { errorResponse } = Helper;

class UserService {
	/**
	 * Find all users in the database
	 */
	static async fetchUsers() {
		return await new Promise((resolve, reject) => {
			db.execute(fetchUsers, (err, results, fields) => {
				if (err) {
					reject(err);
				} else {
					resolve(results);
				}
			});
		});
	}

	/**
	 * Find user by id
	 * @static
	 * @param { String } id - The id of the user
	 * @memberof UserService
	 * @returns { Promise<Array<User> | Error> } - A promise that resolves or rejects
	 * with the user resource or DB Error
	 */

	static async findUserById(id) {
		return await new Promise((resolve, reject) => {
			db.execute(
				fetchUserById,
				[id],
				(err, results, fields, result) => {
					if (err) {
						reject(err);
					} else {
						resolve(results);
					}
				},
			);
		});
	}

	/**
	 * Find user by email
	 * @static
	 * @param { String } email - The email of the user
	 * @memberof UserService
	 * @returns { Promise<Array<User> | Error> } - A promise that resolves or rejects
	 * with the user resource or DB Error
	 */
	static async findUserByEmail(email) {
		return new Promise((resolve, reject) => {
			db.execute(
				fetchUserByEmail,
				[email],
				(err, results, fields) => {
					if (err) {
						reject(err);
					} else {
						resolve(results);
					}
				},
			);
		});
	}

	// static async populateUserwithCampaign(email, campaign) {
	// 	try {
	// 		const data = await UserService.findUserByEmail(email);
	// 		let user = Helper.checkEmptyArray(data);

	// 		user = UserService.concatUser(user, campaign._id);

	// 		await user.save();
	// 	} catch (e) {
	// 		throw e;
	// 	}
	// }

	/**
	 * Concat user object with newly created or chained campaign
	 * @static
	 * @memberof UserService
	 * @returns { Promise<Array<User> | Error> } - A promise that resolves or rejects
	 * with the user resource or DB Error
	 */
	static concatUser(user, camapignId) {
		// user.campaigns = user.campaigns.concat(camapignId);

		console.log(user.campaigns);
		user.no_of_campaigns = user.no_of_campaigns + 1;

		return user;
	}
}

module.exports = UserService;
