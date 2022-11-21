import { createSlice } from '@reduxjs/toolkit';

export const dexSlicer = createSlice({
	name: 'dex',
	initialState: {
		value: [],
	},
	reducers: {
		add: (state, pokemon) => {
			state.value = [...state.value, pokemon];
		},
		remove: (state, pokemon) => {
			let arr = state.value.filter((item) => item.payload !== pokemon.payload);
			state.value = arr;
		},
	},
});

export const { add, remove } = dexSlicer.actions;

export default dexSlicer.reducer;
