//added the page load function after looking at the solution
$(function(){
    $('.js-lightbulb').on('click', function(e){
        // alert("here");
        $('.js-lightbulb').removeClass('bulb-on');
        $(this).addClass("bulb-on");
    });
})
