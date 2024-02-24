const assert = require("assert");
const {
  totalElectronicsPrice,
  discountProducts,
  categorizedProducts,
} = require("./Arrays");

try {
  assert.strictEqual(
    totalElectronicsPrice(),
    3450,
    "Total price of electronics should be 3450"
  );

  const expectedDiscountedPrices = [
    900, 1350, 13.5, 450, 135, 76.5, 27, 270, 90, 45, 40.5, 18, 4.5, 3.15, 180,
  ];
  assert.deepStrictEqual(
    discountProducts().map((product) => product.price),
    expectedDiscountedPrices,
    "Discounted prices do not match"
  );

  assert.strictEqual(
    Object.keys(categorizedProducts()).length,
    4,
    "There should be 4 categories"
  );
  assert.strictEqual(
    categorizedProducts()["Electronics"].length,
    6,
    "Incorrect number of Electronics products"
  );
  assert.strictEqual(
    categorizedProducts()["Furniture"].length,
    4,
    "Incorrect number of Furniture products"
  );
  assert.strictEqual(
    categorizedProducts()["Literature"].length,
    3,
    "Incorrect number of Literature products"
  );
  assert.strictEqual(
    categorizedProducts()["Stationery"].length,
    2,
    "Incorrect number of Stationery products"
  );

  console.log("All tests passed!");
} catch (error) {
  console.error("Test failed:", error.message);
}
