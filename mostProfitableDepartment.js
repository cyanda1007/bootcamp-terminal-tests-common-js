module.exports = function mostProfitableDepartment(salesData) {
  var HighDep = 0;
  var departmentSales = {};
  var theDepartment;
  for (var i = 0; i < salesData.length; i++) {
    if (departmentSales[salesData[i].department] == undefined) {
      departmentSales[salesData[i].department] = salesData[i].sales;
    } else {
      departmentSales[salesData[i].department] =
        departmentSales[salesData[i].department] + salesData[i].sales;
    }
  }
  for (var i in departmentSales) {
    if (i == undefined) break;
    if (departmentSales[i] > HighDep) {
      HighDep = departmentSales[i];
      theDepartment = i;
    }
  }
  return theDepartment;
};
var salesData = [
  { department: "hardware", sales: 4500, day: "Monday" },
  { department: "outdoor", sales: 1500, day: "Monday" },
  { department: "carpentry", sales: 5500, day: "Monday" },
  { department: "hardware", sales: 7500, day: "Tuesday" },
  { department: "outdoor", sales: 2505, day: "Tuesday" },
  { department: "carpentry", sales: 1540, day: "Tuesday" },
  { department: "hardware", sales: 1500, day: "Wednesday" },
  { department: "outdoor", sales: 8507, day: "Wednesday" },
  { department: "carpentry", sales: 8009, day: "Wednesday" },
  { department: "hardware", sales: 12000, day: "Thursday" },
  { department: "outdoor", sales: 18007, day: "Thursday" },
  { department: "carpentry", sales: 6109, day: "Thursday" },
  { department: "hardware", sales: 7005, day: "Friday" },
  { department: "outdoor", sales: 12006, day: "Friday" },
  { department: "carpentry", sales: 16109, day: "Friday" },
];
function mostProfitableDay(salesData) {
  var highDay = 0;
  var Salesday = {};
  var day;
  for (i in salesData) {
    if (Salesday[salesData[i].day] == undefined) {
      Salesday[salesData[i].day] = salesData[i].sales;
    } else {
      Salesday[salesData[i].day] =
        Salesday[salesData[i].day] + salesData[i].sales;
    }
  }
  for (i in Salesday) {
    if (i == undefined) break;
    if (Salesday[i] > highDay) {
      highDay = Salesday[i];
      day = i;
    }
  }
  return day;
}
