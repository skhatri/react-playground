import fibonacciService from "../services/fibonacci";

export function nthFibonacci(num) {
  console.log("received ", num);
  let fibResult = fibonacciService.findNthFibonacci(num);
  return {
    type: "FIBONACCI",
    data: {
      num: num,
      result: fibResult.value,
      cache_hit: fibResult.cache_hit,
    },
  };
}

export function updateFibInput(value) {
  return {
    type: "FIBONACCI_INPUT",
    data: {
      num: value,
    },
  };
}
