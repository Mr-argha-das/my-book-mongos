const express = require('express')
const { userCreate, userLogin } = require('../controllers/user')
const userRouter = express.Router()
userRouter.post('/user/create',userCreate)
userRouter.post('/user/login',userLogin)
module.exports = userRouter