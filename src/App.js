import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import Home from "./pages/Home.js";
import Menu from "./pages/Menu.js";
import About from "./pages/About.js";
import Contact from "./pages/Contact.js";

function App() {
	return (
		<div className="App">
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" exact element={<Home />} />
					<Route path="/menu" exact element={<Menu />} />
					<Route path="/about" exact element={<About />} />
					<Route path="/contact" exact element={<Contact />} />
				</Routes>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
