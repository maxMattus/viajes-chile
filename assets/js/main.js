$(function () {

    var navBar = $('nav');

    $(window).scroll(function () {

        //console.log(  $(this).scrollTop() );

        if (  $(this).scrollTop() > 1000  ) {
            // $('#toTop').fadeIn();
            navBar.addClass('bg-dark-subtle opacity-100');

        } else {

            navBar.removeClass('bg-dark-subtle');
            // $('#toTop').fadeOut();
        }

    });


});