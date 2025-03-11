const { Schema, model } = require('mongoose');

const commentSchema = new Schema({
  text: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now // Установить текущую дату по умолчанию
  }
});

const articleSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  preview: {
    type: String
  },
  tags: {
    type: [String] // Массив строк для тегов
  },
  comments: [commentSchema] // Массив комментариев
});

module.exports = model('Article', articleSchema);
