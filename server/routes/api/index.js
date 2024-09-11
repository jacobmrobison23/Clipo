const router = require('express').Router();
const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');
const notificationRoutes = require('./notification-routes');

router.use('/users', userRoutes);
router.use('/post', postRoutes);
router.use('/notification', notificationRoutes);

module.exports = router;
