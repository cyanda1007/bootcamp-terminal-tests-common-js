module.exports = function findItemsOver20(items) {
  var over20 = [];

  for (var i = 0; i < items.length; i++) {
    if (items[i].qty > 20) {
      over20.push(items[i]);
    }
  }

  return over20;
};
