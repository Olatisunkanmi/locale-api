const express = require('express');
const http = require('http');
const { urlencoded, json } = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const apiV1Routes = require('../app/routes/v1');
const { ApiError } = require('../app/utils');
const { errController } = require('../app/utils');
const config = require('./env');
const { constants, Helper, genericErrors } = require('../app/utils');

const { successResponse } = Helper;
const { WELCOME, v1, LOCALE_RUNNING } = constants;
const { notFoundApi } = genericErrors;

const appConfig = async (app) => {
	app.use(helmet());
	// adds middleware for cross-origin resource sharing configuration
	app.use(cors());
	// adds middleware that parses requests with x-www-form-urlencoded data encoding
	app.use(urlencoded({ extended: true }));
	// adds middleware that parses requests whose content-type is application/json
	app.use(express.json());
	// integrate winston logger with morgan
	app.use(morgan('combined', { stream: logger.stream }));

	// adds a heartbeat route for the culture
	app.get('/', (req, res) =>
		successResponse(res, { message: WELCOME }),
	);

	// serves v1 api routes
	app.use('/api/v1/', apiV1Routes);

	// catches 404 errors and forwards them to error handlers
	app.all('*', (req, res, next) => {
		next(notFoundApi);
	});

	// handles all forwarded errors
	app.use(errController);

	//Server running
	const PORT = config.PORT || 7000;

	app.listen(PORT, () => {
		logger.info(` ${LOCALE_RUNNING}  ${PORT}`);
	});
};

module.exports = appConfig;
