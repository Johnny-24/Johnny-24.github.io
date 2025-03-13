const {Router} = require('express');
const router = Router();

router.get('/profile', async (req, res) => {
  res.render('pages/admin/profile', {
    title: "Профиль",
    isProfile: true,
  });
})

module.exports = router;