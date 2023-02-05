import { createStore, Reducer } from 'redux';


export type State = { width?: number; height?: number };
interface MyAction {
    type: string;
    amount?: number;
}

const formReducer: Reducer<State, MyAction> = (state, action: MyAction):State => {
    switch (action.type) {
        case 'DECREASE_WIDTH':
            return { ...state, width: state?.width! - action?.amount!  };
        case 'INCREASE_WIDTH':
            return { ...state, width: state?.width! + action?.amount! };
        case 'SET_HEIGHT':
            return { ...state, height: state?.height! + action?.amount! };
        default:
            return state!;
    }
};

const initialState: State = { width: 40, height: 40 };

export const store = createStore(formReducer, initialState)