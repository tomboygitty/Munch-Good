const router = require('express').Router();
const userRoutes = require('./api/user');

router.use('/', userRoutes);

module.exports = router;