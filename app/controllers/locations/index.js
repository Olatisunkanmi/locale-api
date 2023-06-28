const {
	Helper,
	constants: { ERROR_FETCHING_STATES, STATES_RETRIEVED_SUCCESSFULLY },
} = require('../../utils');

const { successResponse, errorResponse } = Helper;

class LocationController {
	static async getStates(req, res, next) {
		try {
			const { state, region, lga } = req.query;
			let data = req.states;

			if (state) data = Helper.findObjectByKey(data, state);

			if (lga !== 'true') {
				delete data.lgas;
			}

			successResponse(res, {
				data: data,
				code: 200,
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

module.exports = LocationController;
