/*
import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from "./reducers";
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'

export default function configureStore(initialState) {

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // Redux devtools

    return createStore(rootReducer, initialState,
        applyMiddleware(reduxImmutableStateInvariant())); // this will warm us if we accidentally mutate Redux state
}*/