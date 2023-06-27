const development = require('./development');
const production = require('./production.js');
const dotenv = require('dotenv');
const rootPath = require('app-root-path');
dotenv.config();

const { NODE_ENV } = process.env;

const currentEnv = {
	development,
	production,
}[NODE_ENV || 'development'];

module.exports = { ...currentEnv, ...rootPath };
