gcd = require("../functions/GCD");

test("GCD(40, 60) => 20", () => {
  expect([gcd(40, 60)]).toMatchObject([20]);
});

test("GCD(11, 24) => 1", () => {
  expect([gcd(11, 24)]).toMatchObject([1]);
});
