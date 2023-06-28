const router = require('express').Router();
const {
	LocationController: { getStates },
} = require('../../../controllers');

const {
	LocationMiddleware: { fetchLgas },
	QueryMiddleware: { query },
} = require('../../../middleware');

router.use(query);

router.get('/', fetchLgas, getStates);

module.exports = router;
