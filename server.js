const express = require("express");
const app = express();
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const PORT = 3000;
const mongoose = require("mongoose");
require("dotenv").config();

// データベース接続
mongoose
	.connect(process.env.MONGO_URL)
	.then(() => {
		console.log("DBと接続中・・・");
	})
	.catch(() => {
		console.log("ERROR");
	})

// ミドルウェア
app.use(express.json());
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);

app.get("/", (req, res) => {
	res.send("hello");
});

app.listen(PORT, () => console.log("サーバーが起動しました"));