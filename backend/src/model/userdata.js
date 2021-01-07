const mongoose =require('mongoose')
mongoose.connect('mongodb://localhost:27017/libraryApp',{ useNewUrlParser: true , useUnifiedTopology: true ,useFindAndModify: false,useCreateIndex: true});
const schema=mongoose.Schema;


const userSchema = new schema({
    name:String,
    email: String,
    password: String,
    phone: String
    

},{timestamps:true});
var userdata=mongoose.model("UserloginData",userSchema);

module.exports=userdata;