// Click on the duck and change background colour

// background color options - change later to match color palette
const colors = ['pink', 'blue', 'green', 'yellow', 'lilac', 'orange', 'red'];

// clickable logo - code from https://www.javascript-coder.com/button/javascript-button-p1/
var logoImage = document.images["jsbutton"];

// to change image when mouse hovers
 function changeImage() {
   document.images['jsbutton'].src = "./assets/images/White-duck-outline.png";
   return true;
 }

// to change back to the original image
 function changeImageBack() {
   document.images['jsbutton'].src ="./assets/images/White-duck.png"
 }

//const clickLogo = document.getElementById('click-logo');

// background colour query selector
const color = document.querySelector('color')

// Event Listener function goes here
clickLogo.addEventListener('click', function() {
  let bgColor = "";
  for(let i = 0; i < colors.length; i++) {
    bgColor += colors[getRandomNumber()];
  }
  color.textContent = bgColor;
  document.getElementById('header').style.backgroundColor = bgColor;
});

// return code
function getRandomNumber() {
  return Math.floor(Math.random() * colors.lenght);
}
// Click on each individual box and change content of it
