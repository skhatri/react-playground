class FibonacciService {
  constructor() {
    this._m = {};
  }

  findNthFibonacci(n) {
    if (this._m[n]) {
      return { value: this._m[n], cache_hit: "yes" };
    }
    let items = new Array(n + 1);
    for (var i = 0; i <= n; i++) {
      if (i == 0) {
        items[i] = 0;
      } else if (i === 1 || i === 2) {
        items[i] = 1;
      } else {
        items[i] = items[i - 2] + items[i - 1];
      }
      this._m[i] = items[i];
    }
    return { value: items[n], cache_hit: "no" };
  }
}
const fibonacciService = new FibonacciService();
export default fibonacciService;
