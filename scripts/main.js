var inputTimer;
var doneInterval = 300;

var slider = document.getElementById("myRange");
slider.oninput = function(){
    clearTimeout(inputTimer);
    inputTimer = setTimeout(newSpeed, doneInterval);
}

function newSpeed(){
    cube.twistDuration = slider.value
}