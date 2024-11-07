import React from "react";
import "./About_Page.css";
import Hero_Section from "../../Component/Hero_Section/Hero_Section";
import About from "../../Component/About/About";
import Intouch from "../../Component/Intouch/Intouch";
import Footer from "../../Component/Footer/Footer";
import { FaPlay } from "react-icons/fa6";
import Gallery from "../../Component/Gallery/Gallery";

function About_Page() {
	return (
		<div className="about_page">
			<Hero_Section pagename="About Us" />
			<About />
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
			<Intouch />
			<Gallery />
		</div>
	);
}

export default About_Page;
