let ellipseSize = 500;
let axialElongation=0.3; 

let xPosition = 500;
let yPosition = 300;

let pi = Math.PI;
let speed = pi/10;

let posInUnitСircle = 0;

function count() {  
  if (localStorage.count) {
    //localStorage.count++;
    move_by_ellipse();
    move_by_line()
  } else {
    localStorage.count = 1;
  }
  localStorage.count++;
  document.getElementById("zikrs").innerHTML=`${localStorage.count}` ;
}
count()

function reset() {  
  localStorage.count = 0;
  document.getElementById("zikrs").innerHTML=`${localStorage.count}` ;
  document.getElementById('sunID').style.top= 350 + "px";
}
reset()

function move_by_ellipse() {
  let xNewPosition= (ellipseSize*Math.cos(posInUnitСircle)) + xPosition;
  let yNewPosition= (ellipseSize*axialElongation*Math.sin(posInUnitСircle)) + yPosition;

  posInUnitСircle += speed;

  let offset = document.getElementById("sunID");
  offset.style.top = yNewPosition + "px";
  offset.style.left = xNewPosition + "px";

}

function move_by_line() {
  let step = 50;
  let x = document.getElementById('sunID').offsetTop;
  x -= step;
  document.getElementById('sunID').style.top= x + "px";
}

//Reset function for only Y-axis movement
// function reset() {  
//   localStorage.count = 0;
//   document.getElementById("zikrs").innerHTML=`${localStorage.count}` ;
//   document.getElementById('sunID').style.top= 350 + "px";
// }
// reset()