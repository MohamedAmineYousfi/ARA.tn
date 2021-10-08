var Announce = require ('../database-mongodb/Announce')
const User = require('../database-mongodb/UserModel')

exports.createOne = function (req,res){
    var build = new Announce(req.body)
    build.save()
    .then((data)=>{
      res.send(data)
    })
    .catch(err=>console.log('post announce server error'))
};
exports.retrieve = function (req,res){
    Announce.find({})
    .then((data)=>{
  res.send(data)
    })
    .catch(err=>console.log('error in retrieve data '))
};
exports.changeYourPost = function (req,res){
Announce.updateOne({_id:req.params.id},req.body,{new : true})
.then((data)=>{
  res.send(data)
})
.catch(err=>console.log(err))
}
exports.deleteOne = function(req,res){

};
// exports.updateOne = function(req,res){

// };
exports.updateViews = function(req,res){
console.log(req.params)
Announce.findOneAndUpdate({_id : req.params.id},{$inc : {views : 1}},{new : true})
.then ((data)=>{
  res.send(data)
})
.catch(err=>{console.log("patch server error")})
};

exports.check = async (req, res) => {
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
}

exports.findOne = function(req, res){
  const {username, password, phoneNumber} =req.body;
  console.log(req.body)
  User.findOne({username:username},(err,user)=>{
    if(user){
        res.send({message:"user already exist"})
    }else {
        const user = new User({username, password, phoneNumber})
        user.save(err=>{
            if(err){
                res.send(err)
            }else{
                res.send({message:"sucessfull"})
            }
        })
    }
  })
}