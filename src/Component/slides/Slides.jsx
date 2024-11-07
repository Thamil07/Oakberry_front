import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Slides.css";
import Button from "../Button/Button";

function Slides() {
	return (
		<div className="slide">
			<Carousel controls={false}>
				<Carousel.Item>
					<img
						className="block"
						src="https://cdn.pixabay.com/photo/2020/06/25/10/21/architecture-5339245_1280.jpg"
						alt="First slide"
					/>
					<Carousel.Caption data-aos="fade-up" data-aos-duration="2000">
						<h3>Your Property Is Our Priority</h3>
						<p>
							A small river named Duden flows by their place and supplies it
							with the necessary regelialia. It is a paradisematic country, in
							which roasted parts of sentences fly into your mouth.
						</p>
						<Button text={"Learn More →"} />
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="block"
						src="https://cdn.pixabay.com/photo/2021/12/05/02/33/real-estate-6846355_1280.jpg"
						alt="Second slide"
					/>
					<Carousel.Caption data-aos="fade-up" data-aos-duration="2000">
						<h3>Let Your Home Be Unique & Stylist</h3>
						<p>
							A small river named Duden flows by their place and supplies it
							with the necessary regelialia. It is a paradisematic country, in
							which roasted parts of sentences fly into your mouth.
						</p>
						<Button text={"Learn More →"} shape={"square"} />
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="block"
						src="https://cdn.pixabay.com/photo/2019/10/17/02/39/villa-4555824_1280.jpg"
						alt="Third slide"
					/>
					<Carousel.Caption data-aos="fade-up" data-aos-duration="2000">
						<h3>Modern House Make Better Life</h3>
						<p>
							A small river named Duden flows by their place and supplies it
							with the necessary regelialia. It is a paradisematic country, in
							which roasted parts of sentences fly into your mouth.
						</p>
						<Button text={"Learn More →"} shape={"square"} />
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</div>
	);
}

export default Slides;
