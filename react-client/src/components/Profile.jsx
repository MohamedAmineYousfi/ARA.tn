import React,{Component} from "react";
import moment from "moment";
import axios from "axios"
class Profile extends Component {
constructor(props){
    super(props)
    this.state = {
        filtredData : [],
    }
}
componentDidMount(){
    this.getdata()
}

getdata() { 
  
        var filter = this.props.data.filter((e)=>{
         return  e.username === this.props.user //change this to this.props.user after fixing the loggin 
       })
       this.setState({
           filtredData : filter
       })
       
     }

render(){
 
    return (

        <div className="feed-list-item">
        <br />
       <div className="wyl feed-list-item-title"> Welcome to your profile, {this.props.user} </div><br /> <br />
       <div className="wyl feed-list-item-title"> Your posts :  {this.props.username} </div>
      <ul> 
              {
                
              this.state.filtredData.map((e,k)=>(
<li  key = {k} className="feed-list-item" >
    <button onClick = {()=>this.props.change("edit",e._id)} id = "editpostprofile" on>Edit Post</button>
        <div className="feed-list-item-byline"><span className="feed-list-item-byline-author">Owner: {e.username}</span> {moment(e.createdAt,"YYYY-MM-DD").fromNow()} - Added </div>
        
        <img onClick = {() => {this.props.change(e._id)}}  src = {e.imageUrl} className="feed-list-item-image"/>     
        <div className="feed-list-item-byline"><span className="feed-list-item-byline-author">{e.price} TND</span></div>  
        <div id = "showdetails" className="feed-list-item-byline"><span className="feed-list-item-byline-author">views : {e.views}</span></div>  
         <div id = "showdetails" onClick = {() => {this.props.change(e._id)}} className="feed-list-item-byline"><span className="feed-list-item-byline-author">Click to see more details</span></div>  
      </li>
              ))}

      </ul>
    </div>
    )
}

}
export default Profile;