// Change Background Color - HTML CSS and Javascript - https://www.youtube.com/watch?v=Wj9JpCuMV60
// Variable with a selection of Hex colour codes
var colors = ['#FF5733', '#FFBD33', '#334bff', '#FF5733', '#FF8A33', '#FFBD33',
'#5e6aad', '#905ead', '#ad3e3e', '#55701f', '#1f7033', '#1f2a70', '#701f5e'];

var i = 0;

document.querySelector('.white-duck').addEventListener('click', function() {
  i = i < colors.length ? ++i : 0;
document.querySelector('body').style.background = colors[i]
})

// clickable logo - code from https://www.javascript-coder.com/button/javascript-button-p1/

var logoImage = document.images['jsbutton'];

// to change image when mouse hovers
 function changeImage() {
   document.images['jsbutton'].src = './assets/images/white-duck-quacks2.png';
   return true;
 }

// to change back to the original image
 function changeImageBack() {
   document.images['jsbutton'].src ='./assets/images/white-duck-quacks.png'
 }

// The Modal - a modal opens a window on the page
// We create a variable with the method getElementById to return the element
// that has the ID of myModal on index.html.
var modal = document.getElementById('myModal');

// We create another variable and use the method getElementById to get the button
// 'How to use this site' that opens the modal.
var modalButton = document.getElementById('howTo');

// This variable gets the <span> element that closes the modal by using the method
// getElementsByClassName.
var span = document.getElementsByClassName('close')[0];

// This function will open the modal when the user clicks on 'How to use this site'.
// The style.display property is set to 'block' which means the element is rendered
// as a block-level. The onclick is being used here.
modalButton.onclick = function() {
  modal.style.display = 'block';
}

// This will close the modal when the user clicks on <span> (x). The onclick event
// is being used here.
span.onclick = function() {
  modal.style.display = 'none';
}

// The modal will close when user clicks anywhere outside of modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}

// To change footer image when mouse hover
var footerImage = document.images['footerImage'];

// to change image when mouse hovers
 function changeFooterImage() {
   document.images['footerImage'].src = './assets/images/white-duck-sad2.png';
   return true;
 }

// to change back to the original image
 function changeFooterImageBack() {
   document.images['footerImage'].src ='./assets/images/white-duck-sad.png'
 }


 // code for changing boxes.
 // Array with images to be changed randomly
 const imageArray = [
   'assets/images/white-duck-chill.png',
   'assets/images/white-duck-chill2.png',
   'assets/images/white-duck-glasses.png',
   'assets/images/white-duck-glasses2.png',
   'assets/images/white-duck-leaves.png',
   'assets/images/white-duck-leaves2.png',
   'assets/images/white-duck-love.png',
   'assets/images/white-duck-love2.png',
   'assets/images/white-duck-monocle.png',
   'assets/images/white-duck-monocle2.png',
   'assets/images/white-duck-quacks.png',
   'assets/images/white-duck-quacks2.png',
   'assets/images/white-duck-wizard.png',
   'assets/images/white-duck-wizard2.png',
   'assets/images/white-duck-apple.png',
   'assets/images/white-duck-apple2.png',
   'assets/images/white-duck-umbrella.png',
   'assets/images/white-duck-umbrella2.png',
   'assets/images/white-duck-mermaid.png',
   'assets/images/white-duck-mermaid2.png',
   'assets/images/white-duck-sad.png',
   'assets/images/white-duck-sad2.png',
   'assets/images/white-duck-reading.png',
   'assets/images/white-duck-reading2.png'
 ];

const image = document.querySelector('#firstImage');
const button = document.querySelector('#firstBtn');

window.onload = () => generateRandomPicture(imageArray);

button.addEventListener('click', () => generateRandomPicture(imageArray));

function generateRandomPicture(array){
  let randomNum = Math.floor(Math.random() * array.length);
  image.setAttribute('src', array[randomNum]);
}
