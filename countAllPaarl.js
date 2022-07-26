module.exports = function countAllPaarl(items) {
  let count = 0;
  var regNumbers = items.split(",");
  for (var i = 0; i < regNumbers.length; i++) {
    let currentList = regNumbers[i].trim();
    if (currentList.includes("CJ")) {
      count++;
    }
  }
  return count;
};
