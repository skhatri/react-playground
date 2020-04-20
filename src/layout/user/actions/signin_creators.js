export function increment() {
  console.log("action: increment");
  return {
    type: "INC_COUNTER",
  };
}

export function decrement() {
  console.log("action: decrement");
  return {
    type: "DEC_COUNTER",
  };
}
