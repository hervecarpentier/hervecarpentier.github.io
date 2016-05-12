$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});


 
function stopVideo(player) {
   $('.videoFrame').each(function(index, element) { 
       var src = element.src; 
       element.src = ""; 
       element.src = src;
   })
};

$(document).ready(function() {
 $('.close-modal').click(stopVideo);
});


$('body').scrollspy({
    target: '.navbar-fixed-top'
})


$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});