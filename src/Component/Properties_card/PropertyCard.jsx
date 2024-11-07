import React from "react";
import moment from "moment";
import { MdOutlineBedroomChild } from "react-icons/md";
import { PiToilet } from "react-icons/pi";
import { FaHouseDamage } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
// import "./PropertyCard.css"; // Separate CSS for the card

function PropertyCard({ property }) {
	return (
		<div className="feature-property-card">
			<div className="property_img">
				<img src={property.image} alt={property.location} />
				<div className="price_list">
					{property.offprice ? (
						<>
							<span className="ogprice-dimm">
								${property.ogprice?.toLocaleString() || 0}
							</span>
							<span className="offprice">
								${property.offprice?.toLocaleString() || 0}
							</span>
						</>
					) : (
						<span className="ogprice">
							${property.ogprice?.toLocaleString() || 0}
						</span>
					)}
				</div>
			</div>
			<div className="all_details">
				<div className="details_top">
					<div className="agent_details">
						<img
							src={property.property_agent.picture}
							alt={property.property_name}
						/>
						<p>{property.property_agent.name}</p>
					</div>
					<p className="date">
						{property.date
							? moment(property.date).fromNow()
							: "Date not available"}
					</p>
				</div>
				<div className="all_property_details">
					<div className="property_details">
						<p className="pname">{property.property_name}</p>
						<div className="plocation">
							<p className="picon">
								<MdLocationPin color="green" />
								{property.location}
								<span className={property.type === "Sale" ? "sale" : "rent"}>
									{property.type}
								</span>
							</p>
						</div>
					</div>
					<div className="property_size">
						<div className="icons">
							<MdOutlineBedroomChild />
							<p>{property.bdroom}</p>
						</div>
						<div className="icons">
							<PiToilet />
							<p>{property.bhroom}</p>
						</div>
						<div className="icons">
							<FaHouseDamage />
							<p>{property.size?.toLocaleString() || 0}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default PropertyCard;
