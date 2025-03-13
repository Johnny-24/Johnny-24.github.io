const {Router} = require('express');
const router = Router();

// const Article = require('./../models/article');
// const User = require('./../models/user');


router.get('/', async (req, res) => {

  // const articles = await Article.find().lean();
  // const users = await User.find().populate('articles').select('title');

  // console.log('users ---->', users)

  res.render('index', {
    title: "Главная страница",
    isHome: true,
    // articles
  });
})

module.exports = router;