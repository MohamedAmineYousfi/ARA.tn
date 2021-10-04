const mongoose = require('mongoose');
const db = require('./index.js');

var bcrypt = require('bcryptjs');

SaltD = 10;
mongoose.Promise = global.Promise;



const userSchema = new mongoose.Schema({
  username : {
    type : String,
    required : true,
    index : {unique : true} 
  },
  password : {type :String,
    required : true } 
})

userSchema.pre('save', function(next) {
  var user = this;

  // only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) return next();

  // generate a salt
  bcrypt.genSalt(SaltD, function(err, salt) {
      if (err) return next(err);

      // hash the password using our new salt
      bcrypt.hash(user.password, salt, function(err, hash) {
          if (err) return next(err);
          // override the cleartext password with the hashed one
          user.password = hash;
          next();
      });
  });
});
   
userSchema.methods.comparePassword = function(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
      if (err) return cb(err);
      cb(null, isMatch);
  });
};




const User = mongoose.model('User',userSchema)
module.exports = User ;

