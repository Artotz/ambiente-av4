sort = require("../functions/QuickSort");

var eNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var numbers = [9, 1, 8, 2, 7, 3, 6, 4, 5];
sort(numbers);
test("QuickSort([9,1,8,2,7,3,6,4,5]) => [1,2,3,4,5,6,7,8,9]", () => {
  expect(numbers).toMatchObject(eNumbers);
});

numbers = [9, 8, 7, 6, 5, 4, 3, 2, 1];
sort(numbers);
test("QuickSort([9,8,7,6,5,4,3,2,1]) => [1,2,3,4,5,6,7,8,9]", () => {
  expect(numbers).toMatchObject(eNumbers);
});
