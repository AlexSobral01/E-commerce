const bodyParser = require('body-parser')
const express = require('express');
const app = express();
const connection = require('./database/connection');
const cors = require('cors');

const UserController = require('./controllers/user/UsersController');

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// connection with mysql
connection
  .authenticate()
  .then(() => console.log('conexão realizada'))
  .catch(err => console.log(err))

app.use('/', UserController);

app.get('/', (req, res) => {
  res.send('working')
})

app.listen(3001, () => console.log('server working port 3001'))