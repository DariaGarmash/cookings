$(function() {
    $( "#accordion" ).accordion();
    $( ".tab-block" ).tabs({
//        event: "mouseover"
    });


//Добавляем класс .active при hover для табов

    $('.nav li').on('click', function() {
        $(this).parent().children().removeClass('active');
        $(this).addClass('active');
    });

});
