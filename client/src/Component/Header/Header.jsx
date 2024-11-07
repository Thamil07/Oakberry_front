import React, { useEffect, useState } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import Button from "../Button/Button";

function Header() {
	const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [storedid, setStoredId] = useState("");

	useEffect(() => {
		const Token = localStorage.getItem("Token");
		if (Token) {
			setStoredId(Token);
		}
	}, []);

	const toggleMobileMenu = () => {
		setMobileMenuOpen(!isMobileMenuOpen);
	};
	const handlelogout = () => {
		localStorage.removeItem("Token");
		localStorage.removeItem("RefreshToken");
	};

	const handleLogin = () => {
		// Logic to handle login (e.g., submit form or make API call)
	};

	return (
		<div className="parent_head">
			<header className="parent_header mx-auto container-xxl">
				<div className="brand">
					<h1>Oakberry</h1>
					<p>REAL ESTATE AGENCY</p>
				</div>
				<div>
					<ul>
						<li>
							<NavLink to="/" activeClassName="active">
								HOME
							</NavLink>
						</li>
						<li>
							<NavLink to="/about" activeClassName="active">
								ABOUT
							</NavLink>
						</li>
						<li>
							<NavLink to="/properties" activeClassName="active">
								PROPERTIES
							</NavLink>
						</li>
						<li>
							<NavLink to="/agent" activeClassName="active">
								AGENTS
							</NavLink>
						</li>
						<li>
							<NavLink to="/contact" activeClassName="active">
								CONTACT
							</NavLink>
						</li>
					</ul>
				</div>

				{storedid ? (
					<>
						<NavLink to="/add_property">
							<Button
								className="submit_bt"
								text="Submit a property"
								shape="square"
							/>
						</NavLink>
						<NavLink to="/login">
							<Button
								className="submit_bt"
								text="Logout"
								shape="square"
								onClick={handlelogout}
							/>
						</NavLink>
					</>
				) : (
					<NavLink to="/login">
						<Button text="Login" shape="round" />
					</NavLink>
				)}
				<div className="menu" onClick={toggleMobileMenu}>
					<i className="fa-solid fa-bars"></i> MENU
				</div>
			</header>
			<div className={`mobile_header ${isMobileMenuOpen ? "open" : ""}`}>
				<ul>
					<li>
						<NavLink to="/" activeClassName="active">
							HOME
						</NavLink>
					</li>
					<li>
						<NavLink to="/about" activeClassName="active">
							ABOUT
						</NavLink>
					</li>
					<li>
						<NavLink to="/properties" activeClassName="active">
							PROPERTIES
						</NavLink>
					</li>
					<li>
						<NavLink to="/agent" activeClassName="active">
							AGENTS
						</NavLink>
					</li>
					<li>
						<NavLink to="/contact" activeClassName="active">
							CONTACT
						</NavLink>
					</li>
				</ul>
				<div className="mob_login">
					{storedid ? (
						<div className="mobile_submit">
							<NavLink to="/add_property">
								<Button
									className="submit_bt_mobile"
									text="Submit a property"
									shape="square"
								/>
							</NavLink>
							<NavLink to="/login">
								<Button
									className="submit_bt_mobile"
									text="Logout"
									shape="square"
									onClick={handlelogout}
								/>
							</NavLink>
						</div>
					) : (
						<NavLink to="/login">
							<Button text="Login" shape="square" />
						</NavLink>
					)}
				</div>
			</div>
		</div>
	);
}

export default Header;
