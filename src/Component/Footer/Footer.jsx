import React from "react";
import "./Footer.css";

function Footer() {
	return (
		<div className="parent_footer">
			<div className="footer_details container-xl">
				<div className="div_1">
					<div>
						<h1>Oakberry</h1>
						<p>Real Estate Agency</p>
					</div>
					<p>
						A small river named Duden flows by their place and supplies it with
						the necessary regelialia.
					</p>
					<ul className="icons">
						<li>
							<a href="">
								<i class="fa-brands fa-twitter"></i>
							</a>
						</li>
						<li>
							<a href="">
								<i class="fa-brands fa-facebook-f"></i>
							</a>
						</li>
						<li>
							<a href="">
								<i class="fa-brands fa-instagram"></i>
							</a>
						</li>
					</ul>
				</div>
				<div>
					<h1>Offers</h1>
					<ul>
						<li>
							<a href="">
								<span>
									<i class="fa-solid fa-chevron-right"></i>
								</span>
								Properties
							</a>
						</li>
						<li>
							<a href="">
								<span>
									<i class="fa-solid fa-chevron-right"></i>
								</span>
								Agents
							</a>
						</li>
						<li>
							<a href="">
								<span>
									<i class="fa-solid fa-chevron-right"></i>
								</span>
								Locations
							</a>
						</li>
						<li>
							<a href="">
								<span>
									<i class="fa-solid fa-chevron-right"></i>
								</span>
								Client Support
							</a>
						</li>
					</ul>
				</div>
				<div>
					<h1>Company</h1>
					<ul>
						<li>
							<a href="">
								<span>
									<i class="fa-solid fa-chevron-right"></i>
								</span>
								Home
							</a>
						</li>
						<li>
							<a href="">
								<span>
									<i class="fa-solid fa-chevron-right"></i>
								</span>
								About
							</a>
						</li>
						<li>
							<a href="">
								<span>
									<i class="fa-solid fa-chevron-right"></i>
								</span>
								Blog
							</a>
						</li>
						<li>
							<a href="">
								<span>
									<i class="fa-solid fa-chevron-right"></i>
								</span>
								Contact us
							</a>
						</li>
					</ul>
				</div>
				<div>
					<h1>Quick Links</h1>
					<ul>
						<li>
							<a href="">
								<span>
									<i class="fa-solid fa-chevron-right"></i>
								</span>
								Terms & Conditions
							</a>
						</li>
						<li>
							<a href="">
								<span>
									<i class="fa-solid fa-chevron-right"></i>
								</span>
								User's Guide
							</a>
						</li>
						<li>
							<a href="">
								<span>
									<i class="fa-solid fa-chevron-right"></i>
								</span>
								Support Center
							</a>
						</li>
						<li>
							<a href="">
								<span>
									<i class="fa-solid fa-chevron-right"></i>
								</span>
								Press Info
							</a>
						</li>
					</ul>
				</div>

				<div>
					<h1>Have a Questions?</h1>
					<ul className="question">
						<li>
							<span class="icon fa fa-map marker"></span>
							<p>203 Fake St. Mountain View, San Francisco, California, USA</p>
						</li>
						<li>
							<span class="icon fa fa-phone"></span>
							<p>+2 392 3929 210</p>
						</li>
						<li>
							<span class="icon fa fa-paper-plane pr-4"></span>
							<p>info@yourdomain.com</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Footer;
