
export const reducer = (state = {} , action) => {
  switch (action.type) {
    case "BUY_CAKE":return {
        ...state,
        cake: state.cake - 1,
      };
    case "FETCH_USER":
      return {
        ...state,
        users: state.users.concat(action.payload)
      };
    default:
      return state;
  }
};
