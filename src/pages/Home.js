import React from "react";
import { Link } from "react-router-dom";
import pizzaBackground from "../assets/pizzaBackground.jpeg";
import "../styles/Home.css";

function home() {
	return (
		<div
			className="home"
			style={{ backgroundImage: `url(${pizzaBackground})` }}
		>
			<div className="headerContainer">
				<h1>Scottish Pizzeria</h1>
				<p>Pizza. Whenever you're hungry.</p>
				<Link to="/menu">
					<button id="order">ORDER NOW</button>
				</Link>
			</div>
		</div>
	);
}

export default home;
