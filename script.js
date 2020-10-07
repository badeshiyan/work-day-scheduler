var headerDate = document.getElementById("currentDay");
headerDate.textContent = moment().format("dddd, MMMM Do");

// save button function
$(".saveBtn").on("click", function () {
  var time = $(this).parent().attr("id");
  var text = $(this).siblings("textarea").val();
  localStorage.setItem(time, text);
});

// local storage for calendar text area
$("#9 textarea").val(localStorage.getItem("9"));
$("#10 textarea").val(localStorage.getItem("10"));
$("#11 textarea").val(localStorage.getItem("11"));
$("#12 textarea").val(localStorage.getItem("12"));
$("#13 textarea").val(localStorage.getItem("13"));
$("#14 textarea").val(localStorage.getItem("14"));
$("#15 textarea").val(localStorage.getItem("15"));
$("#16 textarea").val(localStorage.getItem("16"));
$("#17 textarea").val(localStorage.getItem("17"));

// var currentHour = use moment.js to get the hour of the current time
var d = new Date();
var currentHour = d.getHours();

// create a for loop, to iterate through your calendar time blocks
for (var i = 9; i < 18; i++) {
  var calendarHour = i; // sets the current position of calendar time block (for your web application)
  var divElement = 0;
  var nodes = 0;

  // check to see if calendarHour is in the past, present, or future
  // if calendarHour < currentHour -> in the past, color me gray
  if (calendarHour < currentHour) {
    divElement = document.getElementById(calendarHour);
    nodes = divElement.children;
    nodes[1].style.backgroundColor = "#d3d3d3";
  }
  // if calendarHour > currentHour -> in the future, color me green
  else if (calendarHour > currentHour) {
    divElement = document.getElementById(calendarHour);
    nodes = divElement.children;
    nodes[1].style.backgroundColor = "#77dd77";
  }
  // if calendarHour = currentHour -> in the future, color me red
  else {
    divElement = document.getElementById(calendarHour);
    nodes = divElement.children;
    nodes[1].style.backgroundColor = "#ff6961";
  }
}
