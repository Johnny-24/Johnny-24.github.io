exports.index = function (req, res) {
  const user = {
    email: req.session.user.email
  }

  res.render('pages/admin/profile', {
    title: "Профиль",
    isProfile: true,
    user
  });
}
