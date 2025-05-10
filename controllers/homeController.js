exports.index = function (req, res) {
  res.render('index', {
    title: "Главная страница",
    isHome: true
  });
}