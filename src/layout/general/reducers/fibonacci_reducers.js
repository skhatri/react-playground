const initState = { num: 0, result: 0, cache_hit: false };

export function fibnacciReducer(state = initState, action) {
  console.log("fibonacci reducer", state, "action", action);
  switch (action.type) {
    case "FIBONACCI":
      console.log("reducer result", action.data);
      return action.data;
    case "FIBONACCI_INPUT":
      console.log("input reducer result", action.data);
      return action.data;
    default:
      return state;
  }
}
