const {Router} = require('express');
const router = Router();
const User = require('./../models/user');
const bcrypt = require('bcryptjs');


router.get('/', async (req, res) => {
  res.render('pages/registration', {
    layout: 'authLayout',
    title: "Регистрация",
    isRegister: true,
    isAuth: true
  });
})

router.post('/', async (req, res) => {
  try {
    const { email, password, confirm } = req.body
    const candidate = await User.findOne({ email })

    if (candidate) {
      res.redirect('/registration')
    } else {
      const hashPassword = await bcrypt.hash(password, 10)
      const user = new User({ email, password: hashPassword })
      await user.save()
      res.redirect('/login')
    }
  } catch (e) {
    console.log(e)
  }
})

module.exports = router;