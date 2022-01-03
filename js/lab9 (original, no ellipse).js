function count() {  
  if (localStorage.count) {
    localStorage.count++;
    move_by_line()
  } else {
    localStorage.count = 1;
  }
  document.getElementById("zikrs").innerHTML=`${localStorage.count}` ;
}
count()

function reset() {  
  localStorage.count = 0;
  document.getElementById("zikrs").innerHTML=`${localStorage.count}` ;
  document.getElementById('sunID').style.top= 300 + "px";
}
reset()

function move_by_line() {
  let step = 50;
  let x = document.getElementById('sunID').offsetTop;
  x -= step;
  document.getElementById('sunID').style.top= x + "px";
}
