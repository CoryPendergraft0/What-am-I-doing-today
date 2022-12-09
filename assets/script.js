$(function planner() {

  
  
  var saveBtn = $(".saveBtn")
  var currentHour = dayjs().hour();
  
  $(saveBtn).click(function() {
    var textInput = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id").split("-")[1];
    localStorage.setItem(time, textInput);
  })
  
  $(".description").each(function() {
    var currHour = parseInt($(this).parent().attr("id").replace("hour-", ""));
    
    if (currHour < currentHour) {
      $(this).addClass("past");
    } else if (currHour === currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
    
    var text = localStorage.getItem($(this).parent().attr("id"));
    $(this).val(text);
  });
  var currDate = $('#currentDay');
  currDate.text(new Date());
  
})