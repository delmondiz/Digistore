﻿(function ($) {
    $(function () {
        Materialize.updateTextFields();
        $('select').material_select();
        $(".dropdown-button").dropdown();
        $(".button-collapse").sideNav();
        $('.carousel.carousel-slider').slider();
        $('.carousel').carousel();
        $('.parallax').parallax();
        $('#imgat').materialbox();
        $('.datepicker').pickadate({
            selectMonths: true, // Creates a dropdown to control month
            selectYears: 15 // Creates a dropdown of 15 years to control year
        });

    }); // end of document ready
})(jQuery); // end of jQuery name space