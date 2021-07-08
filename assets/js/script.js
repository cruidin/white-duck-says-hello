// color names need to be updated to match palette

// Change Background Color On Click - HTML CSS and Javascript - https://www.youtube.com/watch?v=Wj9JpCuMV60

var colors = ['#FF5733', '#FFBD33', '#', '#', '#', '#33FFBD', '#FF5733', '#FF8A33', '#FFBD33', '#'];
var i = 0;
document.querySelector('button').addEventListener('click', function() {
  i = i < colors.length ? ++i : 0;
document.querySelector('body').style.background = colors[i]
})

// change background color of #first-box
var boxColors = ['#FEFDDC', '#EEFEDC', '#DDFEDC', '#DCFEEC', '#DCFEFD', 'DCEEFE'];

document.querySelector('#first-box').addEventListener('click', function() {
  i = i < boxColors.length ? ++i : 0;
document.querySelector('#first-box').style.background = boxColors[i]
})

// change background color of #second-box

document.querySelector('#second-box').addEventListener('click', function() {
  i = i < boxColors.length ? ++i : 0;
document.querySelector('#second-box').style.background = boxColors[i]
})

// change background color of #third-box

document.querySelector('#third-box').addEventListener('click', function() {
  i = i < boxColors.length ? ++i : 0;
document.querySelector('#third-box').style.background = boxColors[i]
})

// clickable logo - code from https://www.javascript-coder.com/button/javascript-button-p1/

var logoImage = document.images["jsbutton"];

// to change image when mouse hovers
 function changeImage() {
   document.images['jsbutton'].src = "./assets/images/White-duck-quack2.png";
   return true;
 }

// to change back to the original image
 function changeImageBack() {
   document.images['jsbutton'].src ="./assets/images/White-duck-outline.png"
 }

 // code for changing boxes. Each box will be independently changed when corresponding
 // button is clicked`
 const imageArray = [
   "assets/images/the-fool.jpg",
   "assets/images/the-magician.jpg",
   "assets/images/the-high-priestess.jpg",
 ];

const image = document.querySelector("#firstImage");
const button = document.querySelector("#firstBtn");

window.onload = () => generateRandomPicture(imageArray);

button.addEventListener("click", () => generateRandomPicture(imageArray));

function generateRandomPicture(array){
  let randomNum = Math.floor(Math.random() * array.length);
  image.setAttribute("src", array[randomNum]);
}

// second box

const imageArray2 = [
  "assets/images/bird-running-away.jpg",
  "assets/images/birds-city.jpg",
  "assets/images/birds-houses.jpg",
  "assets/images/birds-park.jpg",
  "assets/images/coffee.jpg",
  "assets/images/drawing.jpg",
  "assets/images/hide-and-seek.jpg",
  "assets/images/logo.jpg",
  "assets/images/portrait1.jpg",
  "assets/images/portrait2.jpg",
  "assets/images/walking.jpg",
  "assets/images/what-is-bird.jpg"
];

const image2 = document.querySelector("#secondImage");
const button2 = document.querySelector("#secondBtn");

window.onload = () => generateRandomPicture2(imageArray2);

button2.addEventListener("click", () => generateRandomPicture2(imageArray2));

function generateRandomPicture2(array){
 let randomNum = Math.floor(Math.random() * array.length);
 image2.setAttribute("src", array[randomNum]);
}

// third box

const imageArray3 = [
  "assets/images/bird-running-away.jpg",
  "assets/images/birds-city.jpg",
  "assets/images/birds-houses.jpg",
  "assets/images/birds-park.jpg",
  "assets/images/coffee.jpg",
  "assets/images/drawing.jpg",
  "assets/images/hide-and-seek.jpg",
  "assets/images/logo.jpg",
  "assets/images/portrait1.jpg",
  "assets/images/portrait2.jpg",
  "assets/images/walking.jpg",
  "assets/images/what-is-bird.jpg"
];

// third box
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
