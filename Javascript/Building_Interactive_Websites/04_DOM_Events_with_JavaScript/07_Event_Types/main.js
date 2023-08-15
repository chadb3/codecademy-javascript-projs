// This variable stores the "Pick a Color" button
let button = document.getElementById('color-button');

// This variable stores the "Mystery Color" button
let mysteryButton = document.getElementById('next-button');

// This random number function will create color codes for the randomColor variable
function colorValue() {
  return Math.floor(Math.random() * 256);
}

function colorChange(event){
let randomColor = 'rgb(' + colorValue() + ',' + colorValue() + ',' + colorValue() + ')';
event.target.style.backgroundColor=randomColor;
//test to make sure it is still working (still learning). It Worked!
//button.innerHTML="HELP!";
}
button.addEventListener('click',colorChange);

mysteryButton.addEventListener('wheel',colorChange);

