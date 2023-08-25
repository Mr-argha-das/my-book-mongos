const mongoose = require('mongoose')
const database = async()=>{
    const db = await mongoose.connect("mongodb+srv://arghaahit:OxGGsGeGrZWoGRKy@cluster0.wew1m0x.mongodb.net/mydatabase")
    console.log("host--",db.connection.host);
}
module.exports=database