import todo from "../models/todoModel";

const todoReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD":
      return [action.payload, ...state];

    case "GET":
      return action.payload;
    case "Update":
      return action.payload;
    case "Delete":
      return action.payload;

    default:
      return state;
  }
};

export default todoReducer;
