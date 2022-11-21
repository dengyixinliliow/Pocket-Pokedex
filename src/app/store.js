import { configureStore } from '@reduxjs/toolkit';
import dexSlicer from '../features/dexSlicer';

export default configureStore({
	reducer: {
		dex: dexSlicer,
	},
});
