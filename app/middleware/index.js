const ValidationMiddleware = require('./validation');
const UserMiddleware = require('./user');
const AuthMiddleware = require('./Auth/auth');
const AuthenticateMiddleware = require('./Auth/authenticate');
const StateMiddleware = require('./states');

module.exports = {
	ValidationMiddleware,
	UserMiddleware,
	AuthMiddleware,
	AuthenticateMiddleware,
	StateMiddleware,
};
