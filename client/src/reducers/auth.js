let userState;
if (window.localStorage.getItem("auth")) {
  userState = JSON.parse(window.localStorage.getItem("auth"));
} else {
  userState = null;
}

//create user reducer function
// export const authReducer = (state = {name: "Kinley", role:"Seller"},
// action) => {
export const authReducer = (state = userState, action) => {
  switch (action.type) {
    case "LOGGED_IN":
      return { ...state, ...action.payload };
    case "LOGOUT":
      return action.payload;
    default:
      return state;
  }
};
