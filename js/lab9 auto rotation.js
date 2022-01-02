
let rad; //ellipse size
/*
if (window.innerWidth < window.innerHeight) {
  if (window.innerHeight < 600) rad = window.innerHeight ;
  else if (window.innerHeight < 1200) rad = window.innerHeight / 1.1;
  else rad = window.innerHeight / 1.2;

} else {
  if (window.innerHeight < 850) rad = window.innerWidth / 1.9;
  else rad = window.innerWidth / 1.9;

}
*/

let k; //axial elongation
/*
if (window.innerWidth < 500 && window.innerHeight < 700) k=0.6;
else if (window.innerWidth < 500 && window.innerHeight < 900) k=0.6;
else if (window.innerWidth < 700 && window.innerHeight < 900) k=0.6;
else if (window.innerWidth < 1200 && window.innerHeight > 1300) k=0.65;
else if (window.innerWidth < 1200 && window.innerHeight < 800 ) k=0.65;
else if (window.innerWidth < 1200 && window.innerHeight < 1000 ) k=1;
else if (window.innerWidth < 1500 && window.innerHeight < 1000) k=0.7;
else k=0.55;
*/

// var xoff = document.documentElement.clientWidth / 2;//x position
// var yoff = document.documentElement.clientHeight / 2;//y position

if (window.innerWidth < 500 && window.innerHeight < 700) {
  rad = window.innerHeight/2.2;
  k = 1.3;
} else if (window.innerWidth < 500 && window.innerHeight < 900) {
  rad = window.innerHeight/2.2;
  k = 1.2;
} else if (window.innerWidth < 900 && window.innerHeight < 1200) {
  rad = window.innerHeight/2;
  k = 1.1;
}
else if (window.innerWidth < 1200 && window.innerHeight < 1000) {
  rad = window.innerHeight;
  k = 0.6;
} else if (window.innerWidth < 1200 && window.innerHeight < 1500) {
  rad = window.innerHeight/1.6;
  k = 0.9;
} else {
  rad = window.innerHeight;
  k = 0.6;
}

let shiftX;
if (window.innerWidth < 400) shiftX = Math.round(window.innerWidth / 2.25);
else if (window.innerWidth < 500) shiftX = Math.round(window.innerWidth / 2.5);
else if (window.innerWidth < 1200 && window.innerHeight > 1300) shiftX = Math.round(window.innerWidth / 3);
else if (window.innerWidth < 1000) shiftX = Math.round(window.innerWidth / 3);
else if (window.innerWidth < 1500) shiftX = Math.round(window.innerWidth / 11);
else shiftX = Math.round(window.innerWidth / 8);

// let shift = window.innerHeight;
// W: 1536
// H: 722
//alert('Width    ' + window.innerWidth + '\n'  + 'Height    ' + window.innerHeight)


var xoff = window.innerWidth / 2 - shiftX;
var yoff = window.innerHeight / 2;


var pi = Math.PI;
var inc = pi/150; //speed

var t1=pi; //angle given in radians

var t2=0;


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
