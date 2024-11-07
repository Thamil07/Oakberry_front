import React from "react";
import "./About.css";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

function About() {
	const { ref, inView } = useInView({
		triggerOnce: false,
		// threshold: 0.5,
	});
	return (
		<div className="about_parent container">
			<div className="about_img_a">
				<img
					src="https://preview.colorlib.com/theme/oakberry/images/about.jpg"
					alt=""
				/>
			</div>
			<div ref={ref} className="about_content container">
				<h4>ABOUT US</h4>
				<h1>Oakberry A Real Estate Company</h1>
				<p>
					Far far away, behind the word mountains, far from the countries
					Vokalia and Consonantia, there live the blind texts. Separated they
					live in Bookmarksgrove right at the coast of the Semantics, a large
					language ocean.
				</p>
				<div className="about_data">
					<div data-aos="fade-up" data-aos-duration="1500">
						<h2>{inView && <CountUp start={0} end={50} duration={1.5} />}</h2>
						<p>Years of Experienced</p>
					</div>
					<div data-aos="fade-up" data-aos-duration="2000">
						<h2>
							{inView && <CountUp start={0} end={250} duration={1.5} />}K+
						</h2>
						<p>Total Properties</p>
					</div>
					<div data-aos="fade-up" data-aos-duration="2500">
						<h2>{inView && <CountUp start={0} end={450} duration={1.5} />}</h2>
						<p>Qualified Realtors</p>
					</div>
					<div data-aos="fade-up" data-aos-duration="3000">
						<h2>{inView && <CountUp start={0} end={100} duration={1.5} />}</h2>
						<p>Total Branches</p>
					</div>
				</div>
				<div className="about_img_b">
					<img
						src="https://preview.colorlib.com/theme/oakberry/images/about-1.jpg"
						alt=""
					/>
				</div>
			</div>
		</div>
	);
}

export default About;
