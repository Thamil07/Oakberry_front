import React, { useState } from "react";
import "./Filter.css";
import { CiSearch } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import Button from "../Button/Button";
import { useNavigate, NavLink, useParams } from "react-router-dom";
import axios from "axios";

function Filter() {
	const navigate = useNavigate();
	const [search, setsearch] = useState({
		keyword: "",
		type: "",
		location: "",
		price: "",
	});
	const handleSearch = (e) => {
		const { name, value } = e.target;
		setsearch((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};
	const handleSearchClick = () => {
		const query = new URLSearchParams(search).toString();
		navigate(`/properties?${query}`);
	};

	const filter = async () => {
		const response = await axios.get(
			"http://127.0.0.1:5555/api/property/get_all_property",
			{ params: search }
		);
	};

	return (
		<div className="filter ">
			<div className="bt">
				<NavLink to="/agent" activeClassName="active_bt">
					<Button text="Buy Properties" />
				</NavLink>
				<NavLink to="/login" activeClassName="active_bt">
					<Button text="Rent Properties" />
				</NavLink>
			</div>
			<div className="searchbar container">
				<div className="option">
					<p className="mb-0">Enter Keyword</p>
					<div>
						<CiSearch />
						<input
							type="text"
							name="keyword"
							value={search.keyword}
							id="keyword"
							onChange={handleSearch}
							placeholder="Enter Keyword"></input>
					</div>
				</div>
				<div className="option">
					<p className="mb-0">Property_Type</p>
					<div>
						<select
							name="type"
							value={search.type}
							id="type"
							onChange={handleSearch}
							required>
							<option value="">Select Type</option>
							<option value="Sale">Sale</option>
							<option value="Rent">Rent</option>
						</select>
					</div>
				</div>
				<div className="option">
					<p className="mb-0">Location</p>
					<div>
						<IoLocationOutline />
						<input
							type="text"
							name="location"
							value={search.location}
							id="location"
							onChange={handleSearch}
							placeholder="Enter Location"></input>
					</div>
				</div>
				<div className="option prlt">
					<p className="mb-0">Price Limit</p>
					<div>
						<FaAngleDown />
						<input
							type="text"
							name="price"
							value={search.price}
							id="price"
							onChange={handleSearch}
							placeholder="Enter Price"></input>
					</div>
				</div>
				<button onClick={handleSearchClick} className="option Search">
					SEARCH
				</button>
			</div>
		</div>
	);
}

export default Filter;
