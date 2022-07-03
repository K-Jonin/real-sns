import React from 'react'
import Post from "../post/Post"
import Share from "../Share/Share"
import "./TimeLine.css"

export default function TimeLine() {
  return (
	<div className="timeLine">
    <div className="timeLineWrapper">
      <Share />
      <Post />
    </div>
  </div>
  )
}
