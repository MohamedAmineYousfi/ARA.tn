const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/Announcements';

mongoose.connect(mongoUri,{ 
  useNewUrlParser: true ,useUnifiedTopology: true,useFindAndModify: false}, () => {
  console.log("db connected");
});
const db = mongoose.connection;

module.exports = db;
