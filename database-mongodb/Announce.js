const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const announceSchema = new mongoose.Schema({
  username : String,
  title: String,
  price : {type :Number , require : true},
  imageUrl : String,
  body: String,
  views: {type: Number, default: 0}
}, 
  {
    timestamps: true
  }
);

const Announce = mongoose.model('Announce',announceSchema);

module.exports = Announce;
