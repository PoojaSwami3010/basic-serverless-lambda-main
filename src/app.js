const express=require('express')
const serverless=require('serverless-http')
const app=express()



app.get('/hello',(req,res)=>{
    res.send("hello world app lambda and github using aws")
});

module.exports=serverless(app)