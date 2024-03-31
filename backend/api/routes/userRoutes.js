const express = require('express');
const router = express.Router();
const { addUser } = require('../controllers/userController')

router.post('/createAccount', addUser)

module.exports = {
    routes: router
}