const initialState = {
  taskStates: {},
  tasks: [],
};

// Use the initialState as a default value
export default function appReducer(state = initialState, action) {
  // The reducer normally looks at the action type field to decide what happens
  switch (action.type) {
    case "UPDATE_TASK_LIST":
      return {
        ...state,
        taskStates: action.payload,
      };

    // Do something here based on the different types of actions
    default:
      return state;
  }
}
