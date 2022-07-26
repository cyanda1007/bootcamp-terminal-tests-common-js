var assert = require("assert");
var transportFee = require("../transportFee.js");
describe("the transportFee function", function () {
  it("should return R20 if it is in morning", function () {
    assert.equal(transportFee("morning"), "R20");
  });
  it("should return fee amount R10 if it is in the morning", function () {
    assert.equal(transportFee("afternoon"), "R10");
  });
  it("should return free if it is a night shift", function () {
    assert.equal(
      transportFee("nightshift"),
      "free",
      "for night shift return free"
    );
  });
});
