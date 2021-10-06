const express = require('express');

const Announce = require('../database-mongodb/Announce.js');
const User = require('../database-mongodb/UserModel')
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../react-client/dist'));

// app.get('/api/user/announce', function(req, res) {
//   // TODO - your code here!
// });
app.post("/api/user/announce",(req,res)=>{
  var build = new Announce(req.body)
  build.save()
  .then((data)=>{
    res.send(data)
  })
  .catch(err=>console.log('post announce server error'))
})

app.get("/api/user/announce",(req,res)=>{
  Announce.find({})
  .then((data)=>{
res.send(data)
  })
  .catch(err=>console.log('eririririri'))
})


app.post('/api/user', async (req, res)=> {
var password = req.body.password ;
var username = req.body.username
console.log(password,username)
// create a user a new user
var UserTest = new User({
  username: username,
  password: password
});
  try { 
    await 
// save the user to database
UserTest.save()
.then((data)=>{
  console.log(data)
}).catch(err=>{
  console.log(" already Exist the user")

})
  
// fetch the user and test password verification
User.findOne({ username: username }, function(err, user) {
  
  if (err){console.log("error first")};
   
  // test a matching password
  user.comparePassword(password, function(err, isMatch) {
    console.log(user)
      if (err) {
      res.setStatus(400).send(err)}
    console.log(password, isMatch); // -&gt; Password123: true
      
    if(username === 'admin' ){  
      res.end('admin')}
    else if (username === 'ghost'){  
      res.end('ghost')}
    else {
      res.setHeader(username,username)
      res.writeHead(200)
      res.end(username)
    }
      
  });
   var passwords = req.body.password + "001"
  // test a failing password
  user.comparePassword(passwords, function(err, isMatch) {
      if (err) throw err;
       else { 
         
        console.log(password, isMatch); // -&gt; Password001 : false
  } 
  });
})
}
catch(err){
  console.log(err,'post data errr')
}
})



app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
