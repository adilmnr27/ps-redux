//no need to put this file into seprate folder as we will only have one store

import { createStore,applyMiddleware, compose } from 'redux'; //middleware is not necessary
import rootReducer from './reducers/rootReducer';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'
import thunk from 'redux-thunk';

//applyMiddleware(reduxImmutableStateInvariant() do not foreget parenthesesis
export default function configureStore(initialState){
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose //add support for dev tools
    return createStore(
        rootReducer,
        initialState,
        composeEnhancers(applyMiddleware(thunk,reduxImmutableStateInvariant()))
        );
}