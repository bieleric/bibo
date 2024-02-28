import { combineReducers } from 'redux';
import tabReducer from './tabs/tabReducer';
import bookReducer from './books/bookReducer';

const rootReducer = combineReducers({
    tabs: tabReducer,
    books: bookReducer,
});

export default rootReducer;
