import { createStore } from "redux";

const reducer = function(state, action) {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return { username: action.payload };
    default:
      return state;
  }
};

const initialState = { username: "" };

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
