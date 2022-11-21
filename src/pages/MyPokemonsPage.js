import React from 'react';
import { useSelector } from 'react-redux';
import { usePokemons } from '../hooks/usePokemons';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import PokeCard from '../components/PokeCard';
import { Link } from 'react-router-dom';
import { Button, useMediaQuery, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import PokemonStats from '../components/PokemonStats';

const MyPokemonsPage = () => {
	const mydex = useSelector((state) => state.dex.value);
	const theme = useTheme();
	const matches_mid = useMediaQuery(theme.breakpoints.up('sm'));
	const matches_large = useMediaQuery(theme.breakpoints.up('md'));
	const { error, loading, data } = usePokemons();

	if (error) return <div>something wrong</div>;

	if (loading) return <div>Loading</div>;

	const pokemons = data.pokemons.filter((pokemon) =>
		mydex.some((p) => p.payload === pokemon.id)
	);

  //responsive design for imageList
	let image_col = 3;
	if (!matches_large) {
		image_col = 2;
	}
	if (!matches_mid) {
		image_col = 1;
	}

	return (
		<div>
			<Box
				sx={{
					display: matches_mid ? 'flex' : 'none',
					flexDirection: 'column',
					textAlign: 'center',
					margin: 10,
					height: 300,
					width: '80%',
				}}
			>
				<h3>See How your current team against the other types of pokemon!</h3>
				<PokemonStats
					pokemons={pokemons}
				/>
			</Box>

			<ImageList sx={{ width: '100%', height: '80%' }} cols={image_col}>
				{pokemons.map((pokemon) => {
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
								page="myPokemonsPage"
								handleClick={undefined}
							/>
						</ImageListItem>
					);
				})}
			</ImageList>

			<Link to="/">
				<Button
					sx={{
						position: 'fixed',
						right: 10,
						bottom: 10,
						backgroundColor: '#FFDE00',
						color: '#3B4CCA',
					}}
				>
					Return
				</Button>
			</Link>
		</div>
	);
};

export default MyPokemonsPage;
