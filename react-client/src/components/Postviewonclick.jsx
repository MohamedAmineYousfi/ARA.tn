import React,{Component} from "react";
import moment from "moment";
const Postviewonclick = (props)=>(
        <div className="post">
    <h1 className="post-title">{props.lift.title}</h1>
    <div className="post-byline"><span className="post-byline-author">{props.lift.username}</span> {moment(props.lift.createdAt,"YYYY-MM-DD").fromNow()}</div>
    <img src={props.lift.imageUrl} className="post-image"/>
    <p>{props.lift.body}</p>
  </div>
        )
    

export default Postviewonclick