import { createStore } from 'redux';
const formReducer = (state, action) => {
    switch (action.type) {

        case 'increaseWidth':
            return {
                ...state,
                width: state.width + action.amount
            };

        case 'decreaseWidth':
            return {
                ...state,
                width: state.width - action.amount
            };
        case 'increaseHeight':
            return {
                ...state,
                height: state.height + action.amount
            };
        default:
            return state;
    }
}

export const store = createStore(formReducer, { width: 40, height: 40 }) // 👈 I've passed the initial state right here