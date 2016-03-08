/**
 * Created by Pol on 2015-12-31.
 */
console.log('test');

//$("img.lazy").lazyload({
//    effect : "fadeIn"
//});
$("img").unveil(200, function() {
    $(this).load(function() {
        this.style.opacity = 1;
    });
});