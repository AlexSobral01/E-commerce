const express = require('express');
const Users = require('./users');
const router = express.Router();

router.get('/users', (req, res) => {
  Users.findAll().then(result => res.json(result))
})

router.post('/users', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.username;
  Users.create({
    username: username,
    password: password,
    email: email,
    role: 0
  }).then(res => console.log(res)).catch(err => console.log(err))
})

module.exports = router;