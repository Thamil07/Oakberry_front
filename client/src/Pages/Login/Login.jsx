import React, { useEffect, useState } from "react";
import "./Login.css";
import Button from "../../Component/Button/Button";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Login() {
	const navigate = useNavigate();
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(null);
	const [success, setSuccess] = useState(null);

	const usernameChange = (e) => setUsername(e.target.value);
	const passwordChange = (e) => setPassword(e.target.value);
	useEffect(() => {
		const Token = localStorage.getItem("Token");
		if (Token) {
			navigate("/");
		}
	}, [navigate]);

	const handleLogin = async () => {
		try {
			const response = await axios.post(
				"http://127.0.0.1:5555/api/auth/login",
				{
					username,
					password,
				}
			);
			localStorage.setItem("Token", response.data.token);
			localStorage.setItem("RefreshToken", response.data.refreshtoken);
			navigate("/");

			setSuccess(response.data.message);
			setError(null);
		} catch (error) {
			setError(error.response ? error.response.data.error : "Server error");
			setSuccess(null);
		}
	};
	const handlekey=(e)=>{
		if (e.key==="Enter"){
			e.preventDefault();
			handleLogin();
		}

	}

	return (
		<div className="parent_login">
			<div className="login_content">
				<h1 style={{ textAlign: "center" }}>
					<i className="fa-solid fa-house-chimney"></i>
					<p>Login To Explore</p>
				</h1>
				<div className="all_details">
					<div className="login_input">
						<input
							type="text"
							id="username"
							placeholder=" "
							required
							value={username}
							onChange={usernameChange} // Fixed here
							onKeyDown={handlekey}
							autoComplete="off"
						/>
						<label htmlFor="username">Username</label> {/* Fixed here */}
					</div>

					<div className="login_input">
						<input
							type="password" // Changed to password type
							id="password"
							placeholder=" "
							required
							value={password}
							onChange={passwordChange}
							onKeyDown={handlekey}
						/>
						<label htmlFor="password">Password</label> {/* Fixed here */}
					</div>
					<div className="login_bt">
						{<Button onClick={handleLogin} text="Login" />}
					</div>
					<p>
						If You Don't have a account <Link to="/signup">Click Here</Link>
					</p>
				</div>
				<div>
					{error && <div style={{ color: "red" }}>{error}</div>}{" "}
					{/* Display error message */}
					{success && <div style={{ color: "green" }}>{success}</div>}{" "}
					{/* Display success message */}
				</div>
			</div>
		</div>
	);
}

export default Login;
