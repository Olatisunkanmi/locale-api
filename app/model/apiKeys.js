const conn = require('../db/setup');
const db = conn.promise();
const queries = require('../db/queries/apiKeys.js');
const { Helper } = require('../utils');

class ApiKeyModel {
	constructor(options) {
		this.apiKey = options.apiKey || Helper.generateApiKey();
		this.user_id = options.user_id;
	}

	async save() {
		try {
			await db.beginTransaction();
			await db.execute(queries.createApiKey, [
				this.apiKey,
				this.user_id,
			]);
			await db.commit();
		} catch (e) {
			await db.rollback();
			throw e;
		}
	}
}

module.exports = ApiKeyModel;
