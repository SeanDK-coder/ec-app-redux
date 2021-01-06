import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { connectRouter, routerMiddleware } from "connected-react-router";

//import reducers

import { UsersReducer } from "../users/reducers";

export default function createStore(history) {
  return reduxCreateStore(
    //redux의 createStore메소드의 별명
    combineReducers({
      router: connectRouter(history),
      users: UsersReducer,
    }),
    applyMiddleware(routerMiddleware(history), thunk) //도입하고 싶은 미들웨어 수만큼 추가 가능.
  );
}
