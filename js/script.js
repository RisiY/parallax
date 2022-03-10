$(document).ready(function() {
    $(window).scroll(function(event) {
        var s=$(this).scrollTop();
        var w=$(this).outerWidth();
        var h=$(".content").outerHeight();
        var h_b=$(".parallax").outerHeight();
        var p=s/h*100;
        var p_b=s/h_b*100;
        var o=1-1/100*p_b;

        var z_1=1+(w/10000*p_b);
    $('.parallax_fog').css('transform','scale('+z_1+')')
    });
});