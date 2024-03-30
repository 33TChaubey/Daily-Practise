// var date = new Date();
// console.log('Today is: ', date.toLocaleString("eng-US", {weekday:'long'}));
// console.log('Current time is :', date.toLocaleString("en-US", {timeZone:'IST', hour:'numeric', hour12: true}) + '' + date.getHours() + ':' + date.getMinutes());



//JavaScript: Print the contents of the current window

// function print_current_page(){
//     window.print()
//}


// JavaScript : Display the current date
let date = new Date();
let dd= date.getDate();
let mm = date.getMonth()+1;
let yyyy=date.getFullYear();

if (dd < 10){
    dd=`0${dd}`
}

if (mm < 10){
    mm=`0${mm}`
}

today = `${dd}-${mm}-${yyyy}`;
console.log(today);