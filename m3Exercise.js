// Declare global variables at the top
var canvas;
var ctx;
var w = 1000;
var h = 700;
var x = w;
var y = h;
var r = rand(100);


document.querySelector("#button").onclick = button; //do not want to call function

/// executable 

setUpCanvas(); 
console.log(r);

function button(){
    triangle(rand(x), rand(y));
    console.log(r);
}


function rand(range){
    var cal = Math.random()*range;
    console.log(cal, range);
    return cal
}

function triangle(x, y){
ctx.moveTo(x, y);
ctx.lineTo(x , y-200);
ctx.lineTo(x + 200, y);
ctx.lineTo(x, y);
ctx.stroke();
}



function setUpCanvas() {
    canvas = document.querySelector("#myCanvas");
    ctx = canvas.getContext("2d");
    canvas.width = w;
    canvas.height = h;
    canvas.style.border = "3px solid purple";
}





console.log("week 3 Exercise")