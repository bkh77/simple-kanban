import * as types from "./actionTypes";

export function addTask(obj) {
  return {
    type: types.ADD_TASK,
    payload: obj,
  };
}

export function removeTask(id) {
  return {
    type: types.REMOVE_TASK,
    payload: id,
  };
}

export function editTask(obj) {
  return {
    type: types.EDIT_TASK,
    payload: obj,
  };
}
