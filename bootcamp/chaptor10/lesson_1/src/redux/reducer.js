import { combineReducers } from "redux";
import { ADD_TODO, DELETE_TODO, EDIT_TODO } from "./constants";

const INIT_TODO_STATE = {
  todos: [],
};

// action = {
//   type: "ADD_TODO",
// payload:{
//   id:1,
//   title:"HELLO WORLD",
//   status: false
// }
// }
const TodoReducer = (state = INIT_TODO_STATE, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state,
        todos: [...state.todos,
        action.payload
      ]
      };
    case DELETE_TODO:
      return { ...state };
    case EDIT_TODO:
      return { ...state };
    default:
      return state;
  }
};

export default combineReducers({
  todo: TodoReducer,
});
