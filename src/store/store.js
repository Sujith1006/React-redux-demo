import { createStore } from "redux";
import { reducer } from "../Reducer/Reducer";

const initialState = {
  cake: 20,
  users: [],
};
export const store = createStore(reducer,initialState);
