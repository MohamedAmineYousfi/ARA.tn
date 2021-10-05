import React from 'react';

const Preview = (props) => (
  <div className="feed">
    <ul>
      {props.data.map((e,k)=>(
      <li key = {k} className="feed-list-item" onClick={()=>props.changeView("login")}>
      <div className="feed-list-item-title" >{e.title}</div>
      <div className="feed-list-item-byline"><span className="feed-list-item-byline-author">{e.username}</span> {e.createdAt}</div>
      <img src={e.imageUrl} className="feed-list-item-image"/>
    </li>


      ))
      }
     

    </ul>
  </div>
);

export default Preview;
