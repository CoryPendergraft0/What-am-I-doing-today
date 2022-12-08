var currDate = $('#currentDay');
        currDate.text(new Date());

  var saveBtn = $(".saveBtn")


$(function timeColor() {
  var currentHour = dayjs().hour();

    $(".description").each(function() {
        var currHour = parseInt($(this).parent().attr("id"));
        
        if (currHour < currentHour) {
            $(this).addClass("past");
        } else if (currHour === currentHour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("future");
        }
    })
});

$(saveBtn).click(function() {
  var textInput = $(this).siblings(".description").val();time = $(this).parent().attr("id").split("-")[1];
  localStorage.setItem(textInput, time);
})
