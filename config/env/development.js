const dotenv = require('dotenv').config();

module.exports = {
	PORT: process.env.PORT,

	REMOTE_DB_URL: process.env.REMOTE_DB_URL,

	SECRET_KEY: process.env.token_Id,

	SECRET_EXPIRES: process.env.token_expiresIn,
};
