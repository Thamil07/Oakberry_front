import React, { useEffect, useState } from "react";
import "./Feature_Properties.css";
import PropertyCard from "../Properties_card/PropertyCard";
import axios from "axios";
import secureinstance from "../../Interceptor/Interceptor";
function Feature_Properties() {
	const [Properties, setProperties] = useState([]);
	useEffect(() => {
		const fetchProperties = async () => {
			try {
				const response = await secureinstance.get("property/get_all_property");
				setProperties(response.data.slice(0, 4));
			} catch (error) {
				console.error("Error fetching properties:", error);
			}
		};

		fetchProperties();
	}, []);

	return (
		<div className="parent-feature">
			<p className="our">Our Properties</p>
			<h1>Featured Properties</h1>
			<div className="feature-properties container">
				{Properties.map((property, index) => (
					<PropertyCard key={index} property={property} />
				))}
			</div>
		</div>
	);
}

export default Feature_Properties;
