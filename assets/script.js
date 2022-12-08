var currDate = $('#currentDay');
        currDate.text(new Date());

  var saveBtn = $(".saveBtn")


$(function timeColor() {
  var currentHour = dayjs().hour();

    $(".description").each(function() {
        var currHour = parseInt($(this).parent().attr("id").replace("hour-", ""));
        
        if (currHour < currentHour) {
            $(this).addClass("past");
        } else if (currHour === currentHour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("future");
        }
    })
});


