const express = require('express');

const Announce = require('../database-mongodb/Announce.js');
const User = require('../database-mongodb/UserModel.js')
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/api/user/announce', function(req, res) {
  // TODO - your code here!
  Announce.find({})
  .then((data)=>{
res.send(data)
  })
  .catch(err=>console.log('eririririri'))
});

app.get('/api/user', function(req, res) {
  var user= req.params.username
 User.findOne({username:user}).then(data=>{
   res.send(data)
 }).catch(err=>{
   console.log(err)
   res.send(err)
 })
});


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});