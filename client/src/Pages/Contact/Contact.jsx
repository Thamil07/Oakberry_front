import React from "react";
import "./Contact.css";
import Hero_Section from "../../Component/Hero_Section/Hero_Section";
import Button from "../../Component/Button/Button";

function Contact() {
	return (
		<div className="parent_contact">
			<Hero_Section pagename="Contact Us" />
			<div className="contact_content container">
				<div className="contact_content_first">
					<h2>Contact us </h2>
					<p> We're open for any suggestion or just to have a chat</p>
					<div className="company_contact mb-4">
						<div className="md-4">
							{" "}
							<h1>Address:</h1>
							<p className="address">
								198 West 21th Street, Suite 721 New York NY 10016
							</p>
						</div>
						<div className="md-4">
							<h1>Email:</h1>
							<p>info@yoursite.com</p>
						</div>
						<div className="md-4">
							<h1>Phone:</h1>
							<p>+ 1235 2355 98</p>
						</div>
					</div>
					<div className="contact_input">
						<input className="i md-12" type="text" placeholder="Name"></input>
						<input className="i md-12" type="text" placeholder="Email"></input>
						<input
							className="i md-12"
							type="text"
							placeholder="Subject"></input>
						<textarea
							className="i md-12"
							type="text"
							placeholder="Create a message"></textarea>

						<Button className={"contact_bt"} text={"SEND MESSAGE"} />
					</div>
					<div className="contact_somedia mt-5">
						<h1>Follow Us Here</h1>
						<div className="contact_icon">
							<a href="">
								<i class="fa-brands fa-twitter"></i>
							</a>
							<a href="">
								<i class="fa-brands fa-facebook"></i>
							</a>
							<a href="">
								<i class="fa-brands fa-google"></i>
							</a>
							<a href="">
								<i class="fa-brands fa-instagram"></i>
							</a>
						</div>
					</div>
				</div>
				<div className="contact_content_second">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.420396927558!2d-74.0060150845942!3d40.73061057932939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2590b7c4e9f5f%3A0xf1a1b55c59c720b8!2s198%20West%2021th%20Street%2C%20Suite%20721%2C%20New%20York%2C%20NY%2010016!5e0!3m2!1sen!2sus!4v1634579918368!5m2!1sen!2sus"
						width="600"
						height="450"
						style={{ border: 0 }}
						allowFullScreen=""
						loading="lazy"></iframe>
				</div>
			</div>
		</div>
	);
}

export default Contact;
