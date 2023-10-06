$(function () {

    $('.saveBtn').on("click", function(){
        console.log($(this).siblings(".description").val())
         var textValue = $(this).siblings(".description").val()
         var divHour = $(this).parent().attr('id')
         console.log(divHour)
        localStorage.setItem(divHour, textValue)
        } )
});