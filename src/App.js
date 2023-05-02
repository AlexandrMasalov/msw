import { useEffect, useState } from "react";

function App() {
	const [user, setUser] = useState('')

	useEffect(() => {
		fetch('/user')
			.then(response => response.json())
			.then(data => setUser(data.username))
	}, [])

  return (
		<div className="App">
			{user}
    </div>
  );
}

export default App;
