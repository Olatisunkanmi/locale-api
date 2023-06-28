const router = require('express').Router();
const {
	LocationMiddleware: { fetchStates, findStateById },
	QueryMiddleware: { query },
} = require('../../../middleware');
const {
	LocationController: { getStates },
} = require('../../../controllers');

router.use(query);

router.get('/', fetchStates, getStates);

router.post('/:id', findStateById, getStates);

module.exports = router;
