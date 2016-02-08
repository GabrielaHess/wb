/**
 * Created by G on 2016-01-03.
 */
$(document).ready(function(){
    $('#nav-icon1').click(function(){
        $(this).toggleClass('open');
        //$('#mainMenu').toggleClass('open');
        $('#mainMenu').slideToggle();


    });
});

