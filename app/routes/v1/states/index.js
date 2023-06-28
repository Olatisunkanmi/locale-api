const router = require('express').Router();
const { StateMiddleware } = require('../../../middleware');

const { fetchStates } = StateMiddleware;

router.get('/', fetchStates);

module.exports = router;
