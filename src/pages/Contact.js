import React from "react";
import pizzaContact from "../assets/pizzaContact.jpg";
import "../styles/Contact.css";

function Contact() {
	return (
		<div className="contact">
			<div
				className="leftSide"
				style={{ backgroundImage: `url(${pizzaContact})` }}
			></div>
			<div className="rightSide">
				<h1>Contact us</h1>
				<form id="contact-form" method="POST">
					<label htmlFor="fullName">Full name</label>
					<input
						name="fullName"
						placeholder="Type your full name"
						type="text"
					/>
					<label htmlFor="fullEmail">Email</label>
					<input name="fullEmail" placeholder="Type your email" type="email" />
					<label htmlFor="fullMessage">Message</label>
					<textarea
						name="fullMessage"
						rows="6"
						placeholder="Type your message"
						required
					></textarea>
					<button type="submit">Send</button>
				</form>
			</div>
		</div>
	);
}

export default Contact;
