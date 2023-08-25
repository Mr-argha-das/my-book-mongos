const express = require('express')
const database = require('./config/db')
const userRouter = require('./routers/user')
const app = express()
app.use(express.json())
database()
app.use(userRouter)
app.listen(3030,()=>{
    console.log("server");
})