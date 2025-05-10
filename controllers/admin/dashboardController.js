exports.index = function (req, res) {
  res.render('pages/admin/dashboard', {
    title: "Dashboard",
    isDashboard: true
  });
}