/**
 * Created by Sushil on 26-02-2017.
 */
 //scroll to about div
$("#about").click(function() {
    $('html,body').animate({
        scrollTop: $(".middle").offset().top},
        'slow');
    $('#collapsibleMenu').setAttribute('display', 'none');
});