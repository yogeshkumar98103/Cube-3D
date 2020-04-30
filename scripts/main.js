var inputTimer;
var doneInterval = 200;

var slider = document.getElementById("myRange");
slider.oninput = function(){
    clearTimeout(inputTimer);
    inputTimer = setTimeout(() => {
        cube.twistDuration = slider.value
    }, doneInterval);
}