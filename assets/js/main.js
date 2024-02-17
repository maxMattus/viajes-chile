$(function () {

    var navBar = $('nav');

    $(window).scroll(function () {

        //console.log(  $(this).scrollTop() );

        if (  $(this).scrollTop() > 1200  ) {
            // $('#toTop').fadeIn();
            navBar.addClass('bg-dark-subtle opacity-100');

        } else {

            navBar.removeClass('bg-dark-subtle');
            // $('#toTop').fadeOut();
        }

    });


const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
});