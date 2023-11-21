whole = require("../functions/WholeNumbers");

test("WholeNumbers([1.1,2,3.3]) => 1", () => {
  expect([whole([1.1, 2, 3.3])]).toMatchObject([1]);
});

test("WholeNumbers([1.0,2.2,3]) => 2", () => {
  expect([whole([1.0, 2.2, 3])]).toMatchObject([2]);
});
