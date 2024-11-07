import React from "react";
import "./Small_Slider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import any modules you plan to use
import { Autoplay, Navigation, Pagination } from "swiper/modules";

function Small_Slider() {
	return (
		<div className="Testimonial_content">
			<h2>TESTINOMIAL</h2>
			<h1>Clients We Help</h1>
			<div className="container">
				<Swiper
					spaceBetween={35}
					navigation={false}
					breakpoints={{
						600: {
							slidesPerView: 1,
							spaceBetween: 5,
						},
						1024: {
							slidesPerView: 3,
							spaceBetween: 35,
						},
					}} // Disable navigation arrows
					pagination={{ clickable: true }} // Enable pagination (dots)
					autoplay={{ delay: 5000, disableOnInteraction: false }} // Automatically change slides every 5 seconds
					modules={[Navigation, Pagination, Autoplay]}>
					<SwiperSlide>
						<div className="details">
							<p>
								Far far away, behind the word mountains, far from the countries
								Vokalia and Consonantia, there live the blind texts.
							</p>
							<div className="agent_info">
								<img
									src="https://wallpapers.com/images/high/cool-profile-picture-minion-13pu7815v42uvrsg.webp"
									alt=""
								/>
								<div className="agent_info_a">
									<h1>Roger Scott</h1>
									<h2>Marketing Manager</h2>
								</div>
							</div>
              <div className="agent_quotes">
              <i class="fa-solid fa-quote-left"></i>
              </div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="details">
							<p>
								Far far away, behind the word mountains, far from the countries
								Vokalia and Consonantia, there live the blind texts.
							</p>
							<div className="agent_info">
								<img
									src="https://wallpapers.com/images/high/cool-profile-pictures-monkey-face-0jxwmq6bpm3hs9cb.webp"
									alt=""
								/>
								<div className="agent_info_a">
									<h1>Roger Scott</h1>
									<h2>Marketing Manager</h2>
								</div>
							</div>
              <div className="agent_quotes">
              <i class="fa-solid fa-quote-left"></i>
              </div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="details">
							<p>
								Far far away, behind the word mountains, far from the countries
								Vokalia and Consonantia, there live the blind texts.
							</p>
							<div className="agent_info">
								<img
									src="https://wallpapers.com/images/high/cool-profile-picture-minion-13pu7815v42uvrsg.webp"
									alt=""
								/>
								<div className="agent_info_a">
									<h1>Roger Scott</h1>
									<h2>Marketing Manager</h2>
								</div>
							</div>
              <div className="agent_quotes">
              <i class="fa-solid fa-quote-left"></i>
              </div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="details">
							<p>
								Far far away, behind the word mountains, far from the countries
								Vokalia and Consonantia, there live the blind texts.
							</p>
							<div className="agent_info">
								<img
									src="https://wallpapers.com/images/high/cool-profile-picture-minion-13pu7815v42uvrsg.webp"
									alt=""
								/>
								<div className="agent_info_a">
									<h1>Roger Scott</h1>
									<h2>Marketing Manager</h2>
								</div>
							</div>
              <div className="agent_quotes">
              <i class="fa-solid fa-quote-left"></i>
              </div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="details">
							<p>
								Far far away, behind the word mountains, far from the countries
								Vokalia and Consonantia, there live the blind texts.
							</p>
							<div className="agent_info">
								<img
									src="https://wallpapers.com/images/high/cool-profile-pictures-monkey-face-0jxwmq6bpm3hs9cb.webp"
									alt=""
								/>
								<div className="agent_info_a">
									<h1>Roger Scott</h1>
									<h2>Marketing Manager</h2>
								</div>
							</div>
              <div className="agent_quotes">
              <i class="fa-solid fa-quote-left"></i>
              </div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="details">
							<p>
								Far far away, behind the word mountains, far from the countries
								Vokalia and Consonantia, there live the blind texts.
							</p>
							<div className="agent_info">
								<img
									src="https://wallpapers.com/images/high/cool-profile-picture-minion-13pu7815v42uvrsg.webp"
									alt=""
								/>
								<div className="agent_info_a">
									<h1>Roger Scott</h1>
									<h2>Marketing Manager</h2>
								</div>
							</div>
              <div className="agent_quotes">
              <i class="fa-solid fa-quote-left"></i>
              </div>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	);
}

export default Small_Slider;
