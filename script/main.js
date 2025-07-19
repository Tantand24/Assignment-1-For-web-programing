//Gotten this function from https://stackoverflow.com/questions/33505032/fade-in-image-javascript
//to fade in
function fadeIn(image) {
    image.style.opacity = 0;
    var tick = function () {
        image.style.opacity = +image.style.opacity + 0.1;
        if (+image.style.opacity < 1) {
            (window.requestAnimationFrame && requestAnimationFrame(tick))
        }
    };
    tick();
}

var image = document.getElementById("doggoImage");
fadeIn(image);
