import {combineReducers} from 'redux';
import cartProducts from "./cartReducer";

const rootReducer = combineReducers({
    cartProducts
});

export default rootReducer;