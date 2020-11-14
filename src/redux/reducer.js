import {combineReducers} from 'redux';
import shopReducer from './Shopping/shopping-reducer'
const reducer = combineReducers({
    shop: shopReducer,
});

export default reducer;