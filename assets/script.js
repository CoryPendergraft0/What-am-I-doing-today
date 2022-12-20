//wrapped everything inside of one big function

$(function planner() {

  var saveBtn = $(".saveBtn")
  var currentHour = dayjs().hour();
  
  //this adds the ability to click save and save the users word input to local storage and the page
  $(saveBtn).click(function() {
    
    var textInput = $(this).siblings(".description").val();
    
    var time = $(this).parent().attr("id").split("-")[1];
    
    localStorage.setItem(time, textInput);
    
  })
  
  
  $(".description").each(function() {
    var currHour = $(this).parent().attr("id").replace("hour-", "");
    
    if (parseInt(currHour) < currentHour) {
      $(this).addClass("past");
    } else if (parseInt(currHour) === currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
    //this gets my saved items back onto the page after i refresh it
    var text = localStorage.getItem(currHour);
    $(this).val(text);
  }
  );
  
  //this is how the date is displayed on the page
  var currDate = $('#currentDay');
  currDate.text(new Date());
  
})