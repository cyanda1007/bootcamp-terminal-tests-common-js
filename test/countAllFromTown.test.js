var assert = require("assert");
var countAllFromTown = require("../countAllFromTown.js");
describe("The count all from town function", function () {
  it("should return all fromStellies", function () {
    assert.equal(
      countAllFromTown("CL 124,CY 567,CL 345, CJ 456,CL 341", "CL"),
      3
    );
  });
  it("should return all fromuilsriver ", function () {
    assert.equal(
      countAllFromTown("CJ 124,CY 567,CL 345, CF 456, CL 341", "CF"),
      1
    );
  });
});
