const ValidationMiddleware = require('./validation');
const UserMiddleware = require('./user');
const AuthMiddleware = require('./Auth/auth');
const AuthenticateMiddleware = require('./Auth/authenticate');
const LocationMiddleware = require('./states');
const QueryMiddleware = require('./queryParams');

module.exports = {
	ValidationMiddleware,
	UserMiddleware,
	AuthMiddleware,
	AuthenticateMiddleware,
	LocationMiddleware,
	QueryMiddleware,
};
