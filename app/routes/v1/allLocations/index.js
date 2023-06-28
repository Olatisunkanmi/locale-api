const router = require('express').Router();
const states = require('../states');
const regions = require('../regions');
const lgas = require('../lgas');

router.use('/states', states);
router.use('/regions', regions);
router.use('/lgas', lgas);

module.exports = router;
