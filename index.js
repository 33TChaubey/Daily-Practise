//console.log("Hall of fame");
var date = new Date();
var dd = date.getDate();
var mm = date.getMonth() + 1;
var yyyy = date.getFullYear();
if (dd < 10) {
    dd = "0".concat(dd);
}
if (mm < 10) {
    mm = "0".concat(mm);
}
var today = "".concat(dd, "-").concat(mm, "-").concat(yyyy);
console.log(today);
