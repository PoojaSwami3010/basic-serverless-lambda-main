const mongoose = require('mongoose')
console.log("In DB Connection")
mongoose.set('strictQuery', false);

mongoose.connectdb= async ()=>{
 await mongoose.connect('mongodb+srv://admin:OIoiKUJ4VuuoVc28@elecdraw-dev.hebze6b.mongodb.net/?retryWrites=true&w=majority')
}
module.export= mongoose;