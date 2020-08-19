import * as types from "./constants";

export const addJob = (job) => ({
  type: types.ADD_JOB,
  payload: job,
});
