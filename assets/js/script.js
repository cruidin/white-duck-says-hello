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

// Gallery in the first box

// First image
var whiteDuckOutline = document.images['white-duck-outline'];

// to change image when mouse hovers
  function changeImageOutline() {
    document.images['white-duck-outline'].src = './assets/images/white-duck-quack2.png';
    return true;
  }

// to change back to the original image
  function changeImageOutlineBack() {
    document.images['white-duck-outline'].src ='./assets/images/white-duck-outline.png'
  }

// The Modal - a modal opens a window on the page
// We create a variable with the method getElementById to return the element
// that has the ID of myModal on index.html.
var modalOne = document.getElementById('outlineModal');

// We create another variable and use the method getElementById to get the image
// button that opens the modal.
var modalButtonOne = document.getElementById('white-duck-outline');

// This variable gets the <span> element that closes the modal by using the method
// getElementsByClassName.
var spanOne = document.getElementsByClassName('closeOne')[0];

// This function will open the modal when the user clicks on 'How to use this site'.
// The style.display property is set to 'block' which means the element is rendered
// as a block-level. The onclick is being used here.
modalButtonOne.onclick = function() {
  modalOne.style.display = 'block';
}

// This will close the modal when the user clicks on <span> (x). The onclick event
// is being used here.
spanOne.onclick = function() {
  modalOne.style.display = 'none';
}

// The modal will close when user clicks anywhere outside of modal
window.onclick = function(event) {
  if (event.target == modalOne) {
    modalOne.style.display = 'none';
  }
}

// Second image
var whiteDuckWizard = document.images['white-duck-wizard'];

// to change image when mouse hovers
  function changeImageWizard() {
   document.images['white-duck-wizard'].src = './assets/images/white-duck-wizard2.png';
   return true;
  }

// to change back to the original image
  function changeImageWizardBack() {
   document.images['white-duck-wizard'].src ='./assets/images/white-duck-wizard.png'
  }

// The Modal - a modal opens a window on the page
// We create a variable with the method getElementById to return the element
// that has the ID of myModal on index.html.
var modalTwo = document.getElementById('wizardModal');

// We create another variable and use the method getElementById to get the image
// button that opens the modal.
var modalButtonTwo = document.getElementById('white-duck-wizard');

// This variable gets the <span> element that closes the modal by using the method
// getElementsByClassName.
var spanTwo = document.getElementsByClassName('closeTwo')[0];

// This function will open the modal when the user clicks on 'How to use this site'.
// The style.display property is set to 'block' which means the element is rendered
// as a block-level. The onclick is being used here.
modalButtonTwo.onclick = function() {
  modalTwo.style.display = 'block';
}

// This will close the modal when the user clicks on <span> (x). The onclick event
// is being used here.
spanTwo.onclick = function() {
  modalTwo.style.display = 'none';
}

// The modal will close when user clicks anywhere outside of modal
window.onclick = function(event) {
  if (event.target == modalTwo) {
    modalTwo.style.display = 'none';
  }
}


// Third image
var whiteDuckChill = document.images['white-duck-chill'];

// to change image when mouse hovers
  function changeImageChill() {
    document.images['white-duck-chill'].src = './assets/images/white-duck-chill2.png';
    return true;
  }

// to change back to the original image
  function changeImageChillBack() {
    document.images['white-duck-chill'].src ='./assets/images/white-duck-chill.png'
  }


  // The Modal - a modal opens a window on the page
  // We create a variable with the method getElementById to return the element
  // that has the ID of myModal on index.html.
  var modalThree = document.getElementById('chillModal');

  // We create another variable and use the method getElementById to get the image
  // button that opens the modal.
  var modalButtonThree = document.getElementById('white-duck-chill');

  // This variable gets the <span> element that closes the modal by using the method
  // getElementsByClassName.
  var spanThree = document.getElementsByClassName('closeThree')[0];

  // This function will open the modal when the user clicks on 'How to use this site'.
  // The style.display property is set to 'block' which means the element is rendered
  // as a block-level. The onclick is being used here.
  modalButtonThree.onclick = function() {
    modalThree.style.display = 'block';
  }

  // This will close the modal when the user clicks on <span> (x). The onclick event
  // is being used here.
  spanThree.onclick = function() {
    modalTwo.style.display = 'none';
  }

  // The modal will close when user clicks anywhere outside of modal
  window.onclick = function(event) {
    if (event.target == modalTwo) {
      modalThree.style.display = 'none';
    }
  }


// Fourth image
var whiteDuckGlasses = document.images['white-duck-glasses'];

// to change image when mouse hovers
  function changeImageGlasses() {
    document.images['white-duck-glasses'].src = './assets/images/white-duck-glasses2.png';
    return true;
  }

// to change back to the original image
  function changeImageGlassesBack() {
    document.images['white-duck-glasses'].src ='./assets/images/white-duck-glasses.png'
  }


  // The Modal - a modal opens a window on the page
  // We create a variable with the method getElementById to return the element
  // that has the ID of myModal on index.html.
  var modalFour = document.getElementById('glassesModal');

  // We create another variable and use the method getElementById to get the image
  // button that opens the modal.
  var modalButtonFour = document.getElementById('white-duck-glasses');

  // This variable gets the <span> element that closes the modal by using the method
  // getElementsByClassName.
  var spanFour = document.getElementsByClassName('closeFour')[0];

  // This function will open the modal when the user clicks on 'How to use this site'.
  // The style.display property is set to 'block' which means the element is rendered
  // as a block-level. The onclick is being used here.
  modalButtonFour.onclick = function() {
    modalFour.style.display = 'block';
  }

  // This will close the modal when the user clicks on <span> (x). The onclick event
  // is being used here.
  spanFour.onclick = function() {
    modalFour.style.display = 'none';
  }

  // The modal will close when user clicks anywhere outside of modal
  window.onclick = function(event) {
    if (event.target == modalFour) {
      modalFour.style.display = 'none';
    }
  }

// Fifth image
var whiteDuckApple = document.images['white-duck-apple'];

// to change image when mouse hovers
  function changeImageApple() {
   document.images['white-duck-apple'].src = './assets/images/white-duck-apple2.png';
   return true;
  }

// to change back to the original image
  function changeImageAppleBack() {
   document.images['white-duck-apple'].src ='./assets/images/white-duck-apple.png'
  }


  // The Modal - a modal opens a window on the page
  // We create a variable with the method getElementById to return the element
  // that has the ID of myModal on index.html.
  var modalFive = document.getElementById('appleModal');

  // We create another variable and use the method getElementById to get the image
  // button that opens the modal.
  var modalButtonFive = document.getElementById('white-duck-apple');

  // This variable gets the <span> element that closes the modal by using the method
  // getElementsByClassName.
  var spanFive = document.getElementsByClassName('closeFive')[0];

  // This function will open the modal when the user clicks on 'How to use this site'.
  // The style.display property is set to 'block' which means the element is rendered
  // as a block-level. The onclick is being used here.
  modalButtonFive.onclick = function() {
    modalFive.style.display = 'block';
  }

  // This will close the modal when the user clicks on <span> (x). The onclick event
  // is being used here.
  spanTwo.onclick = function() {
    modalFive.style.display = 'none';
  }

  // The modal will close when user clicks anywhere outside of modal
  window.onclick = function(event) {
    if (event.target == modalFive) {
      modalFive.style.display = 'none';
    }
  }

// Sixth image
var whiteDuckLeaves = document.images['white-duck-leaves'];

// to change image when mouse hovers
  function changeImageLeaves() {
    document.images['white-duck-leaves'].src = './assets/images/white-duck-leaves2.png';
    return true;
  }

// to change back to the original image
  function changeImageLeavesBack() {
    document.images['white-duck-leaves'].src ='./assets/images/white-duck-leaves.png'
  }


  // The Modal - a modal opens a window on the page
  // We create a variable with the method getElementById to return the element
  // that has the ID of myModal on index.html.
  var modalSix = document.getElementById('leavesModal');

  // We create another variable and use the method getElementById to get the image
  // button that opens the modal.
  var modalButtonSix = document.getElementById('white-duck-leaves');

  // This variable gets the <span> element that closes the modal by using the method
  // getElementsByClassName.
  var spanSix = document.getElementsByClassName('closeSix')[0];

  // This function will open the modal when the user clicks on 'How to use this site'.
  // The style.display property is set to 'block' which means the element is rendered
  // as a block-level. The onclick is being used here.
  modalButtonSix.onclick = function() {
    modalSix.style.display = 'block';
  }

  // This will close the modal when the user clicks on <span> (x). The onclick event
  // is being used here.
  spanSix.onclick = function() {
    modalSix.style.display = 'none';
  }

  // The modal will close when user clicks anywhere outside of modal
  window.onclick = function(event) {
    if (event.target == modalSix) {
      modalSix.style.display = 'none';
    }
  }


// Seventh image
var whiteDuckLove = document.images['white-duck-love'];

// to change image when mouse hovers
  function changeImageLove() {
    document.images['white-duck-love'].src = './assets/images/white-duck-love2.png';
    return true;
  }

// to change back to the original image
  function changeImageLoveBack() {
    document.images['white-duck-love'].src ='./assets/images/white-duck-love.png'
  }

  // The Modal - a modal opens a window on the page
  // We create a variable with the method getElementById to return the element
  // that has the ID of myModal on index.html.
  var modalSeven = document.getElementById('loveModal');

  // We create another variable and use the method getElementById to get the image
  // button that opens the modal.
  var modalButtonSeven = document.getElementById('white-duck-love');

  // This variable gets the <span> element that closes the modal by using the method
  // getElementsByClassName.
  var spanSeven = document.getElementsByClassName('closeSeven')[0];

  // This function will open the modal when the user clicks on 'How to use this site'.
  // The style.display property is set to 'block' which means the element is rendered
  // as a block-level. The onclick is being used here.
  modalButtonSeven.onclick = function() {
    modalSeven.style.display = 'block';
  }

  // This will close the modal when the user clicks on <span> (x). The onclick event
  // is being used here.
  spanSeven.onclick = function() {
    modalSeven.style.display = 'none';
  }

  // The modal will close when user clicks anywhere outside of modal
  window.onclick = function(event) {
    if (event.target == modalSeven) {
      modalSeven.style.display = 'none';
    }
  }

// Eighth image
var whiteDuckMonocle = document.images['white-duck-monocle'];

// to change image when mouse hovers
  function changeImageMonocle() {
   document.images['white-duck-monocle'].src = './assets/images/white-duck-monocle2.png';
   return true;
  }

// to change back to the original image
  function changeImageMonocleBack() {
   document.images['white-duck-monocle'].src ='./assets/images/white-duck-monocle.png'
  }

  // The Modal - a modal opens a window on the page
  // We create a variable with the method getElementById to return the element
  // that has the ID of myModal on index.html.
  var modalEight = document.getElementById('monocleModal');

  // We create another variable and use the method getElementById to get the image
  // button that opens the modal.
  var modalButtonEight = document.getElementById('white-duck-monocle');

  // This variable gets the <span> element that closes the modal by using the method
  // getElementsByClassName.
  var spanEight = document.getElementsByClassName('closeEight')[0];

  // This function will open the modal when the user clicks on 'How to use this site'.
  // The style.display property is set to 'block' which means the element is rendered
  // as a block-level. The onclick is being used here.
  modalButtonEight.onclick = function() {
    modalEight.style.display = 'block';
  }

  // This will close the modal when the user clicks on <span> (x). The onclick event
  // is being used here.
  spanEight.onclick = function() {
    modalEight.style.display = 'none';
  }

  // The modal will close when user clicks anywhere outside of modal
  window.onclick = function(event) {
    if (event.target == modalEight) {
      modalEight.style.display = 'none';
    }
  }

// Nineth image
var whiteDuckUmbrella = document.images['white-duck-umbrella'];

// to change image when mouse hovers
  function changeImageUmbrella() {
    document.images['white-duck-umbrella'].src = './assets/images/white-duck-umbrella2.png';
    return true;
  }

// to change back to the original image
  function changeImageUmbrellaBack() {
    document.images['white-duck-umbrella'].src ='./assets/images/white-duck-umbrella.png'
  }


  // The Modal - a modal opens a window on the page
  // We create a variable with the method getElementById to return the element
  // that has the ID of myModal on index.html.
  var modalNine = document.getElementById('umbrellaModal');

  // We create another variable and use the method getElementById to get the image
  // button that opens the modal.
  var modalButtonNine = document.getElementById('white-duck-umbrella');

  // This variable gets the <span> element that closes the modal by using the method
  // getElementsByClassName.
  var spanNine = document.getElementsByClassName('closeNine')[0];

  // This function will open the modal when the user clicks on 'How to use this site'.
  // The style.display property is set to 'block' which means the element is rendered
  // as a block-level. The onclick is being used here.
  modalButtonNine.onclick = function() {
    modalNine.style.display = 'block';
  }

  // This will close the modal when the user clicks on <span> (x). The onclick event
  // is being used here.
  spanNine.onclick = function() {
    modalNine.style.display = 'none';
  }

  // The modal will close when user clicks anywhere outside of modal
  window.onclick = function(event) {
    if (event.target == modalNine) {
      modalNine.style.display = 'none';
    }
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
   'assets/images/white-duck-wizard.png',
   'assets/images/white-duck-wizard2.png',
   'assets/images/white-duck-apple.png',
   'assets/images/white-duck-apple2.png',
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
