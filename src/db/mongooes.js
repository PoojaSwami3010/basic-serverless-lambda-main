const mongoose = require('mongoose')
mongoose.set('strictQuery', false);
mongoose.connect('mongodb+srv://root:root@cluster0.zsmacod.mongodb.net/test')