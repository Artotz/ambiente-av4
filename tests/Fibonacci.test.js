fibonacci = require("../functions/Fibonacci");

test("Fibonacci(1) => 1", () => {
  expect([fibonacci(1)]).toMatchObject([1]);
});

test("Fibonacci(10) => 35", () => {
  expect([fibonacci(5)]).toMatchObject([5]);
});
