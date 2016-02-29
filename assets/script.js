$(document).ready(function() {

    $(window).scroll(function(){
        if ($(window).scrollTop() + $(window).height() >
            $(document).height() - 35) {
            $('.top').fadeIn(500);
        } else {
            $('.top').hide();
        }
    });

    $('.top').click(function() {
       $('html, body').animate({scrollTop: '0px'});
    });

    $('.icon').hover(function() {
        $('#hobbiesIntro').hide();
    });

    $('.reading').hover(function() {
        $('.icon').removeClass('showing');
        $('.description').hide();
        $('#readingDescription').show();
        $(this).addClass('showing');
    });

    $('.coding').hover(function() {
        $('.icon').removeClass('showing');
        $('.description').hide();
        $('#codingDescription').show();
        $(this).addClass('showing');

    });

    $('.travel').hover(function() {
        $('.icon').removeClass('showing');
        $('.description').hide();
        $('#travelDescription').show();
        $(this).addClass('showing');
    });
});
