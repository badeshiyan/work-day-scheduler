// declaring global variables
var headerDate = document.getElementById("currentDay");
headerDate.textContent = moment().format("dddd, MMMM Do");

// localStorage.setItem("10", "");
// localStorage.setItem("11", "");
// localStorage.setItem("17", "");

// save button function
$(".saveBtn").on("click", function () {
  var time = $(this).parent().attr("id");
  var text = $(this).siblings("textarea").val();
  localStorage.setItem(time, text);
});

//
$("#9 textarea").val(localStorage.getItem("9"));
$("#10 textarea").val(localStorage.getItem("10"));
$("#11 textarea").val(localStorage.getItem("11"));
$("#12 textarea").val(localStorage.getItem("12"));
$("#13 textarea").val(localStorage.getItem("13"));
$("#14 textarea").val(localStorage.getItem("14"));
$("#15 textarea").val(localStorage.getItem("15"));
$("#16 textarea").val(localStorage.getItem("16"));
$("#17 textarea").val(localStorage.getItem("17"));

for (i = 0; i < 9; i++) {
  var calendar = i;

  if (calendarHour < currentHour)
    if ((calendarHour = currentHour))
      if (calendarHour > currentHour) console.log(moment().format("h"));
  console.log(moment().hour());
  console.log(moment().hours());
}
