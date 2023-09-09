// import {
//     legacy_createStore as createStore,
//     combineReducers,
//     applyMiddleware,
//     compose,
//     } from "redux";
//     import thunk from "redux-thunk";
//     import { restaurantReducer } from './Reducers/restaurantReducer';
//     const reducer = combineReducers({
//     restaurants: restaurantReducer
//     });
//     let initialState = {};
//     const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//     const middlware = [thunk];
//     const store = createStore(
//     reducer,
//     initialState,
//     composeEnhancers(applyMiddleware(...middlware))
//     );
//     export default store;


import {
    legacy_createStore as createStore,
    combineReducers,
    applyMiddleware,
    compose,
    } from "redux";
    import thunk from "redux-thunk";
    import { restaurantReducer } from './Reducers/restaurantReducer';
    const reducer = combineReducers({
    restaurants: restaurantReducer
    });
    let initialState = {};
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const middlware = [thunk];
    const store = createStore(
    reducer,
    initialState,
    composeEnhancers(applyMiddleware(...middlware))
    );
    export default store;
    