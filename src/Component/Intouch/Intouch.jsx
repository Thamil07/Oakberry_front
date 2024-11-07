import React from "react";
import "./Intouch.css";
import Button from "../Button/Button";
import Small_Slider from "../Swiper/Small_Slider";
import Agent_Card from "../Agent_Card/Agent_Card";

function Intouch() {
	return (
		<div className="intouch_testimonial">
			<div className="intouch_parent">
				<div className="intouch_content ">
					<div className="intouch container">
						<div className="intouch_quotes">
							<h1>Find Best Place For Leaving</h1>
							<p>Find Best Place For Leaving</p>
						</div>
						<div className="intouch_button">
							<Button text={"GET IN TOUCH"} />
						</div>
					</div>
				</div>
			</div>
			<Small_Slider/>
		</div>
	);
}

export default Intouch;
