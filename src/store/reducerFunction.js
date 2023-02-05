import { createSlice, configureStore } from '@reduxjs/toolkit';
const initialState = { width: 40, height: 20 };

const divSlice = createSlice(
	{
		name: 'divChange',
		initialState: initialState,
		reducers: {
			increaseWidth(state, action) {
				state.width = state.width + action.payload;
			},
			decreaseWidth(state, action) {
				state.width = state.width - action.payload;
			},
			increaseHeight(state, action) {
				state.height = state.height + action.payload;
			},

		}
	}
);

const toggleSlice = createSlice({
	name: 'toggleChange',
	initialState: { toggle: false },
	reducers: {
		toggleButton(state) {
			state.toggle = !state.toggle;
		}
	}
});

export const divActions = divSlice.actions
export const toggleActions = toggleSlice.actions

export const store = configureStore({
	reducer: { divChange: divSlice.reducer, toggleChange: toggleSlice.reducer }
});