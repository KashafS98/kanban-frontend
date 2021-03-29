const initialState = {
  taskStates: {},
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_TASK_LIST":
      return {
        ...state,
        taskStates: action.payload,
      };

    default:
      return state;
  }
}
