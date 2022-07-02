const e = require("express");
const User = require("../models/User");

const router = require("express").Router();

// CRUD
// ユーザー情報の更新
router.put("/:id", async (req, res) => {
	if(req.body.userId === req.params.id || req.body.isAdmin) {
		try{
			const user = await User.findByIdAndUpdate(req.params.id, {
				$set: req.body
			});
			res.status(200).json("ユーザー情報が更新されました");
		}
		catch(err){
			return res.status(500).json(err);
		}
	} else {
		return res.status(403).json("自らのアカウントのみ更新が可能です");
	}
});

// ユーザー情報の削除
router.delete("/:id", async (req, res) => {
	if(req.body.userId === req.params.id || req.body.isAdmin) {
		try{
			const user = await User.findByIdAndDelete(req.params.id);
			res.status(200).json("ユーザー情報が削除されました");
		}
		catch(err){
			return res.status(500).json(err);
		}
	} else {
		return res.status(403).json("自らのアカウントのみ削除が可能です");
	}
});

// ユーザー情報の取得
router.get("/:id", async (req, res) => {
		try{
			const user = await User.findById(req.params.id);
			const {password, updatedAt, ...other} = user._doc;
			res.status(200).json(other);
		}
		catch(err){
			return res.status(500).json(err);
		}
		return res.status(403).json("自らのアカウントのみ削除が可能です");
});

// ユーザーのフォロー
router.put("/:id/follow", async (req, res) => {
	if(req.body.userId !== req.params.id) {
		try{
			const user = await User.findById(req.params.id);
			const currentUser = await User.findById(req.body.userId);
			// フォロワーに自分自身が居ない場合はフォローできる
			if(!user.followers.includes(req.body.userId)) {
				await user.updateOne({
					$push: {
						followers: req.body.userId,
					}
				});
				await currentUser.updateOne({
					$push: {
						followings: req.params.id,
					}
				});
			} else {
				return res.status(403).json("フォロー済み");
			}
			return res.status(200).json("フォロー成功");
		}
		catch(err){
			return res.status(500).json(err);
		}
	} else {
		return res.status(500).json("自分自身をフォローすることはできません");
	}
});

// ユーザーのフォローを外す
router.put("/:id/unfollow", async (req, res) => {
	if(req.body.userId !== req.params.id) {
		try{
			const user = await User.findById(req.params.id);
			const currentUser = await User.findById(req.body.userId);
			// フォロワーに存在したらフォローを外せる
			if(user.followers.includes(req.body.userId)) {
				await user.updateOne({
					$pull: {
						followers: req.body.userId,
					}
				});
				await currentUser.updateOne({
					$pull: {
						followings: req.params.id,
					}
				});
			} else {
				return res.status(403).json("このユーザーはフォロー解除できません");
			}
			return res.status(200).json("フォローを解除しました");
		}
		catch(err){
			return res.status(500).json(err);
		}
	} else {
		return res.status(500).json("自分自身をフォロー解除することはできません");
	}
});

// router.get("/", (req, res) => {
// 	res.send("user router");
// });

module.exports = router;