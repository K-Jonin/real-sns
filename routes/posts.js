const router = require("express").Router();
const Post = require("../models/Post");
const User = require("../models/User");

// 投稿を作成する
router.post("/", async (req, res) => {
	const newPost = new Post(req.body);
	try{
		const savePost = await newPost.save();
		return res.status(200).json(savePost);
	}
	catch(err){
		return res.status(500).json(err);
	}
});

// 投稿を編集する
router.put("/:id", async (req, res) => {
		try{
			const post = await Post.findById(req.params.id);
			if(post.userId === req.body.userId){
				await post.updateOne({
					$set: req.body,
				});
				return res.status(200).json("投稿の編集に成功しました");
			} else {
				return res.status(403).json("他の人の投稿を編集できません");
			}
		}
		catch(err){
			return res.status(500).json(err);
		}
});

// 投稿を削除する
router.delete("/:id", async (req, res) => {
	try{
		const post = await Post.findById(req.params.id);
		if(post.userId === req.body.userId){
			await post.deleteOne();
			return res.status(200).json("投稿の削除に成功しました");
		} else {
			return res.status(403).json("他の人の投稿を削除できません");
		}
	}
	catch(err){
		res.status(500).json(err);
	}
});

// 特定の投稿を取得する
router.get("/:id", async (req, res) => {
	try{
		const post = await Post.findById(req.params.id);
		return res.status(200).json(post);
	}
	catch(err){
		res.status(500).json(err);
	}
});

// 特定の投稿にいいねを押す
router.put("/:id/like", async (req, res) => {
	try{
		const post = await Post.findById(req.params.id);
		// まだ投稿にいいねが押されていなかったら
		if(!post.likes.includes(req.body.userId)) {
			await post.updateOne({
				$push: {
					likes: req.body.userId,
				}
			});
			return res.status(200).json("投稿にいいねをしました");
		} else {
			// 投稿に既にいいねが押されている
			await post.updateOne({
				$pull: {
					likes: req.body.userId,
				}
			});
			return res.status(200).json("いいねを外しました");
		}
	}
	catch(err){
		return res.status(500).json(err);
	}
});

// タイムラインの投稿を取得
router.get("/timeline/all", async (req, res) => {
	try{
		const currentUser = await User.findById(req.body.userId);
		const userPosts = await Post.find({ userId: currentUser._id });
		// 自分がフォローしているフレンドの投稿内容を取得
		const friendPosts = await Promise.all(
			currentUser.followings.map((friendId) => {
				return Post.find({userId: friendId});
			})
		);
		return res.status(200).json(userPosts.concat(...friendPosts));
	}
	catch(err){
		return res.status(500).json(err);
	}
});

module.exports = router;