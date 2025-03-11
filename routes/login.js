const {Router} = require('express');
const router = Router();
const User = require('./../models/user');
const bcrypt = require('bcryptjs');


router.get('/', async (req, res) => {
  res.render('login', {
    title: "Авторизация",
    isLogin: true,
    error: req.flash('error')
  });
})

router.post('/', async (req, res) => {
  try {
    const { email, password } = req.body
    const candidate = await User.findOne({ email })

    if (candidate) {
      const areSame = await bcrypt.compare(password, candidate.password)
      if (areSame) {
        req.session.user = candidate
        req.session.isAuthenticated = true
        req.session.save(err => {
          if (err) {
            throw err
          }
          res.redirect('/');
        })
      } else {
        res.redirect('/login');
      }
    } else {
      console.log('ELSE')
      req.flash('error', 'ПОшел на хуй!')
      res.redirect('/login');
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


module.exports = router;