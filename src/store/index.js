import { createStore } from "redux";

const reducersFn = (state = { counter: 0 }, action) => {
  //Synchronous Funtion
  //we should not mutate the original state
  return state;
};

const store = createStore(reducersFn);

export default store;
