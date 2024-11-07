import React, { useEffect, useState } from "react";
import "./Properties_Page.css";
import Hero_Section from "../../Component/Hero_Section/Hero_Section";
import Filter from "../../Component/Filter/Filter";
// import Properties from "../../Data/Properties.json";
import PropertyCard from "../../Component/Properties_card/PropertyCard";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import secureinstance from "../../Interceptor/Interceptor";

function Properties_Page() {
	const [searchParams] = useSearchParams();
	const [Properties, setProperties] = useState([]);
	useEffect(() => {
		const fetchProperties = async () => {
			try {
				const response = await secureinstance.get(
					"/property/get_all_property",
					{
						params: Object.fromEntries(searchParams),
					}
				);
				setProperties(response.data);
			} catch (error) {
				console.error("Error fetching properties:", error);
			}
		};
		fetchProperties();
	}, [searchParams]); // Add searchParams to the dependency array

	console.log(Properties);

	const [currentPage, setCurrentPage] = useState(1);
	const propertiesPerPage = 8;

	// Calculate the index of the last and first property on the current page
	const lastPropertyIndex = currentPage * propertiesPerPage;
	const firstPropertyIndex = lastPropertyIndex - propertiesPerPage;
	const currentProperties = Properties.slice(
		firstPropertyIndex,
		lastPropertyIndex
	);

	// Calculate the total number of pages
	const totalPages = Math.ceil(Properties.length / propertiesPerPage);

	// Function to handle page changes
	const handlePageChange = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

	// Function to handle next and previous buttons
	const handleNextPage = () => {
		if (currentPage < totalPages) {
			setCurrentPage(currentPage + 1);
		}
	};

	const handlePreviousPage = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1);
		}
	};

	return (
		<div className="parent_properties">
			<div className="head_properties">
				<Hero_Section pagename="Properties" />
				<Filter />
			</div>
			{currentProperties && currentProperties.length > 0 ? (
				<>
					<div className="feature-properties container">
						{currentProperties.map((property, index) => (
							<PropertyCard key={index} property={property} />
						))}
					</div>
					{/* Pagination Controls */}
					<div className="pagination">
						<button onClick={handlePreviousPage} disabled={currentPage === 1}>
							Prev
						</button>
						{Array.from({ length: totalPages }, (_, index) => (
							<button
								key={index + 1}
								onClick={() => handlePageChange(index + 1)}
								className={currentPage === index + 1 ? "active" : ""}>
								{index + 1}
							</button>
						))}
						<button
							onClick={handleNextPage}
							disabled={currentPage === totalPages}>
							Next
						</button>
					</div>
				</>
			) : (
				<div className="no-data">
					<p>No Data found on your given filters.</p>
				</div>
			)}
		</div>
	);
}

export default Properties_Page;
