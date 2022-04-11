import { createStore } from "redux";
import taskreducer from "./Reducer/taskreducer";

export const store = createStore(
  taskreducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
