sum = require("../functions/Sum");

test("Sum([1,2,3,4,5]) => 15", () => {
  expect([sum([1, 2, 3, 4, 5])]).toMatchObject([15]);
});

test("Sum([]) => 0", () => {
  expect([sum([])]).toMatchObject([0]);
});
