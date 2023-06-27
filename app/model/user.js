const conn = require('../db/setup');
const db = conn.promise();
const queries = require('../db/queries/users');
const { UserService } = require('../services');
const { Helper } = require('../utils');

const { findUserById, findUserByEmail } = UserService;
const { createUser, fetchUserById } = queries;

/**
 * Class method for UserModel
 * @class UserModel
 */
class UserModel {
	constructor(options) {
		this.id = Helper.generateID();
		this.first_name = options.first_name;
		this.last_name = options.last_name;
		this.email = options.email;
		this.api_key = Helper.generateApiKey();
		this.password = Helper.hashPassword(options.password);
		this.confirm_password = Helper.hashPassword(
			options.confirm_password,
		);
	}

	async save() {
		try {
			await db.beginTransaction();
			await db.execute(createUser, [
				this.id,
				this.first_name,
				this.last_name,
				this.email,
				this.api_key,
				this.password,
				this.confirm_password,
			]);
			await db.commit();
			const data = await findUserById(this.id);
			let user = Helper.checkEmptyArray(data);
			user = {
				...user,
				api_key: this.api_key,
				message:
					'Please keep this key safe, you will not be able to retrieve it again.',
			};
			return user;
		} catch (e) {
			await db.rollback();
			throw e;
		}
	}
}

module.exports = UserModel;
