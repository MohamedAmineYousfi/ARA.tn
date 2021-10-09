const express = require('express');
const dotenv = require('dotenv')
dotenv.config();
const Announce = require('../database-mongodb/Announce.js');
const User = require('../database-mongodb/UserModel.js');
const app = express();
const PORT = 3000;
var announceRouter = require('./Router')


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../react-client/dist'));


app.use('/api/user',announceRouter)


//Cloudinary part 
const ImageS = require ('../database-mongodb/Image.js')
const upload = require('../database-mongodb/utils/multer')
const cloudinary = require ('../database-mongodb/utils/cloudinary')
const path = require('path')


app.post('/api/user/image',upload.single('image'),async (req,res)=>{
  try{
    const result = await cloudinary.uploader.upload(req.file.path);
// console.log(req.file.path)
//create instance of image 
 let img = new ImageS ({
   name : req.body.name,
   avatar : result.secure_url,
   cloudinary_id : result.public_id,
 })

//save user 
await img.save();
// res.json(img);
// res.setHeader()
// res.writeHead(200)   
// res.end( result.secure_url)
res.send({imageUrl : result.secure_url})
    } 
  catch(err){
console.log(err)
    }
})




app.post('/signup', announceRouter)

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);

});
