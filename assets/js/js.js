$(function() {
    $('#myModal').on('shown.bs.modal', function() {
        $('#myInput').trigger('focus')
    })
    $("a").click(function(event) {

        

        var scroll = this.hash;
        $scroll = $(scroll);

        $("html, body").stop().animate({
            'scrollTop': $(scroll).offset().top - 85
        }, 1000, 'swing', function() {
            window.location.hash = scroll;
            event.preventDefault();
        });

    });
    $('[data-toggle="popover"]').popover();
    $('.carousel').carousel({
        interval: 5000
    })
});

var form = {
    // full names
    hasClass: hasClass,
    addClass: addClass,
    removeClass: removeClass,
    toggleClass: toggleClass,
    // short names
    has: hasClass,
    add: addClass,
    remove: removeClass,
    toggle: toggleClass
  };