import { SWITCH_TAB } from './tabTypes';

const initialState = {
    currentTab: 'books',
};

const tabReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SWITCH_TAB: return {
            ...state,
            currentTab: action.payload,
        };
        default: return state;
    }
};

export default tabReducer;
