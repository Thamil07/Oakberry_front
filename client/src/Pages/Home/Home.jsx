import React, { useEffect, useState } from "react";
import Slides from "../../Component/slides/Slides";
import "./Home.css";
import { FaLandmark } from "react-icons/fa6";
import { HiHomeModern, HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { LiaIndustrySolid } from "react-icons/lia";
import { FaPlay } from "react-icons/fa6";
import Feature_Properties from "../../Component/Feature_Properties/Feature_Properties";
import About from "../../Component/About/About";
import Intouch from "../../Component/Intouch/Intouch";
import Agent_Card from "../../Component/Agent_Card/Agent_Card";
import Gallery from "../../Component/Gallery/Gallery";
import Filter from "../../Component/Filter/Filter";
import { useNavigate } from "react-router-dom";

import secureinstance from "../../Interceptor/Interceptor";

function Home() {
	const navigate = useNavigate();
	useEffect(() => {
		const Token = localStorage.getItem("Token");
		if (!Token) {
			navigate("/login");
		}
	}, [navigate]);
	const [agentdetails, setagentdetail] = useState([]);

	useEffect(() => {
		const fetchAgent = async () => {
			try {
				const response = await secureinstance.get(
					"/auth/getagent"
				);
				console.log(response.data); // Log the data to verify its structur
				setagentdetail(response.data); // Set the data from the response
			} catch (err) {
				console.log("Error fetching agent details:", err.message);
			}
		};

		fetchAgent();
	}, []);

	const size = "10rem";
	return (
		<div className="parent-home">
			<div className="Home_hero_section">
				<Slides />
				<Filter />
			</div>
			<div className="categories">
				<div className="categories-section">
					<div data-aos="fade-up" className="head1">
						<p style={{ textTransform: "uppercase" }}>Oakberry Categories</p>
						<h2>Explore Our Categories & Places</h2>
					</div>
					<div className="categories-cards">
						<div className="categories-option container">
							<div
								data-aos="fade-up"
								data-aos-duration="500"
								className="categories-list">
								<FaLandmark style={{ fontSize: "2.5rem" }} />
								<p>Land</p>
							</div>
							<div
								data-aos="fade-up"
								data-aos-duration="1000"
								className="categories-list">
								<HiHomeModern style={{ fontSize: "2.5rem" }} />
								<p>Residential</p>
							</div>
							<div
								data-aos="fade-up"
								data-aos-duration="1500"
								className="categories-list">
								<HiOutlineBuildingOffice2 style={{ fontSize: "2.5rem" }} />
								<p>Commercial</p>
							</div>
							<div
								data-aos="fade-up"
								data-aos-duration="2000"
								className="categories-list">
								<LiaIndustrySolid style={{ fontSize: "2.5rem" }} />
								<p>Industrial</p>
							</div>
						</div>
						<div className="categories-city">
							<ul data-aos="fade-up" data-aos-duration="1000">
								<li>
									<b>New York</b>
									<p>200 Properties</p>
									<hr></hr>
								</li>
								<li>
									<b>China</b>
									<p>200 Properties</p>
									<hr></hr>
								</li>
								<li>
									<b>India</b>
									<p>200 Properties</p>
									<hr></hr>
								</li>
								<li>
									<b>London</b>
									<p>200 Properties</p>
									<hr></hr>
								</li>
							</ul>
							<ul data-aos="fade-up" data-aos-duration="1500">
								<li>
									<b>New York</b>
									<p>200 Properties</p>
									<hr></hr>
								</li>
								<li>
									<b>China</b>
									<p>200 Properties</p>
									<hr></hr>
								</li>
								<li>
									<b>India</b>
									<p>200 Properties</p>
									<hr></hr>
								</li>
								<li>
									<b>London</b>
									<p>200 Properties</p>
									<hr></hr>
								</li>
							</ul>
							<ul data-aos="fade-up" data-aos-duration="2000">
								<li>
									<b>New York</b>
									<p>200 Properties</p>
									<hr></hr>
								</li>
								<li>
									<b>China</b>
									<p>200 Properties</p>
									<hr></hr>
								</li>
								<li>
									<b>India</b>
									<p>200 Properties</p>
									<hr></hr>
								</li>
								<li>
									<b>London</b>
									<p>200 Properties</p>
									<hr></hr>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<Feature_Properties />
			<div className="modern">
				<div className="Modern_quotes">
					<h1>Modern House Video</h1>
					<p>
						Far far away, behind the word mountains, far from the countries
						Vokalia and Consonantia, there live the blind texts.
					</p>
					<div className="effect">
						<div className="modern_icon">
							<FaPlay style={{ color: "white", fontSize: "50px" }} />
						</div>
					</div>
				</div>
			</div>
			<About />
			<Intouch />
			<div className="home_agent">
				<div className="home_agent_card">
					<div className="home_agent_card_main container">
						<div className="topic ">
							<h2>Meets Our Agents</h2>
							<h1>Our Agents</h1>
						</div>

						<div className="home_agent_card_detail">
							{agentdetails.slice(0, 4).map((agentdetail, index) => (agentdetail.propertiesCount >=1?
								(<Agent_Card key={index} agent={agentdetail} />):null
							))}
						</div>
					</div>
				</div>
			</div>

			<Gallery />
		</div>
	);
}

export default Home;
