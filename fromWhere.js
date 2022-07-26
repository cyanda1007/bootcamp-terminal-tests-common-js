module.exports = function fromWhere(city) {
  if (city.includes("CY")) {
    return "Bellville";
  }
  if (city.includes("CJ")) {
    return "Paarl";
  }
  if (city.includes("CA")) {
    return "Cape Town";
  }
  if (city.includes("CC")) {
    return "Some other place!";
  }
};
