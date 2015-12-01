$(document).ready(function() {
    $('#click').click(function() {
        $('#click').hide();
        $('.contactForm').fadeIn(1500);
    });

    $(window).scroll(function(){
        if ($(window).scrollTop() + $(window).height() ==
            $(document).height()) {
            $('.top').show();
        } else {
            $('.top').hide();
        }
    });

    $('.top').click(function() {
       $('html, body').animate({scrollTop: '0px'});
    });
});