const mongoose=require("mongoose")

const DB = process.env.DATABASE
const connect=()=>{
    return mongoose.connect("mongodb+srv://Sumit:Sumit@cluster0.0mfsdaa.mongodb.net/harvest?retryWrites=true&w=majority")
}


module.exports=connect;