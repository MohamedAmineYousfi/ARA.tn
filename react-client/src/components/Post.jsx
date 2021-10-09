import React , {Component} from 'react';
import $ from 'jquery';
import axios from 'axios'
class Post extends Component {
  constructor(props){
    super(props)
    this.state = {
      username : this.props.user,      
      title : "",
      adress : "",
      phoneNumber : "",
      rentorsale:"",
      price : "",
      imageUrl : "",
      body : "",
      image : ""
    }
    this.saveandgo = this.saveandgo.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.post = this.post.bind(this)
    this.handlethisChange = this.handlethisChange.bind(this)
    this.sendPic = this.sendPic.bind(this)
  }

  handleChange(e) {
    console.log(this.state)
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  post(){
    $.post("/api/user/announce",this.state)
    .then((data)=>{
    this.props.alldata.unshift(data)
    })
    .catch(err=>console.log("client post error"))
  }
  handlethisChange(e) {
    console.log("Done!!");
    this.setState({rentorsale : e.target.value });
    console.log(this.state.rentorsale)
  }
saveandgo(){
  this.post()
  this.props.change("homePage")
  alert("Article Created Succesfully")
}


sendPic(event){
const file = event.target.files[0];
console.log(event.target.files[0])
const formData = new FormData()
formData.append('image',file)
  // console.log(this.state.image,this.state.username)
  axios.post('/api/user/image',formData,{
headers:{
  'Accept': 'multipart/form-data'
}
})
  // .then (res => res.send())
  .then(res=> {
     console.log("send pic",res)
    this.setState({
      imageUrl : res.data.imageUrl
    }) 
    console.log(this.state)
    })
  .catch(err=>{console.log(err)})
}
  render(){
    
    return (
<div className="post">
    <div className="create">
  <div className="create-editor">
    <h2>Create A Post</h2>
    <form>
      <input  className="create-input" type="text" onChange = {this.handleChange} name = "title" placeholder="Post Title"></input>
      <input  className="create-input" type="text" onChange = {this.handleChange} name = "adress" placeholder="Adress"></input>
      <input  className="create-input" type="text" onChange = {this.handleChange} name = "phoneNumber" placeholder="Phone Number"></input>
      <select value={this.state.rentorsale} onChange={this.handlethisChange}>
        <option value=""></option>
            {[{label : "Rent",value : "rent"},{label : "Sale",value:"sale"}].map((option,k) => (
              <option key = {k} value={option.value}>{option.label}</option>
            ))}
          </select>
      <input className="create-input" type="number" onChange = {this.handleChange} name = "price"  placeholder="Price"></input>
      <input className="create-input" type="text" onChange = {this.handleChange} name = "imageUrl" placeholder="Image URL"></input>
        </form>
      {/* <form method="POST" action="/upload-image" enctype="multipart/form-data"   > */}
        <form>
        <div>
  <label htmlFor="file" >Select a file: </label>
  <input type="file"  id="myfile" name="image"  accept="image/*" multiple={false} onChange={this.sendPic} /></div>
  </form>
      <textarea className="create-body-textarea" onChange = {this.handleChange} name = "body" placeholder="Post Body"></textarea>
      <button className="create-submit-button" onClick = {()=>{this.saveandgo()}} type="submit">Save post</button>
  
  </div>
</div>
  </div>
    )
  }
}
export default Post;
