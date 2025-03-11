const express = require('express');
const mongoose = require('mongoose');
const csrf = require('csurf');
const flash = require('connect-flash');
const session = require('express-session');
const exphbs = require('express-handlebars');
const homeRouter = require('./routes/home.js');
const articlesRouter = require('./routes/articles.js');
const aboutRouter = require('./routes/about.js');
const addRouter = require('./routes/add.js');
const addSrticleRouter = require('./routes/addArticle.js');
const loginRouter = require('./routes/login.js');
const registrationRouter = require('./routes/registration.js');
const MongoStore = require('connect-mongodb-session')(session);



const varMiddleware = require('./middleware/variables');

const { connectDB } = require('./db');

const app = express();

const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs'
});

const store = new MongoStore({
  collection: 'sessions',
  uri: 'mongodb://localhost:27017/blog'
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: "some secret",
  resave: false,
  saveUninitialized: false,
  store
}))
app.use(csrf())
app.use(flash())
app.use(varMiddleware)

app.use('/', homeRouter);
app.use('/articles', articlesRouter);
app.use('/about', aboutRouter);
app.use('/add', addRouter);
app.use('/addArticle', addSrticleRouter);
app.use('/login', loginRouter);
app.use('/registration', registrationRouter);

const port = process.env.PORT || 3000;


const start = async () => {
  try {
    const url = 'mongodb://localhost:27017/blog';
    await mongoose.connect(url);

    // const article = new Article({
    //   title: 'Новая статья',
    //   description: 'Описание новой статьи',
    //   preview: 'Превью новой статьи',
    //   tags: ['тег1', 'тег2']
    // });
    // const savedArticle = await article.save();
    // const user = await User.findByIdAndUpdate('67cf35d5404c799f20b4a93b', {
    //   $push: { articles: savedArticle._id }
    // });


    // const candidate = await User.findOne();
    // if (!candidate) {
    //   const user = new User({
    //     email: 'test@test.ru',
    //   })
    //   await user.save();
    // }
    app.listen(port, () => {
      console.log(`Server started on port ${port}`);
    });
  } catch (e) {
    console.log(e)
  }
}

start()
