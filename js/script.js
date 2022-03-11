$(document).ready(function() {
    $(window).scroll(function(event) {
        var s=$(this).scrollTop();
        var w=$(this).outerWidth();
        var h=$('.content').outerHeight();
        var h_b=$('.parallax').outerHeight();
        var p=s/h*100;
        var p_b=s/h_b*100;
        //---не прозрачность--//
        var o=1-1/100*p_b;

        var z_1=1+(w/10000*p_b);
    $('.parallax_fog').css('transform','scale('+z_1+')');
     //---не прозрачность--//
    $('.parallax_fog').css('opacity',o);

        var z_2=1+(w/5000000*p);
    $('.parallax_mountain_1').css('transform','scale('+z_2+')');

        var hr=w/200*p_b;
        var z_3=1+(w*0.00005*p_b);
        var flor2 = hr
    $('.parallax_mountain_2').css('transform','translate3d('+hr+'px,'+hr+'px,0)','scale('+z_3+')');

        var hr_2=-(w/150*p_b);
        var z_4=(1+(w*0.00000000000001*p_b))*2;
        var floor3 = -hr_2
    $('.parallax_mountain_3').css('transform','translate3d('+hr_2+'px,'+floor3+'px,0)','scale('+z_4+')');
    });
});