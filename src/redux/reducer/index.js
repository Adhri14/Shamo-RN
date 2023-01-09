import {combineReducers} from 'redux';
import {cartReducer} from './cart';
import {reducerWhislist} from './whislist';

const reducer = combineReducers({
    cartReducer,
    reducerWhislist,
});

export default reducer;
