var rad = 500; //ellipse size
var k=0.8; //axial elongation

// var xoff = document.documentElement.clientWidth / 2;//x position
// var yoff = document.documentElement.clientHeight / 2;//y position

let x = window.innerWidth - (20 + "px");
let y = window.innerHeight;

var xoff = x / 2;
var yoff = y / 2;


var pi = Math.PI;
var inc = pi/50; //speed

var t1=0; //angle given in radians

var t2=pi;


function updateTime()
{
var x1= (rad*Math.cos(t1)) + xoff;//x new position
var y1= (rad*k*Math.sin(t1)) + yoff;//y new position

var x2= (rad*Math.cos(t2)) + xoff;
var y2= (rad*k*Math.sin(t2)) + yoff;

t1+= inc;
t2+= inc;

var divRunner1 = document.getElementById("sunID");
divRunner1.style.top = y1 + "px"; //offset Y
divRunner1.style.left = x1 + "px";//offset X

var divRunner2 = document.getElementById("moonID");
divRunner2.style.top = y2 + "px"; //offset Y
divRunner2.style.left = x2 + "px";//offset X

setTimeout('updateTime();', 25);
}

window.onload=updateTime
