import { createStore } from "redux";
// import { componseWithDevTools } from "redux-devtools-extension/developmentOnly";
import { loadState, saveState } from "./localStorage";
// import thunk from "redux-thunk";
import throttle from "lodash/throttle";

import rootReducer from "./reducer";

// const middleware = applyMiddleware(thunk);

const configureStore = () => {
  const persistedState = loadState();
  const store = createStore(
    rootReducer,
    persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  store.subscribe(
    throttle(() => {
      saveState(store.getState());
    }, 1000)
  );
  return store;
};

export default configureStore();
