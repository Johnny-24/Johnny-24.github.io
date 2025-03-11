const {Router} = require('express');
const router = Router();
const Article = require('../models/article');

router.get('/', (req, res) => {
  res.render('addArticle', {
    title: "Add",
    isAdd: true
  });
})

router.post('/', async (req, res) => {
  console.log(req.body)
  const article = new Article({
    title: req.body.title,
    description: req.body.description,
    content: req.body.content
  })

  try {
    await article.save()
    res.redirect('/articles');
  } catch (e) {
    console.log(e)
  }


})

module.exports = router;