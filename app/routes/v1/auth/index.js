const router = require('express').Router();
const {
	UserController,
	AuthController,
} = require('../../../controllers');
const {
	validateUserSchema,
	validateUserSignIn,
} = require('../../../validations');
const {
	ValidationMiddleware,
	AuthMiddleware,
	AuthenticateMiddleware,
	UserMiddleware,
} = require('../../../middleware');
const { comparePassword } = AuthenticateMiddleware;
const { validateLoginEmail } = AuthMiddleware;
const { validate } = ValidationMiddleware;
const { validateUserEmail } = UserMiddleware;
const { signIn } = AuthController;
const { createUser } = UserController;

router.post(
	'/signup',
	validate(validateUserSchema),
	validateUserEmail,
	createUser,
);

router.post(
	'/login',
	validate(validateUserSignIn),
	validateLoginEmail,
	comparePassword,
	signIn,
);

module.exports = router;
