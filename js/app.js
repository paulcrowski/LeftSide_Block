/**
 * Created by Pol on 2015-12-31.
 */


// no transition on load on explorer

$(document).ready(function () {
    $('body').removeClass('notransition')
});

console.log('test');

//$("img.lazy").lazyload({
//    effect : "fadeIn"
//});
$("img").unveil(200, function() {
    $(this).load(function() {
        this.style.opacity = 1;
    });
});

// checkboxes ##################### glyphicons

$(document).ready(function () {
    $("[type='checkbox']").on('change', function(){
        if ($(this).prop('checked')) {
            $(this).prev()
                .removeClass('glyphicon-unchecked')
                .addClass('glyphicon-ok-circle');
        }
        else {
            $(this).prev()
                .removeClass('glyphicon-ok-circle')
                .addClass('glyphicon-unchecked');
        }
    });

    // if input checked

    $("input:checked").prev()
        .removeClass('glyphicon-unchecked')
        .addClass('glyphicon-ok-circle');

    // button acitve if input cheked
    $("input:checked").parent()
        .addClass('active');


});