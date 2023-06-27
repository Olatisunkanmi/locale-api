const Joi = require('joi');
const { ValidationHelper, Helper } = require('../utils');

const { validateString, validatePassword, validateEmail } =
	ValidationHelper;

const ValidateUserSchema = Joi.object({
	first_name: validateString('First name', Joi, 5),
	last_name: validateString('Last name', Joi, 5),
	email: validateEmail('Email', Joi),
	password: validatePassword('Password', Joi),
	confirm_password: validatePassword('Repeat Password', Joi),
});

module.exports = ValidateUserSchema;
