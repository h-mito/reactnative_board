const sel_user = (state=-1, action) => {
  switch (action.type) {
    case "SELECT_USER":
      return action.id;
    default:
      return state;
  }
};

export default sel_user;
