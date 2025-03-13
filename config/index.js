const config = {
  PORT: process.env.PORT || 3000,
  DB_CONFIG: {
    dialect: 'sqlite',
    storage: './blog.db'
  },
  VIEW_CONFIG: {
    defaultLayout: 'main',
    extname: 'hbs'
  },
  SECRET_KEY: 'SECRET_KEY_RANDOM'
}

module.exports = config