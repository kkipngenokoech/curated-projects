// /** @format */

// // this module displays the time user had been using the browser extension
// try {
//   var countDownDate = localStorage.getItem("startDate");
//   if (countDownDate) {
//     countDownDate = new Date(countDownDate);
//     currentDate = new Date();

//     if (!(countDownDate.getDay() === currentDate.getDay())) {
//       localStorage.setItem("startDate", currentDate);
//       countDownDate = currentDate;
//     }
//   } else {
//     countDownDate = new Date();
//     localStorage.setItem("startDate", countDownDate);
//   }
// } catch (e) {
//   console.log(e);
// }

// // Update the count down every 1 second
// var x = setInterval(function () {
//   // Get todays date and time
//   var now = new Date().getTime();

//   // Find the distance between now an the count down date
//   var distance = now - countDownDate.getTime();

//   // Time calculations for days, hours, minutes and seconds
//   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//   document.getElementsByClassName("hours")[0].innerHTML = hours;
//   document.getElementsByClassName("minutes")[0].innerHTML = minutes;
//   document.getElementsByClassName("seconds")[0].innerHTML = seconds;
// }, 1000);

