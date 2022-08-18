import { composeWithDevTools } from "redux-devtools-extension";
import {
  legacy_createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import { countReducer } from "../count/reducers";
import { routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";

export default function createStore(history) {
  return reduxCreateStore(
    combineReducers({
      counter: countReducer,
    }),
    composeWithDevTools(applyMiddleware(routerMiddleware(history), thunk))
  );
}
