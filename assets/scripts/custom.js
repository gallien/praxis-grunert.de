$(document).ready(function() {
    $('ul.nav li a').bind('click', function(e) {
        $('html,body').animate({scrollTop: $(this.hash).offset().top});
        e.preventDefault();
    });
});
