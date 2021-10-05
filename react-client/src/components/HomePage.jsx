import React from 'react';
import moment from 'moment'
const HomePage = (props) => (
  <div className="feed">
      <br />
     <div className="wyl feed-list-item-title">What are you looking for today,  {props.username}? </div>
     {/* <img className="img" src={logo2}/> */}
     <ul>
      {props.data.map((e,k)=>(
      <li key = {k} className="feed-list-item" >
      <div className="feed-list-item-title" >{e.title} - {e.price} DT</div>
      <div className="feed-list-item-byline"><span className="feed-list-item-byline-author">Owner: {e.username}</span> - Added {moment(e.createdAt,"YYYY-MM-DD").fromNow()}</div>
      <img src={e.imageUrl} className="feed-list-item-image"/>     
       <div className="feed-list-item-byline"><span className="feed-list-item-byline-author">{e.body}</span></div>

    </li>
      ))
      }
    </ul>
  </div>
)

export default HomePage;