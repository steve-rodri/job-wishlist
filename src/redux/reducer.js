import * as types from "./constants";

export default function reducer(state = [], action) {
  switch (action.type) {
    case types.ADD_JOB:
      state = [...state, action.payload];
      return state;
    default:
      return state;
  }
}
