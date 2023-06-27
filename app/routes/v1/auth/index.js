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
	UserMiddleware,
} = require('../../../middleware');
const { validate } = ValidationMiddleware;
const { validateUserEmail } = UserMiddleware;

const { createUser } = UserController;

router.post(
	'/signup',
	validate(validateUserSchema),
	validateUserEmail,
	createUser,
);

module.exports = router;
