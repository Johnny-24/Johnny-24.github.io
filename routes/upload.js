const fs = require('fs').promises;
const path = require('path');

const {Router} = require('express');
const router = Router();

router.post('/', async (req, res) => {
  if (!req.files || !req.files.file) {
    return res.status(400).send('Файл отсутствует');
  }

  const uploadPath = './uploads/';
  const filePath = path.join(uploadPath, req.files.file.name);

  try {
    await fs.mkdir(uploadPath, { recursive: true });
    await req.files.file.mv(filePath);
    res.send('Файл загружен');
  } catch (err) {
    console.error(err);
    res.status(500).send('Ошибка загрузки файла');
  }
});


module.exports = router;
