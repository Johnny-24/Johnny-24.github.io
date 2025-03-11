const {Router} = require('express');
const router = Router();

const auth = require('./../middleware/auth');

router.get('/', auth, (req, res) => {
  res.render('about', {
    title: "Обо мне",
    isAbout: true
  });
})

module.exports = router;