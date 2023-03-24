const mongoose = require('mongoose')
const validator = require('validator')


const Konva = mongoose.model('Konva-stage', {
  circuitName: {
    type:String   
  },
  circuitData:{
    type:String
  }
})

module.exports = Konva