import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from "redux";
import {restaurantReducer}from "./reducers/restaurantReducer";

import thunk from "redux-thunk";

const reducer = combineReducers({
  restaurants:restaurantReducer,
});

let initialState = {};

const composeenhancers =
  window.AbortController.__REDUX_DEVTOOLS_EXTENTION_COMPOSE__ || compose;
const middleware = [thunk];
const store = createStore(
  reducer,initialState,
  composeenhancers(applyMiddleware(...middleware))
);

export default store;
