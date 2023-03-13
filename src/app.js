const express=require('express')
// const serverless=require('serverless-http')
const app=express()


app.get('/hello',(req,res)=>{
    res.send("hello world app lambda and github using aws")
});

module.exports=app

// 'use strict';

// console.log("Generate random number ")
// module.exports.generateRandomNumber = async (event) => {
//   const randomNumber=parseInt(Math.random()*100)
//   console.log("this random generated integer is:  ",randomNumber)
//     return randomNumber
// };

