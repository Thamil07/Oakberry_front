import React from "react";
import "./Agent_Card.css";

function Agent_Card({ agent }) {
	return (
		<div className="Agent_card_parent">
			<div className="agent_img">
				<img src={agent.picture} alt={agent.name} />
			</div>
			<div className="Agent_card_detail">
				<div className="count">
					<p>LISTING</p>
					<p>{agent.propertiesCount} Properties</p>
				</div>
				<h1>{agent.name}</h1>
				<div className="social">
					<a href={agent.socialMedia.twitter}>
						<i class="fa-brands fa-twitter"></i>
					</a>
					<a href={agent.socialMedia.facebook}>
						<i class="fa-brands fa-facebook"></i>
					</a>
					<a href={agent.socialMedia.gmail}>
						<i class="fa-brands fa-google"></i>
					</a>
					<a href={agent.socialMedia.facebook}>
						<i class="fa-brands fa-instagram"></i>
					</a>
				</div>
			</div>
		</div>
	);
}

export default Agent_Card;
