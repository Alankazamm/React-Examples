import { createSlice, configureStore } from "@reduxjs/toolkit";
const initialState = { width: 40, height: 20 };

//TODO actions manager(createSlice)
const divSlice = createSlice({
	name: "divChange",
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
	},
});
//TODO store our actions from the slice object
export const divActions = divSlice.actions;

//TODO create our 'store' which gonna be used by the Provider
//(with configureStore)

export const store = configureStore({
	reducer: divSlice.reducer,
});
