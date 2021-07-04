var colors = ['pink', 'blue', 'green', 'yellow', 'lilac', 'orange', 'red'];
var i = 0;
document.querySelector('button').addEventListener('click', function() {
  i = i < colors.length ? ++i : 0;
document.querySelector('body').style.background = colors[i]
})

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
