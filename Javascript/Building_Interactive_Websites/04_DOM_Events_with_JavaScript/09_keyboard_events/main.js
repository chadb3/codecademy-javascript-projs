let ball = document.getElementById('float-circle');

let up=()=>{
ball.style.bottom="250px";
console.log("keydown");
}
//ball.addEventListener("keydown",up);
let down=()=>{
ball.style.bottom="50px";
}

document.addEventListener("keydown",up);
document.addEventListener("keyup",down);
