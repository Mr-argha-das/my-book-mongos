const user = require("../models/user")

const userCreate = async(req,res)=>{
    const createData = await user.create(req.body)
    res.send(createData)
}
const loginUser = async(req,res)=>{
    const checkUser = await user.findOne({email:req.body.email,password:req.body.password})
    if(!checkUser) return res.status(401).send({status:false,msg:'email or password is wrong',data:null})
    res.send({status:true,msg:'login',data:checkUser})
}
module.exports = {
    userCreate:userCreate,
    userLogin:loginUser
}