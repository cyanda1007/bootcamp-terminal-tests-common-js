module.exports = function countAllFromTown(regNumbers, town) {
  let count = 0;
  var fromStellies = [];
  var town;
  var RegNoArray = regNumbers.split(",");
  for (var i = 0; i < RegNoArray.length; i++) {
    let currentList = RegNoArray[i].trim();
    if (currentList.includes(town)) {
      fromStellies.push(currentList);
      count++;
    }
  }
  return count;
};
