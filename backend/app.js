const express= require('express');
var app= new express();
const port=process.env.PORT || 3000;
//  const   bodyParser = require("body-parser"); 
 const Bookdata=require("./src/model/booksdata");
const Userdata=require("./src/model/userdata")
 const Authordata=require("./src/model/authordata");
 
 const cors=require('cors');
 const jwt=require('jsonwebtoken');
 app.use(express.urlencoded({extended:true}));

 app.use(cors());
 app.use(express.json());

 const path=require('path');
 const multer=require('multer');
const { JsonWebTokenError } = require('jsonwebtoken');


function verifyToken(req,res,next){
    
    if(!req.headers.authorization){
        return res.send("un authorized request")
    }
    let token=req.headers.Authorization.split('')[1];
    if (token=='null'){
        return res.send('Unauthorised request') 
    }
    let payload=jwt.verify(token,'secretKey')
    console.log('im in verify token of app.js'+payload)
    if(!payload){
        return res.send('unauthorised requestr')

    }
    req.userid=payload.subject
    console.log("im in verify token"+req.userid)
    next()
}
 
//  set storage
 const storage=multer.diskStorage({
     destination:(req, file, cb) => {
        cb(null, "../frontend/src/assets/images/books");
      },
     filename:function(req, file,cb){
         console.log("im in multer"+file)
     cb(null,file.fieldname+'-'+Date.now()+path.extname(file.originalname));
     }
 });

 var upload = multer({storage: storage});

 app.get('/books',function(req,res){
     res.header('Access-Control-Allow-Origin',"*")
     res.header('Access-Control-Allow-Methods:GET, POST, PUT, DELETE, PATCH, OPTION')
     Bookdata.find()
     .then(function(products){
         res.send(products)
     })
     
 })
 app.get('/books/:id',function(req,res){
    res.header('Access-Control-Allow-Origin',"*")
    res.header('Access-Control-Allow-Methods:GET, POST, PUT, DELETE, PATCH, OPTION')
    let id = req.params.id;
    Bookdata.findById(id)
    .then(function(products){
        res.send(products)
    })
    
})
app.put('/book/update/:id',upload.single('img'),function(req,res){
    res.header('Access-Control-Allow-Origin',"*")
    res.header('Access-Control-Allow-Methods:GET, POST, PUT, DELETE, PATCH, OPTION')
    let id = req.params.id;
    console.log(req.file)
    console.log(id)
    var newbook={title:req.body.title,
        author:req.body.author,
        genre:req.body.genre,
        img:req.body.img.replace("C:\\fakepath\\", "")
        }
    // Bookdata.findById(id);
        console.log(req.body) ;
        
        Bookdata.findByIdAndUpdate(req.params.id,newbook, {}, (error)=>{
            console.log(error);
        })
   
    
})
app.post('/addbook',upload.single('img'),function(req,res,next){
    res.header('Access-Control-Allow-Origin',"*")
    res.header('Access-Control-Allow-Methods:GET, POST, PUT, DELETE, PATCH, OPTION')
    // console.log(req.body) 
    // img=r
    // console.log("file"+req.file)
    var newbook={title:req.body.item.title,
        author:req.body.item.author,
        genre:req.body.item.genre,
        img:req.body.item.img.replace("C:\\fakepath\\", "")
        }
        

      console.log(newbook)
        var book=Bookdata(newbook);
        book.save();
        })  
app.delete('/books/:id',(req,res)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods: GET, POST, PUT, PATCH, DELETE, OPTIONS")
    
    console.log(req.params.id);
    Bookdata.findByIdAndDelete({_id:req.params.id}, (error)=>{
        console.log(error);
    })
    
})


app.get('/authors',function(req,res){
    res.header('Access-Control-Allow-Origin',"*")
    res.header('Access-Control-Allow-Methods:GET, POST, PUT, DELETE, PATCH, OPTION')
    Authordata.find()
    .then(function(products){
        res.send(products)
    })
    
})
app.get('/authors/:id',function(req,res){
    res.header('Access-Control-Allow-Origin',"*")
    res.header('Access-Control-Allow-Methods:GET, POST, PUT, DELETE, PATCH, OPTION')
    let id = req.params.id;
    Authordata.findById(id)
    .then(function(products){
        res.send(products)
    })
    
})
app.put('/author/update/:id',function(req,res){
    res.header('Access-Control-Allow-Origin',"*")
    res.header('Access-Control-Allow-Methods:GET, POST, PUT, DELETE, PATCH, OPTION')
    let id = req.params.id;
    console.log(id)
    var newauth={name:req.body.name,
        book:req.body.book,
        genre:req.body.genre,
        img:req.body.img.replace("C:\\fakepath\\", "")
        }
    // Bookdata.findById(id);
        console.log(req.body) ;
        
        Authordata.findByIdAndUpdate(req.params.id,newauth, {}, (error)=>{
            console.log(error);
        })
   
    
})
app.post('/addauthor',upload.single('img'),function(req,res,next){
    res.header('Access-Control-Allow-Origin',"*")
    res.header('Access-Control-Allow-Methods:GET, POST, PUT, DELETE, PATCH, OPTION')
    // console.log(req.body) 
    // img=r
    // console.log("file"+req.file)
    var newbook={name:req.body.item.name,
        book:req.body.item.book,
        genre:req.body.item.genre,
        img:req.body.item.img.replace("C:\\fakepath\\", "")
        }
        

      console.log(newbook)
        var book=Authordata(newbook);
        book.save();
    
  })  
app.delete('/authors/:id',(req,res)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods: GET, POST, PUT, PATCH, DELETE, OPTIONS")
    
    console.log(req.params.id);
    Authordata.findByIdAndDelete({_id:req.params.id}, (error)=>{
        console.log(error);
    })
    
})


app.post('/signup',function(req,res){
    res.header('Access-Control-Allow-Origin',"*");
    res.header('Access-Control-Allow-Methods:GET, POST, PUT, DELETE, PATCH, OPTION');
    console.log(req.body)
    var newuser={name:req.body.item.name,
        email:req.body.item.email,
        password:req.body.item.password,
        phone:req.body.item.phone
                }
                var msg='';
        
    console.log("ooi")
    Userdata.findOne({email: newuser.email})
    .then(user => {
                if (user) {  
                            console.log('That email already registered' );
                            msg="Email Address is in use. Try again with another e-mail";
                            res.status(200).send({msg})
                        }
                else {
                        console.log(newuser)
                         var user=Userdata(newuser);
                         msg="success"

                        user.save();
                        res.send({msg})
                    }
                })
      
})

// siginin
      
app.post("/login" , function(req,res,next){
    console.log(req.body)
    var email =req.body.item.email; 
    var pass = req.body.item.password; 
//    console.log("new"+data);  
var msg='';
    Userdata.findOne({email: email})
    .then(user => {
    if (!user) {  
        console.log('That email is not registered' );
        msg="Email Address is not registered";
        res.status(200).send({msg})
        // res.redirect('/usernotfound');
    }
    else{
        Userdata.findOne({password: pass})
        .then(user => {
            if (!user) {  
                console.log('Password Not Correct' );
                msg="Inorrect Password "
                res.status(200).send({msg})
                // res.redirect('/usernotfound');
            }
            else{
                const adminemail="admin@gmail.com";
                const adminpass="Admin@123";
                console.log("sucess--happy reading!!!")
                msg="success"
                let payload={subject:email+pass};
                let payload_admin={subject:adminemail+adminpass};
                let token=jwt.sign(payload,"secretKey")
                let token_admin=jwt.sign(payload_admin,"secretKey")
                console.log("im in login app.post"+token)
                res.status(200).send({token,token_admin,msg});   

            }

        })        
    }
});
})

// get('/usernotfound')
app.listen(port,()=>{console.log("server is ready at port "+port);
console.log("Ready");});
