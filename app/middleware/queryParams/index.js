/**
 * @class QueryMiddleware
 * @description Query middleware
 */

class QueryMiddleware {
	/**
	 * @static
	 * @method query
	 * @description Query middleware
	 * @param {object} req - Request object
	 * @param {object} res - Response object
	 * @param {object} next - Next object
	 * @returns {object} JSON API Response
	 * @memberof QueryMiddleware
	 */
	static async query(req, res, next) {
		const { state, region, lga } = req.query;

		if (state) {
			req.query.state =
				state.charAt(0).toUpperCase() + state.slice(1);
		}

		if (region) {
			req.query.region = region.toLowerCase();
		}

		if (lga) {
			req.query.lga = lga.toLowerCase();
		}

		req.query = { ...req.query, ...req.params };
		next();
	}

	static;
}

module.exports = QueryMiddleware;
