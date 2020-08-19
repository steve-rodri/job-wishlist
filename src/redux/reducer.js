import * as types from "./constants";

export default function reducer(state = [], action) {
  switch (action.type) {
    case types.ADD_JOB:
      state = [...state, action.payload];
      return state;
    case types.DELETE_JOB:
      state = state.filter((job) => job.timeAdded !== action.payload.timeAdded);
      return state;
    default:
      return state;
  }
}
