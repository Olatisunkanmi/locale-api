const StateService = require('../../services/states');
const { Helper, constants } = require('../../utils');

const { successResponse } = Helper;
const { STATES_RETRIEVED_SUCCESSFULLY } = constants;

class StateMiddleware {
	static async fetchStates(req, res, next) {
		try {
			const states = await StateService.fetchStates();
			res.locals.states = states;

			successResponse(res, {
				data: states,
				message: STATES_RETRIEVED_SUCCESSFULLY,
				code: 200,
			});
		} catch (error) {
			next(error);
		}
	}
}

module.exports = StateMiddleware;
