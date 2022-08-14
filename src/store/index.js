import { createStore } from "redux";

const reducersFn = (state = { counter: 0 }, action) => {
  //Synchronous Funtion
  //we should not mutate the original state
  if (action.type === "INC") {
    return { counter: state.counter + 1 };
  }
  if (action.type === "DEC") {
    return { counter: state.counter - 1 };
  }
  if (action.type === "ADD") {
    return { counter: state.counter + action.payload };
  }
  return state;
};

const store = createStore(reducersFn);

export default store;
