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
   document.images['jsbutton'].src = './assets/images/white-duck-quack2.png';
   return true;
 }

// to change back to the original image
 function changeImageBack() {
   document.images['jsbutton'].src ='./assets/images/white-duck-outline.png'
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
   'assets/images/white-duck-outline.png',
   'assets/images/white-duck-quack2.png',
 ];

const image = document.querySelector('#firstImage');
const button = document.querySelector('#firstBtn');

window.onload = () => generateRandomPicture(imageArray);

button.addEventListener('click', () => generateRandomPicture(imageArray));

function generateRandomPicture(array){
  let randomNum = Math.floor(Math.random() * array.length);
  image.setAttribute('src', array[randomNum]);
}

// second box
// code for box where a random story is generated every time the duck is clicked on
// from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Silly_story_generator
// variables and function definition

let randomStory = document.querySelector('.random-story');
let story = document.querySelector('.story');


function randomValueFromArray(array){
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

// strings

// basic text does not change

let storyText = "Once upon a time :insert1:. :insert2: because :insert3: But the day after :insert4: Then finally :insert5: and all people were :insert6: ever after. The end.";

// parts of text that change randomly

let insert1 = ["there was a raging storm",
"an apple hit a house",
"the sky turned green",
"the dice was rolled",
"a firefly was tired"];

let insert2 = ["There was a terrible commotion amongst the people",
"Everybody started to laugh",
"The people scremed and shut their eyes",
"Nobody could understand what was going on",
"Someone did a fart"];

let insert3 = ["they were all hungry and tired.",
"they wanted to dance all night long.",
"the expiry date was last month.",
"everybody fainted.",
"no one was harmed."];

let insert4 = ["the moon disappeared.",
"the flowers grew taller than the mountains.",
"everything turned yellow.",
"the grapes tasted funny."];

let insert5 = ["the sky collapsed and squashed the world",
"everyone decided to play rolly polly down the hill",
"they all feasted on pineapples"];

let insert6 = ["happy",
"sad",
"cranky",
"sore",
"dead",
"mad"];

// event listener and result function

randomStory.addEventListener('click', result);

function result() {

    let newStory = storyText;
    let oneItem = randomValueFromArray(insert1);
    let twoItem = randomValueFromArray(insert2);
    let threeItem = randomValueFromArray(insert3);
    let fourItem = randomValueFromArray(insert4);
    let fiveItem = randomValueFromArray(insert5);
    let sixItem = randomValueFromArray(insert6);

    newStory = newStory.replace(/:insert1:/g, oneItem);
		newStory = newStory.replace(":insert2:", twoItem);
		newStory = newStory.replace(":insert3:", threeItem);
    newStory = newStory.replace(":insert4:", fourItem);
		newStory = newStory.replace(":insert5:", fiveItem);
    newStory = newStory.replace(":insert6:", sixItem);

  story.textContent = newStory;
  story.style.visibility = 'visible';

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

// Quiz
// Variables referencing HTML elements byt using the getElementById method
const quizContainer = document.getElementById9('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

// Function for the quiz
function theQuiz() {

}

// Function for showing the results
function theResults() {

}

// This will make the theQuiz function run instantly
theQuiz();

// Submit Button - the function theResults will be run only when the submit button is clicked
submitButton.addEventListener('click', theResults);
