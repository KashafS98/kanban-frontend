const initialState = {
  taskStates: {},
  tasks: [],
};

// Use the initialState as a default value
export default function appReducer(state = initialState, action) {
  // The reducer normally looks at the action type field to decide what happens
  switch (action.type) {
    case "ADD_TASK":
      break;
    case "ADD_TASK_STATE":
      break;

    case "EDIT_TASK":
      // const {
      //   currentState,
      //   name,
      //   description,
      //   featuredImg,
      //   id
      // } = action.payload;
      // const newState = {
      //   ...state.taskStates,
      //   [currentState]: {
      //     ...currentState,
      //     tasks: [
      //       ...currentState.tasks,
      //       {
      //         id,
      //         name,
      //         description,
      //         featuredImg
      //       }
      //     ]
      //   }
      // }
      // return {
      //   ...state,
      //   taskStates: newState
      // }
      break;
    case "UPDATE_TASK_STATE":
      break;

    case "DELETE_TASK":
      break;

    case "DELETE_TASK_STATE":
      break;

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
