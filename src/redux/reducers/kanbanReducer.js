import * as types from "../action/actionTypes";

export default function kanbanReducer(
  state = {
    tasks: [
      { id: 1, title: "tasks1 ", status: "Open" },
      { id: 2, title: "tasks2", status: "Open" },
      { id: 3, title: "tasks2", status: "Completed" },
      { id: 4, title: "tasks1 ", status: "Open" },
      { id: 5, title: "tasks2", status: "Inprogress" },
      { id: 6, title: "tasks2", status: "Completed" },
    ],
  },
  action
) {
  switch (action.type) {
    case types.ADD_TASK:
      const tasks = [...state.tasks];
      tasks.push(action.payload);
      state = { ...state, tasks };
      break;
    case types.EDIT_TASK:
      console.log(action.payload);
      const clone = [...state.tasks];
      clone.splice(
        clone.findIndex((i) => i.id === action.payload.id),
        1,
        action.payload
      );
      state = { ...state, tasks: clone };
      break;
    case types.REMOVE_TASK:
      const filtered = state.tasks.filter((i) => i.id !== action.payload);
      state = { ...state, tasks: filtered };
      break;
    default:
  }
  return state;
}
