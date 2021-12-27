function count() {  
  if (localStorage.count) {
    localStorage.count++;
  } else {
    localStorage.count = 1;
  }
  document.getElementById("end").innerHTML=`${localStorage.count}` ;
}
count()

function reset() {  
  localStorage.count = 0
  document.getElementById("end").innerHTML=`${localStorage.count}` ;
}
reset()