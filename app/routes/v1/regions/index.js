const router = require('express').Router();
const {
	LocationController: { getStates },
} = require('../../../controllers');

const {
	LocationMiddleware: { fetchRegions },
	QueryMiddleware: { query },
} = require('../../../middleware');

router.use(query);

router.get('/', fetchRegions);

module.exports = router;
