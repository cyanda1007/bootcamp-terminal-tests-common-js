var assert = require("assert");
var findItemsOver20 = require("../findItemsOver20.js");
describe("The findItemsOver20 function", function () {
  it("should return all item over20 qty", function () {
    var itemList3 = [
      { name: "apples", qty: 40 },
      { name: "pears", qty: 20 },
      { name: "bananas", qty: 23 },
      { name: "apples", qty: 37 },
    ];

    var results3 = [
      { name: "apples", qty: 40 },
      { name: "bananas", qty: 23 },
      { name: "apples", qty: 37 },
    ];
    assert.deepEqual(results3, findItemsOver20(itemList3));
  });
  it("should return all item over20 qty", function () {
    var itemList = [
      { name: "apples", qty: 10 },
      { name: "pears", qty: 37 },
      { name: "bananas", qty: 27 },
      { name: "apples", qty: 3 },
    ];

    var results = [
      { name: "pears", qty: 37 },
      { name: "bananas", qty: 27 },
    ];
    assert.deepEqual(results, findItemsOver20(itemList));
  });
});
