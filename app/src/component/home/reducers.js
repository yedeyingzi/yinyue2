const initialState = {
  n: 1,
};

export default (state = initialState, { type, res }) => {
  if (type === "REI") {
    console.log(1);
    var newState = JSON.parse(JSON.stringify(state));
    newState.n = res;
    console.log(newState);
    return newState;
  }
  return state;
};
