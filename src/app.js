const express=require('express');
const mongoose = require('mongoose')
const userRouter = require('./route/user-route')
const KonvaRouter =require('./route/konva-route')
const app=express()

const port = process.env.PORT || 4000

app.use(express.json())
app.use(userRouter);
app.use(KonvaRouter);

app.get('',async(req,res)=>{
    mongoose.set('strictQuery', false);
    console.log("Connecting to DB")
    try {
        await mongoose.connect('mongodb+srv://admin:OIoiKUJ4VuuoVc28@elecdraw-dev.hebze6b.mongodb.net/?retryWrites=true&w=majority')
        console.log(mongoose.connection.readyState,`0 = disconnected;1 = connected;2 = connecting;3 = disconnecting;99 = uninitialized`)
    } catch (error) {
        console.log("Failed to connect to DB",error);
    }
    
    res.send("hello world app lambda and github using aws and It's working fine")
});

console.log("in app testing")
module.exports=app;

app.listen(port, () => {
    console.log("Server is running on ", port)
})
