import React, { useEffect, useState } from "react";
import "./Add_Property.css";
import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";
import PropertyCard from "../../Component/Properties_card/PropertyCard";
import secureinstance from "../../Interceptor/Interceptor";
import { useNavigate } from "react-router-dom";


function Add_Property() {
	const navigate=useNavigate()
	const Token = localStorage.getItem("Token");
	console.log(Token)
	useEffect(() => {
		if (!Token) {
			navigate("/login");
		}
	}, []);

	const [propertyDetails, setPropertyDetails] = useState({
		property_agent: Token,
		propertyname: "",
		ogprice: "",
		offprice: "",
		location: "",
		type: "",
		bdroom: "",
		bhroom: "",
		size: "",
		image: "",
	});

	const handleChange = (e) => {
		const { name, value, files } = e.target;

		// Check if the input is a file input for "image"
		if (name === "image" && files) {
			setPropertyDetails((prevDetails) => ({
				...prevDetails,
				[name]: files[0], // Store the file object instead of its value
			}));
		} else {
			// Convert numeric values to numbers for specific fields
			const newValue = [
				"bdroom",
				"bhroom",
				"ogprice",
				"offprice",
				"size",
			].includes(name)
				? Number(value)
				: value;

			setPropertyDetails((prevDetails) => ({
				...prevDetails,
				[name]: newValue,
			}));
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const formData = new FormData();

		// Append all property details to formData
		for (const key in propertyDetails) {
			formData.append(key, propertyDetails[key]);
		}
		console.log(formData)
		try {
			const response = await secureinstance.post(
				"/property/add_property",
				formData,
				{ headers: { "Content-Type": "multipart/form-data" } } // Important for file upload
			);
			console.log("Response data:", response.data);
			alert("Successfully added property!");
		} catch (err) {
			alert("Error Property is not added successfully")
			console.error("Error message:", err.message);
		}
	};

	return (
		<div className="parent_add_property">
			<Header />
			<div className="property_get">
				<div className="property_first">
					<h1>
						<i className="fa-solid fa-puzzle-piece"></i>ADD PROPERTY FOR
						<p> SALES OR RENTAL</p>
					</h1>
					<form onSubmit={handleSubmit}>
						<div className="input_fields">
							<label htmlFor="propertyname">Property Name</label>
							<input
								type="text"
								name="propertyname"
								value={propertyDetails.propertyname}
								id="propertyname"
								onChange={handleChange}
								required
							/>
						</div>
						<div className="input_fields">
							<label htmlFor="ogprice">Original Price</label>
							<input
								type="number"
								name="ogprice"
								value={propertyDetails.ogprice}
								id="ogprice"
								onChange={handleChange}
								required
							/>
						</div>
						<div className="input_fields">
							<label htmlFor="offprice">Offered Price</label>
							<input
								type="number"
								name="offprice"
								value={propertyDetails.offprice}
								id="offprice"
								onChange={handleChange}
							/>
						</div>
						<div className="input_fields">
							<label htmlFor="location">Location</label>
							<input
								type="text"
								name="location"
								value={propertyDetails.location}
								id="location"
								onChange={handleChange}
								required
							/>
						</div>
						<div className="input_fields">
							<label htmlFor="type">Type</label>
							<select
								name="type"
								value={propertyDetails.type}
								id="type"
								onChange={handleChange}
								required>
								<option value="">Select type</option>
								<option value="Sale">Sale</option>
								<option value="rent">Rent</option>
							</select>
						</div>
						<div className="input_fields">
							<label htmlFor="bdroom">Bedrooms</label>
							<input
								type="number"
								name="bdroom"
								value={propertyDetails.bdroom}
								id="bdroom"
								onChange={handleChange}
								required
							/>
						</div>
						<div className="input_fields">
							<label htmlFor="bhroom">Bathrooms</label>
							<input
								type="number"
								name="bhroom"
								value={propertyDetails.bhroom}
								id="bhroom"
								onChange={handleChange}
								required
							/>
						</div>
						<div className="input_fields">
							<label htmlFor="size">Size (in sq. ft.)</label>
							<input
								type="number"
								name="size"
								value={propertyDetails.size}
								id="size"
								onChange={handleChange}
								required
							/>
						</div>
						<div className="input_fields">
							<label htmlFor="image">Image</label>
							<input
								type="file"
								name="image"
								id="image"
								onChange={handleChange} // Handle file change event
								required // Optionally, make this field required
							/>
						</div>

						<button id="submit_bt" type="submit">
							Submit
						</button>
					</form>
				</div>
				<div className="property_second">{Token?
					<PropertyCard property={propertyDetails} />:null}
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default Add_Property;
