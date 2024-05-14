//routes/index.js

const bodyParser = require('body-parser')
const cors = require('cors')

const login = require('./loginRoute');
const usuarios = require('./usuariosRoute')


module.exports = app => {
  app.use(
    cors(),
    bodyParser.json(),
    bodyParser.urlencoded({extended: false}),
    login,
    usuarios
  )
}