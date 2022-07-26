var assert = require("assert");
var totalPhoneBill = require("../totalPhoneBill.js");
describe("The total phone bill function", function () {
  it("should check the total phone bill has been make", function () {
    assert.equal("R7.45", totalPhoneBill("call, sms, call, sms, sms"));
    assert.equal("R3.40", totalPhoneBill("call, sms"));
    assert.equal("R1.30", totalPhoneBill("sms, sms"));
  });
});
