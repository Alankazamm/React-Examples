import { createStore, Reducer } from 'redux';

export interface State {
    width: number;
    height: number;
}
interface MyAction {
    type: string;
    amount: number;
}
const formReducer:Reducer<State, MyAction> = (state:State = initialState, action) => {
    
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
const initialState: State = { width: 40, height: 40 };

export const store = createStore(formReducer)