import { useState } from "react";
import Welcome from "./components/Welcome";
import User from "./components/User";
import Footer from "./components/Footer";
import "./App.css";

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [userInput, setUserInput] = useState("");

	return (
		<div className="App">
			{isLoggedIn ? (
				<Welcome user={userInput} setIsLoggedIn={setIsLoggedIn} />
			) : (
				<User setUser={setUserInput} setIsLoggedIn={setIsLoggedIn} />
			)}
			<Footer />
		</div>
	);
}

export default App
