const {Router} = require('express');
const router = Router();
const User = require('./../models/user');
const bcrypt = require('bcryptjs');

router.get('/login', async (req, res) => {
  res.render('pages/login', {
    layout: 'authLayout',
    title: "Авторизация",
    isLogin: true,
    error: req.flash('error')
  });
})

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body
    const candidate = await User.findOne({ where: { email } })

    if (candidate) {
      const areSame = await bcrypt.compare(password, candidate.password)
      if (areSame) {
        req.session.user = candidate
        req.session.isAuthenticated = true
        req.session.save(err => {
          if (err) {
            throw err
          }
          res.redirect('/admin/profile');
        })
      } else {
        res.redirect('/auth/login');
      }
    } else {
      req.flash('error', 'Неверный E-mail или пароль')
      res.redirect('/auth/login');
    }
  } catch (e) {
    console.log(e)
  }
})

router.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/');
  })
})

router.get('/registration', async (req, res) => {
  res.render('pages/registration', {
    layout: 'authLayout',
    title: "Регистрация",
    isRegister: true,
    error: req.flash('error')
  });
})

router.post('/registration', async (req, res) => {
  try {
    const { email, password } = req.body
    const candidate = await User.findOne({ where: { email } })

    if (candidate) {
      req.flash('error', 'Такой пользователь уже существует')
      res.redirect('/registration')
    } else {
      const hashPassword = await bcrypt.hash(password, 10);
      const user = new User({ email, password: hashPassword });
      await user.save();
      // Авторизовываем сразу
      res.redirect('/')
    }
  } catch (e) {
    console.log(e)
  }
})

module.exports = router;
