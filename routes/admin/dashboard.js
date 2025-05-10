const {Router} = require('express');
const router = Router();
const dashboardController = require('./../../controllers/admin/dashboardController');
const auth = require('./../../middleware/auth');


router.get('/', auth, dashboardController.index)

module.exports = router;