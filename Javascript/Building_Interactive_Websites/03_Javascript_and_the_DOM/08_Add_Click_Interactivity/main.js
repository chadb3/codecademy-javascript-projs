let element = document.querySelector('button');

let turnButtonRed=()=>{
  // Add code to turn button red
  element.style.backgroundColor="red";
  element.style.color="white";
  element.innerHTML="Red Button";
}
element.onclick=turnButtonRed;
