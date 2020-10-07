var headerDate = document.getElementById("currentDay");
headerDate.textContent = moment().format("dddd, MMMM Do");

// localStorage.setItem("10", "");
// localStorage.setItem("11", "");
// localStorage.setItem("17", "");

$(".saveBtn").on("click", function () {
  var time = $(this).parent().attr("id");
  var text = $(this).siblings("textarea").val();
  localStorage.setItem(time, text);
});

$("#9 textarea").val(localStorage.getItem("9"));
$("#10 textarea").val(localStorage.getItem("10"));
$("#11 textarea").val(localStorage.getItem("11"));
$("#12 textarea").val(localStorage.getItem("12"));
$("#13 textarea").val(localStorage.getItem("13"));
$("#14 textarea").val(localStorage.getItem("14"));
$("#15 textarea").val(localStorage.getItem("15"));
$("#16 textarea").val(localStorage.getItem("16"));
$("#17 textarea").val(localStorage.getItem("17"));

// new code to fix calendar colors

// var currentHour = use moment.js to get the hour of the current time
var d = new Date();
var currentHour = d.getHours();

// create a for loop, to iterate through your calendar time blocks
for (var i = 9; i < 18; i++) {
  var calendarHour = i; // sets the current position of calendar
  // time block (for your web application)

  // check to see if calendarHour is in the past, present, or future
  // if(calendarHour < currentHour -> in the past, color me gray
  if (calendarHour < currentHour) {
    var divElement = document.getElementById(calendarHour);
    var nodes = divElement.childNodes;
    nodes[3].style.backgroundColor = "gray";
  }
  // if calendarHour = currentHour -> in the future, color me red
  if (calendarHour === currentHour) {
    var divElement = document.getElementById(calendarHour);
    var nodes = divElement.childNodes;
    nodes[3].style.backgroundColor = "red";
  }
  // if calendarHour > currentHour -> in the future, color me green
  if (calendarHour > currentHour) {
    var divElement = document.getElementById(calendarHour);
    var nodes = divElement.childNodes;
    nodes[3].style.backgroundColor = "green";
  }
}

// console.log(moment().format('h')); // display hour in standard time
// console.log(moment().hour()); // display hour in military time
// console.log(moment().hours()); // display hour in military time also
