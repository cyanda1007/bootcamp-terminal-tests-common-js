module.exports = function transportFee(fee) {
  if (fee.includes("morning")) {
    return "R20";
  }
  if (fee.includes("afternoon")) {
    return "R10";
  }
  if (fee.includes("nightshift")) {
    return "free";
  }
};
