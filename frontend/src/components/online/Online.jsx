import React from 'react'

export default function online({ user }) {
  return (
	<li className="rightbarFriend">
		<div className="rightbarProfileImgContainer">
		<img src={"./assets/" + user.profilePicture} alt="" className="rightbarProfileImg" />
		<span className="rightbarOnline"></span>
		</div>
		<span className="rightbarUsername">{user.username}</span>
	</li>
  )
}
