const router = require('express').Router();

router.use('/api/admin', require('./admin'))
router.use('/api/user', require('./user'));

module.exports = router;