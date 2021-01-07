const mongoose =require('mongoose')
mongoose.connect('mongodb://localhost:27017/libraryApp',{ useNewUrlParser: true , useUnifiedTopology: true });
const schema=mongoose.Schema;


const AuthorSchema = new schema({
    name: String,
    book: String,
    genre: String,
    img: String

});
var authordata=mongoose.model("authordata",AuthorSchema);

module.exports=authordata;