const express = require('express');
const { route } = require('express/lib/application');
const app = express();
app.use(logger);
app.get('/books',(req,res,next)=>{
    res.send({ route: "/books"});
})
let response={route:""};
app.use(checkPermission);
app.get('/libraries',(req,res,next)=>{
    res.send(response);
})
app.get('/authors',(req,res,next)=>{
    res.send(response);
})
function logger(req,res,next){
    console.log(req.url);
    next();
}
function checkPermission(req,res,next){
    response.route=req.url;
    response['permission']=true;
    // if(req.url==='/libraries'){
        
    // }
    // else if(req.url==='/authors'){
    //     response['permission']=true;
    // }
    next();
}
module.exports=app;
