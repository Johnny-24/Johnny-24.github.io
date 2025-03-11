const {Router} = require('express');
const router = Router();

router.get('/', (req, res) => {
  res.render('articles', {
    title: "Статьи",
    isArticles: true
  });
})

module.exports = router;

/*

// Создание новой статьи
const article = new Article({
  title: 'Новая статья',
  description: 'Описание новой статьи',
  preview: 'Превью новой статьи',
  tags: ['тег1', 'тег2']
});

// Сохранение статьи
article.save((err, savedArticle) => {
  if (err) {
    console.log(err);
  } else {
    // Добавление статьи в профиль пользователя
    User.findByIdAndUpdate(userId, {
      $push: { articles: savedArticle._id }
    }, (err, user) => {
      if (err) {
        console.log(err);
      } else {
        console.log('Статья добавлена в профиль пользователя');
      }
    });
  }
});


*/