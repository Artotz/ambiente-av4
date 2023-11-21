prime = require("../functions/PrimeNumber");

test("IsPrimeNumber(4) => false", () => {
  expect([prime(4)]).toMatchObject([false]);
});

test("IsPrimeNumber(20323) => true", () => {
  expect([prime(20323)]).toMatchObject([true]);
});
