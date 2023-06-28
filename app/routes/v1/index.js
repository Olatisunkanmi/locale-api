const router = require('express').Router();
const auth = require('./auth');
// const states = require('./states');

router.use('/auth', auth);
// router.use('/states', states);

module.exports = router;
