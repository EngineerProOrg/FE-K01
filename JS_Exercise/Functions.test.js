const assert = require("assert");
const { mergeAndSort, mergeAndSortExtreme } = require("./Functions");

try {
  assert.deepStrictEqual(
    mergeAndSort([1, 3, 5], [2, 4, 6]),
    [1, 2, 3, 4, 5, 6],
    "Merge and sort [1, 3, 5] and [2, 4, 6]"
  );
  assert.deepStrictEqual(
    mergeAndSort([7, 8], [8, 9, 10]),
    [7, 8, 9, 10],
    "Merge and sort [7, 8] and [8, 9, 10]"
  );
  assert.deepStrictEqual(
    mergeAndSort([], [2, 2, 3]),
    [2, 3],
    "Merge and sort [] and [2, 2, 3]"
  );
  assert.deepStrictEqual(
    mergeAndSort([-10, -5, 0], [-1, -5, 10]),
    [-10, -5, -1, 0, 10],
    "Merge and sort [-10, -5, 0] and [-1, -5, 10]"
  );
  console.log("All tests passed!");
} catch (error) {
  console.error("Some tests fail!");
  console.error(error.message);
}

try {
  assert.deepStrictEqual(
    mergeAndSortExtreme([1, 3, 5], [2, 4, 6]),
    [1, 6],
    "Smallest and largest of merged [1, 3, 5] and [2, 4, 6]"
  );
  assert.deepStrictEqual(
    mergeAndSortExtreme([7, 8], [8, 9, 10]),
    [7, 10],
    "Smallest and largest of merged [7, 8] and [8, 9, 10]"
  );
  assert.deepStrictEqual(
    mergeAndSortExtreme([], [2, 2, 3]),
    [2, 3],
    "Smallest and largest of merged [] and [2, 2, 3]"
  );
  assert.deepStrictEqual(
    mergeAndSortExtreme([-10, -5, 0], [-1, -5, 10]),
    [-10, 10],
    "Smallest and largest of merged [-10, -5, 0] and [-1, -5, 10]"
  );
  console.log("All extreme tests passed!");
} catch (error) {
  console.error("Some tests fail for extreme!");
  console.error(error.message);
}
