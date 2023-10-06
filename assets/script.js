$(function () {

    $('.saveBtn').on("click", function(){
        console.log($(this).siblings(".description").val())
         var textValue = $(this).siblings(".description").val()
         var divHour = $(this).parent().attr('id')
         console.log(divHour)
        localStorage.setItem(divHour, textValue)
        } )

     $(".time-block").each(function(){
         console.log(this)
        var idval = $(this).attr("id")
        console.log(idval) 
        var split = idval.split('-')[1]
        console.log(split) 
        var currentHour = dayjs().format("H")
        console.log(currentHour)
        if( currentHour > split){
          $(this).addClass("past")
        }else if(currentHour == split){
          $(this).addClass("present") 
        }else if(currentHour < split){
          $(this).addClass("future")
            }
          })
});