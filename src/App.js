import { Route, Routes } from 'react-router-dom';
import PokemonsPage from './pages/PokemonsPage';
import Header from './components/Header';
import MyPokemonsPage from './pages/MyPokemonsPage';

function App() {
	return (
		<div>
			<Header />
			<Routes>
				<Route path="/" element={<PokemonsPage />} />
				<Route path="/:mydex" element={<MyPokemonsPage />} />
			</Routes>
		</div>
	);
}

export default App;
