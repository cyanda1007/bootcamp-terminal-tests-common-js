var assert = require("assert");
var fromWhere = require("../fromWhere.js");
describe("The FromWhere function", function () {
  it("should check which registration belongs from where", function () {
    assert.equal(fromWhere("CY"), "Bellville");
    assert.equal(fromWhere("CJ"), "Paarl");
    assert.equal(fromWhere("CA"), "Cape Town");
    assert.equal(fromWhere("CC"), "Some other place!");
  });
});
