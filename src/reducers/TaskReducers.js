// taskReducer.js
const initialState = [];

// taskReducer.js
const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, action.payload];
    case "TOGGLE_TASK":
      return state.map((task) =>
        task.id === action.payload ? { ...task, isDone: !task.isDone } : task
      );
    case "EDIT_TASK":
      return state.map((task) =>
        task.id === action.payload.taskId
          ? { ...task, description: action.payload.updatedDescription }
          : task
      );
     // taskReducer.js
case "DELETE_TASK":
  return state.filter((task) => task.id !== action.payload);
// taskReducer.js
case "SET_FILTER":
  return action.payload === "all"
    ? state
    : state.filter((task) => (action.payload === "done" ? task.isDone : !task.isDone));

      default:
        return state;
  }
};

export default taskReducer;
