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

const userSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  articles: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Article',
    }
  ]
})

module.exports = model('User', userSchema)