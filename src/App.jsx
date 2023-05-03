import { useQuery } from "@tanstack/react-query"

function App() {

	// const { isLoading, error, data } = useQuery(['starWars'], () => fetch('https://swapi.dev/api/people/1').then(res => res.json()));
	const { isLoading, error, data } = useQuery(['starWars'], () => fetch('user/1').then(res => res.json()));

	if (isLoading) return 'Loading...';

	if (error) return 'An error has occurred: ' + error.message;

  return (
		<>
			{/* {data.name} */}
			{data.login}
    </>
  )
}

export default App
