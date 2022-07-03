import React from 'react';
import Post from "../post/Post";
import Share from "../Share/Share";
import "./TimeLine.css";
import {Posts} from "../../dummyData";

export default function TimeLine() {
  return (
	<div className="timeLine">
    <div className="timeLineWrapper">
      <Share />
      {Posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  </div>
  )
}
