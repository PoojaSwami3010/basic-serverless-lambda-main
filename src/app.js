const express=require('express');
require('./db/mongooes');
const userRouter = require('./route/user-route')
const app=express()

const port = process.env.PORT || 4000

app.use(userRouter);

app.get('',(req,res)=>{
    res.send("hello world app lambda and github using aws and It's working fine")
});

console.log("in app")
module.exports=app

// app.listen(port, () => {
//     console.log("Server is running on ", port)
// })
