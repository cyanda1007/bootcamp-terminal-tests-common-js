var assert = require("assert");
var yearsAgo = require("../yearsAgo.js");
describe("The years Ago function", function () {
  it("should determine which year it was", function () {
    assert.equal(new Date().getFullYear() - 1976, yearsAgo(1976));
    assert.equal(new Date().getFullYear() - 2000, yearsAgo(2000));
  });
});
