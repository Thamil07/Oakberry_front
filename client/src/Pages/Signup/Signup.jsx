import React, { useEffect, useState } from "react";
import "./Signup.css";
import "../Login/Login.css";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../Component/Button/Button";
import axios from "axios";

function Register() {
	const navigate = useNavigate();
	const [agentid, setAgentId] = useState("");
	const [name, setName] = useState("");
	const [username, setUsername] = useState("");
	const [usernameavail, setUsernameavail] = useState(null);
	const [usernameloading, setUsernameloading] = useState(false);
	const [password, setPassword] = useState("");
	const [con_password, setConPassword] = useState("");
	const [success, setSuccess] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const storedAgentId = localStorage.getItem("agentid");
		if (storedAgentId) {
			navigate("/");
		}
	}, [navigate]);

	const agentidChange = (e) => setAgentId(e.target.value);
	const nameChange = (e) => setName(e.target.value);
	const passwordChange = (e) => setPassword(e.target.value);
	const con_passwordChange = (e) => setConPassword(e.target.value);

	useEffect(() => {
		if (!username) {
			setUsernameavail(null);
			return;
		}

		const timeoutId = setTimeout(() => {
			checkusername(username);
		}, 500); // 500ms delay

		return () => clearTimeout(timeoutId);
	}, [username]);

	const checkusername = async (usernameavailable) => {
		setUsernameloading(true);
		setUsernameavail(null); // Clear previous state
		try {
			const response = await axios.post(
				"http://127.0.0.1:5555/api/auth/checkusername",
				{ username: usernameavailable }
			);
			if (response.status === 200) {
				setUsernameavail("Available");
			} else if (response.status === 201) {
				setUsernameavail("Not Available");
			}
		} catch (err) {
			console.error("Error checking username:", err);
			setUsernameavail("Error checking availability");
		} finally {
			setUsernameloading(false);
		}
	};

	const handlesignup = async () => {
		if (password !== con_password) {
			setError("Passwords do not match.");
			return;
		}

		setLoading(true);
		setError(null);
		setSuccess(null);

		try {
			const response = await axios.post(
				"http://127.0.0.1:5555/api/auth/add_user", // Updated endpoint to register
				{ agentid, name, username, password }
			);
			setSuccess(response.data.message);
			navigate("/");
		} catch (err) {
			console.log(`Error uploading the User Details`, err);
			setError(err.response ? err.response.data.error : "Server error");
		} finally {
			setLoading(false);
		}
	};
	const handlekey = (e) => {
		if (e.key === "Enter") {
			e.preventDefault();
			handlesignup();
		}
	};

	return (
		<div className="parent_register">
			<div className="signup_content">
				<h1>
					<i className="fa-solid fa-cash-register fa-bounce"></i>
					<p>Join Our Club</p>
				</h1>
				<div className="all_details_signup">
					<div className="signup_input">
						<input
							type="text"
							id="agentid"
							placeholder=""
							required
							value={agentid}
							onChange={agentidChange}
							onKeyDown={handlekey}
						/>
						<label htmlFor="agentid">Agent ID</label>
					</div>
					<div className="signup_input">
						<input
							type="text"
							id="name"
							placeholder=""
							required
							value={name}
							onChange={nameChange}
							onKeyDown={handlekey}
						/>
						<label htmlFor="name">Name</label>
					</div>
					<div className="signup_input">
						<input
							type="text"
							id="username"
							placeholder=" "
							required
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							style={{
								color: usernameloading
									? "black" // Default color during loading
									: usernameavail === "Available"
									? "green" // Green if available
									: usernameavail === "Not Available"
									? "red" // Red if not available
									: "black", // Fallback color
							}}
						/>
						<label htmlFor="username">Username</label>
					</div>

					<div className="signup_input">
						<input
							type="password"
							id="password"
							placeholder=" "
							required
							value={password}
							onChange={passwordChange}
							onKeyDown={handlekey}
						/>
						<label htmlFor="password">Password</label>
					</div>
					<div className="signup_input">
						<input
							type="password"
							id="con_password"
							placeholder=" "
							required
							value={con_password}
							onChange={con_passwordChange}
							onKeyDown={handlekey}
						/>
						<label htmlFor="con_password">Confirm Password</label>
					</div>
					<div className="signup_bt">
						<Button
							onClick={handlesignup}
							text={loading ? "Signing Up..." : "Signup"}
							disabled={loading}
						/>
					</div>
					<p>
						If you have an account <Link to="/login">Click Here</Link>
					</p>
					<div>
						{error && <div style={{ color: "red" }}>{error}</div>}
						{success && <div style={{ color: "green" }}>{success}</div>}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Register;
