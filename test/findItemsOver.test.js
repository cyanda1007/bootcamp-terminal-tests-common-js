var assert = require("assert");
var findItemsOver = require("../findItemsOver.js");
describe("The findItemsOver function", function () {
  it("should return item", function () {
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
    assert.deepEqual(results, findItemsOver(itemList, 20));
  });
  it("should return item", function () {
    var itemList2 = [
      { name: "apples", qty: 10 },
      { name: "pears", qty: 19 },
      { name: "bananas", qty: 17 },
      { name: "apples", qty: 3 },
    ];

    var results2 = [];
    assert.deepEqual(results2, findItemsOver(itemList2, 20));
  });
});
