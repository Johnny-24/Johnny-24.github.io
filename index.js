const express = require('express');
const { Sequelize } = require('sequelize')
const csrf = require('csurf');
const flash = require('connect-flash');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const exphbs = require('express-handlebars');
const varMiddleware = require('./middleware/variables');
const fileUpload = require('express-fileupload');

const homeRouter = require('./routes/home.js');
const authRouter = require('./routes/auth.js');

const profileAdminRouter = require('./routes/profile.js');

const uploadRouter = require('./routes/upload.js');

// const articlesRouter = require('./routes/articles.js');
// const aboutRouter = require('./routes/about.js');
// const addRouter = require('./routes/add.js');
// const addSrticleRouter = require('./routes/addArticle.js');
// const loginRouter = require('./routes/login.js');




const app = express();

const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs'
});

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: "./session.sqlite"
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: "some secret",
  store: new SequelizeStore({
    db: sequelize,
  }),
  resave: false,
  proxy: true,
}))
app.use(fileUpload())
app.use(csrf())
app.use(flash())
app.use(varMiddleware)

app.use('/', homeRouter);
app.use('/auth', authRouter);
app.use('/admin', profileAdminRouter)
app.use('/upload', uploadRouter);
// app.use('/articles', articlesRouter);
// app.use('/about', aboutRouter);
// app.use('/add', addRouter);
// app.use('/addArticle', addSrticleRouter);
// app.use('/login', loginRouter);

const port = process.env.PORT || 3000;


const start = async () => {
  try {

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
    await sequelize.authenticate()
    await sequelize.sync()

    app.listen(port, () => {
      console.log(`Server started on port ${port}`);
    });
  } catch (e) {
    console.log(e)
  }
}

start()
