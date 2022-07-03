import React from 'react'
import "./Share.css"
import { Image, Gif, Face, Analytics } from "@mui/icons-material";

export default function Share() {
	const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
	<div className="share">
		<div className="shareWrapper">
			<div className="shareTop">
				<img src={ PUBLIC_FOLDER +"person/1.jpeg" } alt="" className="shareProfileImg" />
				<input type="text" className="shareInput" placeholder="今何してる?" />
			</div>
			<hr className="shareHr" />
			<div className="shareButtons">
				<div className="shareOptions">
					<div className="shareOption">
						<Image className="shareIcon icon01"/>
						<span className="shareOptionText">写真</span>
					</div>
					<div className="shareOption">
						<Gif className="shareIcon icon02" />
						<span className="shareOptionText">GIF</span>
					</div>
					<div className="shareOption">
						<Face className="shareIcon icon03" />
						<span className="shareOptionText">気持ち</span>
					</div>
					<div className="shareOption">
						<Analytics className="shareIcon icon04" />
						<span className="shareOptionText">投票</span>
					</div>
				</div>
				<button className="shareButton">投稿</button>
			</div>
		</div>
	</div>
  )
}
