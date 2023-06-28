const router = require('express').Router();
const auth = require('./auth');
const docs = require('../../../docs');
const location = require('./allLocations');

router.use('/auth', auth);
router.use('/location', location);
router.use('/docs', docs);

module.exports = router;
