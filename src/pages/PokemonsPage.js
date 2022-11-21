import React, { useState, useEffect } from 'react';
import PokeCard from '../components/PokeCard';
import TextField from '@mui/material/TextField';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { usePokemons } from '../hooks/usePokemons';
import { Button, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import Dialog from '@mui/material/Dialog';

const PokemonsPage = () => {
	const [query, setQuery] = useState('');
	const [pokemon_data, setPokemon_data] = useState([]);
  //control the alert
	const [open, setOpen] = React.useState(false);

	const handleClick = () => {
		setOpen(!open);
	};

  // refilter pokemon data each time the query updated in the search bar
	const handleSearch = (query) => {
		const results = data.pokemons.filter((pokemon) =>
			pokemon.name.toLowerCase().includes(query)
		);
		setPokemon_data(results);
	};

	const updateQuery = (query) => {
		setQuery(query.trim());
		handleSearch(query);
	};

	const { error, loading, data } = usePokemons();

	useEffect(() => {
		if (data) setPokemon_data(data.pokemons);
	}, [data]);

  // responsive design for imageList
	const theme = useTheme();
	const matches_mid = useMediaQuery(theme.breakpoints.up('sm'));
	const matches_large = useMediaQuery(theme.breakpoints.up('md'));

	let image_col = 3;
	if (!matches_large) {
		image_col = 2;
	}
	if (!matches_mid) {
		image_col = 1;
	}

	if (error) return <div>something wrong</div>;

	if (loading) return <div>Loading</div>;

	return (
		<div>
			<TextField
				id="outlined-basic"
				label="Seach"
				variant="outlined"
				sx={{
					mt: '1rem',
					width: '100%',
				}}
				value={query}
				onChange={(event) => updateQuery(event.target.value)}
			/>
			<div>
				<ImageList sx={{ width: '100%', height: '80%' }} cols={image_col}>
					{pokemon_data.map((pokemon) => {
						return (
							<ImageListItem key={pokemon.id}>
								<PokeCard
									image={pokemon.image}
									name={pokemon.name}
									classification={pokemon.classification}
									id={pokemon.id}
									weight={pokemon.weight}
									height={pokemon.height}
									types={pokemon.types}
									resistant={pokemon.resistant}
									weaknesses={pokemon.weaknesses}
									page="pokemonsPage"
                  handleClick={handleClick}
								/>
							</ImageListItem>
						);
					})}
				</ImageList>
			</div>
			<Link to="/:mydex">
				<Button
					sx={{
						position: 'fixed',
						right: 10,
						bottom: 10,
						backgroundColor: '#FFDE00',
						color: '#3B4CCA',
					}}
				>
					Go to your Pokédex
				</Button>
			</Link>
			<Dialog open={open} onClose={handleClick}>
				<Alert
					severity="success"
					sx={{
						position: 'fixed',
						top: '50%',
						left: '50%',
						margin: 0,
						marginTop: '-40px',
						marginLeft: '-100px',
						height: '80px',
						width: '180px',
					}}
				>
					You successfully added a pokemon to your pokédex!
				</Alert>
			</Dialog>
		</div>
	);
};

export default PokemonsPage;
