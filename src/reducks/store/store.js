import { createStore as reduxCreateStore, combineReducers } from "redux";

//import reducers

import { UsersReducer } from "../users/reducers";

export default function createStore() {
  return reduxCreateStore(
    //redux의 createStore메소드의 별명
    combineReducers({
      users: UsersReducer,
    })
  );
}
