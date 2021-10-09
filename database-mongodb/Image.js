const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;


const imageSchema = new mongoose.Schema({
  name : {
    type : String 
  },
  avatar : {
    type : String
  },
  cloudinary_id : {
    type : String
  }
})

const ImageS = mongoose.model('Image',imageSchema)
module.exports = ImageS;

