const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const announceSchema = new mongoose.Schema({
  username : String,
  title: {type :String , require : true},
  adress : {type :String , require : true},
  phoneNumber : {type :Number , require : true},
  price : {type :Number , require : true},
  imageUrl : String,
  body: String,
  views: {type: Number, default: 0},
  cloudinary_id:{
    type:String
  }
}, 
  {
    timestamps: true
  }
);

const Announce = mongoose.model('Announce',announceSchema);

module.exports = Announce;
