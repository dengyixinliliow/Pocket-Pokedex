import React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import { Box, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

function Header() {
	const theme = useTheme();
	const matches_mid = useMediaQuery(theme.breakpoints.up('sm'));

	return (
		<AppBar sx={{ position: 'static', backgroundColor: '#3B4CCA' }}>
			<Box sx={{ margin: matches_mid ? 10 : 3 }}>
				{matches_mid ? (
					<img src="/pikachu.png" alt="pikachu" width="80rem" />
				) : (
					<span></span>
				)}
				<Typography variant="h3" component="div" sx={{ color: '#FFDE00' }}>
					Pocket Pokédex
				</Typography>
				<Typography variant="h5" component="div">
					{matches_mid ? 'Build your own pokédex!' : ''}
				</Typography>
			</Box>
		</AppBar>
	);
}

export default Header;
