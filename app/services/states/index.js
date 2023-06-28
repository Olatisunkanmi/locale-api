const states = require('../../db/stateAndLocal.json');

/**
 * StateService
 * @class
 */
class StateService {
	static fetchStates() {
		return states;
	}
}

module.exports = StateService;
