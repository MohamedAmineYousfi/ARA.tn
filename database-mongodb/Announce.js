const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const announceSchema = new mongoose.Schema({
  username : String,
  title: String,
  imageUrl : String,
  body: String,
  views: {type: Number, default: 0}
}, 
  {
    timestamps: true
  }
);

const userSchema = new mongoose.Schema({
  username : {
    type : String ,
    unique : true 
  },
  password : String 
})
const User = mongoose.model('User',userSchema)
const Announce = mongoose.model('Announce',announceSchema);
module.exports = User ;
module.exports = Announce;
