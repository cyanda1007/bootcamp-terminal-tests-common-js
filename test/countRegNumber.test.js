var assert = require("assert");
var countRegNumber = require("../countRegNumber.js");
describe("The countRegNumber function", function () {
  it("should count how many registration number are there", function () {
    var regCount = countRegNumber("CA 182736,CY 523519,CJ 812328");
    assert.equal(regCount, 3);

    var regCount = countRegNumber("CA 182736");
    assert.equal(regCount, 1);
  });
});
