import React from 'react';
import moment from 'moment';
const Preview = (props) => (
  <div className="feed">
    <ul>
      {props.data.map((e,k)=>(
      <li key = {k} className="feed-list-item" onClick={()=>props.changeView("login")}>
      <div className="feed-list-item-title" >{e.title}</div>
      <div className="feed-list-item-byline"><span className="feed-list-item-byline-author">{e.username}</span>  - Added {moment(e.createdAt,"YYYY-MM-DD").fromNow()}</div>
      <img src={e.imageUrl} className="feed-list-item-image"/><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <div className="feed-list-item-byline"><button className="feed-list-item-byline-author">Show Post </button></div>
    </li>


      ))
      }
     

    </ul>
  </div>
);

export default Preview;
