const {Router} = require('express');
const router = Router();
const dashboardController = require('./../../controllers/admin/profileController');
const auth = require('./../../middleware/auth');

router.get('/profile', auth, dashboardController.index)

module.exports = router;