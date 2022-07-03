import React from 'react'
import "./Register.css";

export default function Register() {
  return (
	<div className="login">
		<div className="loginWrapper">
			<div className="loginLeft">
				<h3 className="loginLogo">Real SNS</h3>
				<span className="loginDesc">本格的なSNSを作成</span>
			</div>
			<div className="loginRight">
				<div className="loginBox">
					<p className="loginMessage">新規登録はこちら</p>
					<input type="text" className="loginInput" placeholder="ユーザー名" />
					<input type="text" className="loginInput" placeholder="Eメール" />
					<input type="password" className="loginInput" placeholder="パスワード" />
					<input type="password" className="loginInput" placeholder="パスワード確認" />
					<button className="loginButton">サインアップ</button>
					<button className="loginRegisterButton">ログイン</button>
				</div>
			</div>
		</div>
	</div>
  )
}
