const renderReducer = (state = false, action) => {
  switch (action.type) {
    case "Get":
      return state;

    case "Change":
      return action.payload;

    default:
      return state;
  }
};

export default renderReducer;
