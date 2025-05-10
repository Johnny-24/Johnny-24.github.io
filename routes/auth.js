const {Router} = require('express');
const router = Router();
const authController = require('./../controllers/authController');

router.get('/login', authController.loginPage)
router.post('/login', authController.login)

router.get('/logout', authController.logout)

router.get('/registration', authController.registrationPage)
router.post('/registration', authController.registration)

module.exports = router;
