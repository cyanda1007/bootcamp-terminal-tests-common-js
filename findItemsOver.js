module.exports = function findItemsOver(items, threshold) {
  var over = [];

  for (var i = 0; i < items.length; i++) {
    if (items[i].qty > threshold) {
      over.push(items[i]);
    }
  }

  return over;
};
