var assert = require("assert");
var greet = require("../greet.js");
describe("The greet function", function () {
  it("should greet a person name", function () {
    assert.equal(greet("Bob"), "Hello, Bob");
    assert.equal(greet("Sam"), "Hello, Sam");
  });
});
