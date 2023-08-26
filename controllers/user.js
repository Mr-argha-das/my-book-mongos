const user = require("../models/user")

const userCreate = async(req,res)=>{
    
    const checkmail = await user.findOne({email: req.body.email})
    const checknumber = await user.findOne({number: req.body.number})
    console.log(checkmail)
    if(checkmail != null || checknumber != null){
        return res.send({
           status: false,
           msg: "user already register"
        })
    } else {
        const createData = await user.create(req.body)
        res.send({ 
        status: true,
        data: createData,
        msg: "User Create done"
    })
    }
    
}
const loginUser = async(req,res)=>{
     checkUser = await user.findOne({email:req.body.numoremail,password:req.body.password})

    if(!checkUser){
        checkUser = await user.findOne({number:req.body.numoremail,password:req.body.password})
        if(!checkUser){
            return res.status(401).send({
                status:false,msg:'email or password is wrong',data:null})
        }
    }
    
    res.send({status:true,msg:'login',data:checkUser})
}
module.exports = {
    userCreate:userCreate,
    userLogin:loginUser
}   