const mongoose =require('mongoose')
mongoose.connect('mongodb://localhost:27017/libraryApp',{ useNewUrlParser: true , useUnifiedTopology: true});
const schema=mongoose.Schema;


const BookSchema = new schema({
    title: String,
    author: String,
    genre: String,
    img: String

});
var Bookdata=mongoose.model("bookdata",BookSchema);

module.exports=Bookdata;