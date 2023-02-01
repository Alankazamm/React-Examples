import { createStore } from 'redux'; // Notice that the createStore function is deprecated, //jslint-ignore-line
const formReducer = (state = { width: 20} , action) => { // a better and modern alternative is to use configureStore instead
    switch(action.type) {

        case 'increase':
            return { width: state.width + action.amount };
        
        case 'decrease':
            return {  width: state.width - action.amount };
        default:
            return state;
    }
}

export const store = createStore(formReducer) // 👈 I passed the initial state right here