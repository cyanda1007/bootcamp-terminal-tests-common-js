module.exports = function totalPhoneBill(billsList) {
  var BillArray = billsList.split(",");
  let totalBill = 0;

  for (let i = 0; i < BillArray.length; i++) {
    let newList = BillArray[i].trim();
    if (newList === "call") {
      totalBill = totalBill + 2.75;
    } else if (newList === "sms") {
      totalBill = totalBill + 0.65;
    }
  }
  return "R" + totalBill.toFixed(2);
};
