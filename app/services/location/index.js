const states = require('../../db/stateAndLocal.json');

/**
 * LocationService
 * @class
 */
class LocationService {
	/**
	 * @Static
	 * @description Fetches all states
	 * @returns {object} JSON response
	 * @memberof LocationService
	 */
	static fetchStates() {
		return states;
	}

	/**
	 * @Static
	 * @description Fetches a state by id
	 * @param {string} stateId - State id
	 * @returns {object} JSON response
	 * @memberof LocationService
	 */
	static findStateById(stateId) {
		return states.find(function (state) {
			return state.id == stateId;
		});
	}

	/**
	 * @Static
	 * @description Fetches all Regions
	 * @returns {object} JSON response
	 * @memberof LocationService
	 * */

	static async fetchRegions() {
		const uniqueRegions = new Set();
		const uniqueRegionArray = [];

		states.forEach((state) => {
			const { region } = state;

			if (!uniqueRegions.has(region)) {
				uniqueRegions.add(region);
				uniqueRegionArray.push(region);
			}
		});

		return uniqueRegionArray;
	}

	static async fetchLgas() {
		const lgaArray = [];

		states.forEach((state) => {
			const { lgas, state: stateName } = state;

			const lgaObj = {
				state: stateName,
				lgas: lgas,
			};

			lgaArray.push(lgaObj);
		});

		return lgaArray;
	}
}

module.exports = LocationService;
