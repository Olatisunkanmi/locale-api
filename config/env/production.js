const dotenv = require('dotenv').config();

module.exports = {
	PORT: process.env.PORT,
	REMOTE_DB_URL: process.env.REMOTE_DB_URL,
};
