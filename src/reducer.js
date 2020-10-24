export const initialState = {
  techno: "React",
};

const reducer = (state, action) => {
  //console.log(action);
  switch (action.type) {
    case "SET_THECHNO":
      return { ...state, techno: action.techno };
    default:
      return state;
  }
};

export default reducer;
