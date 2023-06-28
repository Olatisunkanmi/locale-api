const ValidationMiddleware = require('./validation');
const UserMiddleware = require('./user');
const AuthMiddleware = require('./Auth/auth');
const AuthenticateMiddleware = require('./Auth/authenticate');

module.exports = {
	ValidationMiddleware,
	UserMiddleware,
	AuthMiddleware,
	AuthenticateMiddleware,
};
