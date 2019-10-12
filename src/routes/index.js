
const router = require('express').Router()
const {getUsers}= require('../controllers/usersControllers')

router.get('/users',getUsers)




module.exports= router