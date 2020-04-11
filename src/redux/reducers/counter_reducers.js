export function counterReducer(state = { count: 0 }, action) {
  switch (action.type) {
    case "INC_COUNTER":
      console.log("INC COUNTER action");
      const incCount = state.count + 1;
      return Object.assign({}, state, {
        count: incCount,
        doubled: incCount * 2,
      });
    case "DEC_COUNTER":
      console.log("DEC COUNTER action");
      const decCount = state.count - 1;
      return Object.assign({}, state, {
        count: decCount,
        doubled: decCount * 2,
      });
    default:
      console.log("Action Type", action.type);
      return state;
  }
}
