import React from 'react'
import "./Login.css";

export default function Login() {
  return (
	<div className="login">
		<div className="loginWrapper">
			<div className="loginLeft">
				<h3 className="loginLogo">Real SNS</h3>
				<span className="loginDesc">本格的なSNSを作成</span>
			</div>
			<div className="loginRight">
				<div className="loginBox">
					<p className="loginMessage">ログインはこちら</p>
					<input type="text" className="loginInput" placeholder="Email" />
					<input type="password" className="loginInput" placeholder="Password" />
					<button className="loginButton">ログイン</button>
					<span className="loginForgot">パスワードを忘れた方はこちら</span>
					<button className="loginRegisterButton">アカウント作成</button>
				</div>
			</div>
		</div>
	</div>
  )
}
