$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 50) {
            $("#first-nav").addClass("active");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
           $("#first-nav").removeClass("active");
        }
    });
});