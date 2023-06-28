const LocationService = require('../../services/location');
const { Helper, constants } = require('../../utils');

const { successResponse, errorResponse } = Helper;
const {
	STATES_RETRIEVED_SUCCESSFULLY,
	ERROR_FETCHING_STATES,
	REGIONS_RETRIEVED_SUCCESSFULLY,
} = constants;

class LocationMiddleware {
	/**
	 * @static
	 * @description Fetches all states
	 * @param {object} req - Request object
	 * @param {object} res - Response object
	 * @param {object} next - Next middleware
	 * @returns {object} JSON response
	 * @memberof LocationMiddleware
	 */
	static async fetchStates(req, res, next) {
		try {
			const { state, region, lga } = req.query;
			const states = await LocationService.fetchStates();

			req.states = states;
			next();
		} catch (error) {
			Helper.moduleErrLogMessager(error);
			errorResponse(req, res, {
				status: 500,
				message: ERROR_FETCHING_STATES,
			});
		}
	}

	/**
	 * @static
	 * @description Fetches a state by id
	 * @param {object} req - Request object
	 * @param {object} res - Response object
	 * @param {object} next - Next middleware
	 * @returns {object} JSON response
	 * @memberof LocationMiddleware
	 * */

	static async findStateById(req, res, next) {
		try {
			const stateId = req.params.id;
			const state = await LocationService.findStateById(stateId);
			res.locals.state = state;

			if (!state) {
				return errorResponse(req, res, {
					status: 404,
					message: 'State not found',
				});
			}

			req.states = state;
			next();
		} catch (error) {
			Helper.moduleErrLogMessager(error);
			errorResponse(
				req,
				res,
				{ message: ERROR_FETCHING_STATES },
				500,
			);
		}
	}

	static async fetchRegions(req, res, next) {
		try {
			const { region, state, lga } = req.query;
			const regions = await LocationService.fetchRegions();

			// req.states = states;
			// next();

			successResponse(res, {
				data: regions,
				message: REGIONS_RETRIEVED_SUCCESSFULLY,
			});
		} catch (error) {
			Helper.moduleErrLogMessager(error);
			errorResponse(req, res, {
				status: 500,
				message: ERROR_FETCHING_STATES,
			});
		}
	}

	static async fetchLgas(req, res, next) {
		try {
			const { region, state, lga } = req.query;
			const states = await LocationService.fetchLgas();

			req.states = states;
			successResponse(res, {
				data: states,
			});
		} catch (error) {
			Helper.moduleErrLogMessager(error);
			errorResponse(req, res, {
				status: 500,
				message: ERROR_FETCHING_STATES,
			});
		}
	}
}

module.exports = LocationMiddleware;
