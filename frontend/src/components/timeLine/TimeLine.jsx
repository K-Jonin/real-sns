import React, { useState } from 'react';
import { useEffect } from "react";
import Post from "../post/Post";
import Share from "../Share/Share";
import "./TimeLine.css";
import axios from "axios";
// import {Posts} from "../../dummyData";

export default function TimeLine({ username }) {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = username
      ? await axios.get(`/posts/profile/${username}`)
      : await axios.get("/posts/timeline/62c071bec312a20c0e0d2908");
      setPosts(response.data);
    }
    fetchPosts();
  }, [username]);

  return (
	<div className="timeLine">
    <div className="timeLineWrapper">
      <Share />
      {posts.map((post) => (
        <Post post={post} key={post._id} />
      ))}
    </div>
  </div>
  )
}
