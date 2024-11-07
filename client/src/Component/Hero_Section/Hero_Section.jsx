import React from "react";
import "./Hero_Section.css";
import { Link } from "react-router-dom";

function Hero_Section({ pagename, className }) {
	return (
		<div className={`${className} hero_section_main`}>
			<div className="hero_content">
				<div data-aos="fade-up" className="hero_link">
					<Link className="link" to="/">
						<span>Home</span>
						<span>
							<i class="fa fa-chevron-right"></i>
						</span>
					</Link>
					<p className="mb-0">
						{pagename}
						<i class="fa fa-chevron-right"></i>
					</p>
				</div>
				<h1 style={{fontSize:"70px",fontWeight:"700"}}>{pagename}</h1>
			</div>
		</div>
	);
}

export default Hero_Section;
