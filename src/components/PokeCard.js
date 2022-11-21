import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useLazyQuery, gql } from '@apollo/client';
import { useDispatch } from 'react-redux';
import { add, remove } from '../features/dexSlicer';
import Box from '@mui/material/Box';

//query for getting pokemon's skills
const GET_POKEMON_ATTACK = gql`
	query pokemon($id: String, $name: String) {
		pokemon(id: $id, name: $name) {
			id
			name
			attacks {
				fast {
					name
					type
					damage
				}
				special {
					name
					type
					damage
				}
			}
		}
	}
`;

const PokeCard = ({
	image,
	name,
	classification,
	id,
	weight,
	height,
	types,
	resistant,
	weaknesses,
	page,
	handleClick,
}) => {
  //control the dialog which dispaly detail information about certain pokemon
	const [open, setOpen] = useState(false);

	const [getPokemonAttack, { data, error }] = useLazyQuery(GET_POKEMON_ATTACK, {
		variables: {
			id,
			name,
		},

    //in the case of successfully fetching data from api, display the dialog/detail information
		onCompleted: (data) => {
			setOpen(true);
		},

		onerror: (error) => {
			console.log(error);
		},
	});

	const handleClose = () => {
		setOpen(false);
	};

  // add pokemon to global state pokedex
	const dispatch = useDispatch();

	const handleAdd = (id) => {
		dispatch(add(id));
		handleClick();
	};

	return (
		<Card sx={{ maxWidth: '80%', margin: '5%', height: '100%' }}>
			<Box sx={{ margin: '0.7rem', Width: '100%', height: 300 }}>
				<CardMedia
					component="img"
					image={image}
					alt={name}
					sx={{ maxWidth: '100%', height: 300, objectFit: 'contain' }}
				/>
			</Box>

			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{name}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					{classification}
				</Typography>
			</CardContent>
			<CardActions>
				<Button
					size="small"
					onClick={(e) => getPokemonAttack(id, name)}
					sx={{ color: '#CC0000' }}
				>
					Learn More
				</Button>
				<Dialog
					open={open}
					onClose={handleClose}
					aria-labelledby="alert-dialog-title"
					aria-describedby="alert-dialog-description"
				>
					<DialogTitle id="alert-dialog-title">{name}</DialogTitle>
					<DialogContent>
						<ul>
							<li>classification: {classification}</li>
							<li>
								Weight: {weight.minimum} ~ {weight.maximum}
							</li>
							<li>
								Height: {height.minimum} ~ {height.maximum}
							</li>
							<li>Types: {types.join(', ')}</li>
							<li>Resistant: {resistant.join(', ')}</li>
							<li>Weaknesses: {weaknesses.join(', ')}</li>
							{data ? (
								<li>
									Abilities(fast):{' '}
									{data.pokemon.attacks.fast.map((obj) => obj.name).join(', ')}{' '}
								</li>
							) : (
								<span></span>
							)}
							{data ? (
								<li>
									Abilities(special):{' '}
									{data.pokemon.attacks.special.map((obj) => obj.name).join(', ')}{' '}
								</li>
							) : (
								<span></span>
							)}
						</ul>
						<DialogContentText id="alert-dialog-description"></DialogContentText>
					</DialogContent>
				</Dialog>
				{page === 'pokemonsPage' ? (
					<Button
						size="small"
						onClick={() => handleAdd(id)}
						sx={{ color: '#CC0000' }}
					>
						Add
					</Button>
				) : (
					<Button
						size="small"
						onClick={() => dispatch(remove(id))}
						sx={{ color: '#CC0000' }}
					>
						Remove
					</Button>
				)}
			</CardActions>
		</Card>
	);
};

export default PokeCard;
