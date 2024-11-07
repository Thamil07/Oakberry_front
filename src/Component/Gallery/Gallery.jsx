import React from "react";
import "./Gallery.css";

function Gallery() {
	return (
		<div className="parent_gallery">
			<div className="container-xl-fluid">
				<div className="galley_img">
					<img
						src="https://cdn.pixabay.com/photo/2015/10/20/18/57/furniture-998265_1280.jpg"
						alt=""
					/>
					<div className="gallery_icon">
						<i class="fa-solid fa-magnifying-glass"></i>
					</div>
				</div>
				<div className="galley_img">
					<img
						src="https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923_1280.jpg"
						alt=""
					/>
					<div className="gallery_icon">
						<i class="fa-solid fa-magnifying-glass"></i>
					</div>
				</div>
				<div className="galley_img">
					<img
						src="https://cdn.pixabay.com/photo/2017/09/09/18/25/living-room-2732939_1280.jpg"
						alt=""
					/>
					<div className="gallery_icon">
						<i class="fa-solid fa-magnifying-glass"></i>
					</div>
				</div>
				<div className="galley_img">
					<img
						src="https://cdn.pixabay.com/photo/2017/03/28/12/10/chairs-2181947_1280.jpg"
						alt=""
					/>
					<div className="gallery_icon">
						<i class="fa-solid fa-magnifying-glass"></i>
					</div>
				</div>
				<div className="galley_img">
					<img
						src="https://cdn.pixabay.com/photo/2016/08/26/15/06/home-1622401_1280.jpg"
						alt=""
					/>
					<div className="gallery_icon">
						<i class="fa-solid fa-magnifying-glass"></i>
					</div>
				</div>
				<div className="galley_img">
					<img
						src="https://cdn.pixabay.com/photo/2016/08/26/15/06/home-1622401_1280.jpg"
						alt=""
					/>
					<div className="gallery_icon">
						<i class="fa-solid fa-magnifying-glass"></i>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Gallery;
