import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Component/Header/Header";
import Home from "./Pages/Home/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import About_Page from "./Pages/About_Page/About_Page";
import Agent from "./Pages/Agent/Agent";
import Footer from "./Component/Footer/Footer";
import Properties from "./Pages/Properties/Properties_Page";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import Contact from "./Pages/Contact/Contact";
import Add_Property from "./Pages/Add_Property/Add_Property";

function App() {
	useEffect(() => {
		AOS.init({
			duration: 1500, // Animation duration in milliseconds
			offset: 100,
		});
	}, []);
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/add_property" element={<Add_Property />} />
				<Route
					path="/*"
					element={
						<>
							<Header />
							<Routes>
								<Route path="/" element={<Home />} />
								<Route path="/about" element={<About_Page />} />
								<Route path="/properties" element={<Properties />} />
								<Route path="/agent" element={<Agent />} />
								<Route path="/contact" element={<Contact />} />
							</Routes>
							<Footer />
						</>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
