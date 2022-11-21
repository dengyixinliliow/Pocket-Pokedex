import React from 'react';
import Chart from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';

const PokemonStats = ({ pokemons }) => {
	const pokemonTypes = [
		'Normal',
		'Fire',
		'Water',
		'Grass',
		'Flying',
		'Fighting',
		'Poison',
		'Electric',
		'Ground',
		'Rock',
		'Psychic',
		'Ice',
		'Bug',
		'Ghost',
		'Steel',
		'Dragon',
		'Dark',
		'Fairy',
	];
  if (pokemons) {
	let pokemonTypes_map = new Map();

	pokemonTypes.map((el) => pokemonTypes_map.set(el, 0));

	for (let i = 0; i < pokemons.length; i++) {
		const resistant = pokemons[i].resistant;
		const weaknesses = pokemons[i].weaknesses;

		for (let i = 0; i < resistant.length; i++) {
			console.log(resistant[i]);
			pokemonTypes_map.set(resistant[i], pokemonTypes_map.get(resistant[i]) + 1);
		}

		for (let i = 0; i < weaknesses.length; i++) {
			console.log(weaknesses[i]);
			pokemonTypes_map.set(weaknesses[i], pokemonTypes_map.get(weaknesses[i]) - 1);
		}
	}

	console.log(pokemonTypes_map);

	const labels = pokemonTypes;
	const data = {
		labels: labels,
		datasets: [
			{
				label: "Your current team's resistants and weakness",
				backgroundColor: 'rgb(255, 99, 132)',
				borderColor: 'rgb(255, 99, 132)',
				data: Array.from(pokemonTypes_map.values()),
			},
		],
	};

  	return (
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
            width: '100%',
            height: '100%'
					}}
				>
					{pokemons ? <Bar data={data} /> : ''}
				</div>
			);
  }



};

export default PokemonStats;
