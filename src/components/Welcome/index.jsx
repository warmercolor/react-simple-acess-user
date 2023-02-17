import "./style.css";

function WelcomePage({ user, setIsLoggedIn }) {
	const handleLogout = () => {
		setIsLoggedIn(false);
	};

	return (
		<div>
			<div className="duck-active">🦆</div>
			<div className="container logout">
				<h1>Bem-vindo <span>{user}</span>!</h1>
				<hr />
				<button onClick={handleLogout}>Sair</button>
			</div>
		</div>
	)
}

export default WelcomePage