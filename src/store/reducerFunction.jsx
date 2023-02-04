
import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = { width: 40, height: 40 };

const divSlice = createSlice(
    {
        name: 'divChange',
        initialState: initialState,
        reducers: {
            increaseWidth(state, action) {
                state.width = state.width + action.payload
            },
            decreaseWidth(state, action) {
               state.width = state.width - action.payload
            },
            increaseHeight(state, action) {
                state.height = state.height + action.payload
            }
        }
    }
)
export const divActions = divSlice.actions;

export const store = configureStore({
    reducer: divSlice.reducer,
})