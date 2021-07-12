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

// Gallery in the first box

// First image
var whiteDuckMermaid = document.images['white-duck-mermaid'];

// to change image when mouse hovers
  function changeImageMermaid() {
    document.images['white-duck-mermaid'].src = './assets/images/white-duck-mermaid2.png';
    return true;
  }

// to change back to the original image
  function changeImageMermaidBack() {
    document.images['white-duck-mermaid'].src ='./assets/images/white-duck-mermaid.png'
  }

// Modal for first image
var modalOne = document.getElementById('mermaidModal');
var modalButtonOne = document.getElementById('white-duck-mermaid');
var spanOne = document.getElementsByClassName('closeOne')[0];

modalButtonOne.onclick = function() {
  modalOne.style.display = 'block';
}

spanOne.onclick = function() {
  modalOne.style.display = 'none';
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

// Modal for second image
var modalTwo = document.getElementById('wizardModal');
var modalButtonTwo = document.getElementById('white-duck-wizard');
var spanTwo = document.getElementsByClassName('closeTwo')[0];

modalButtonTwo.onclick = function() {
  modalTwo.style.display = 'block';
}

spanTwo.onclick = function() {
  modalTwo.style.display = 'none';
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

// Modal for third image
var modalThree = document.getElementById('chillModal');
var modalButtonThree = document.getElementById('white-duck-chill');
var spanThree = document.getElementsByClassName('closeThree')[0];

modalButtonThree.onclick = function() {
  modalThree.style.display = 'block';
}

spanThree.onclick = function() {
  modalThree.style.display = 'none';
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

// Modal for fourth image
var modalFour = document.getElementById('glassesModal');
var modalButtonFour = document.getElementById('white-duck-glasses');
var spanFour = document.getElementsByClassName('closeFour')[0];

// Function to open modal
modalButtonFour.onclick = function() {
  modalFour.style.display = 'block';
}

// Function to close window
spanFour.onclick = function() {
  modalFour.style.display = 'none';
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

// Modal for fifth image
var modalFive = document.getElementById('appleModal');
var modalButtonFive = document.getElementById('white-duck-apple');
var spanFive = document.getElementsByClassName('closeFive')[0];

// Function to open the modal
modalButtonFive.onclick = function() {
  modalFive.style.display = 'block';
}

// Function to close the modal
spanFive.onclick = function() {
  modalFive.style.display = 'none';
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

// Modal for the sixth image
var modalSix = document.getElementById('leavesModal');
var modalButtonSix = document.getElementById('white-duck-leaves');
var spanSix = document.getElementsByClassName('closeSix')[0];

// Function to open the modal
modalButtonSix.onclick = function() {
  modalSix.style.display = 'block';
}

// Function to close the modal
spanSix.onclick = function() {
  modalSix.style.display = 'none';
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

// Modal for the seventh image
var modalSeven = document.getElementById('loveModal');
var modalButtonSeven = document.getElementById('white-duck-love');
var spanSeven = document.getElementsByClassName('closeSeven')[0];

// Function to open the modal
modalButtonSeven.onclick = function() {
  modalSeven.style.display = 'block';
}

// Function to close the modal
spanSeven.onclick = function() {
  modalSeven.style.display = 'none';
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

// Modal for the eighth image
var modalEight = document.getElementById('monocleModal');
var modalButtonEight = document.getElementById('white-duck-monocle');
var spanEight = document.getElementsByClassName('closeEight')[0];

// Function to open the modal
modalButtonEight.onclick = function() {
  modalEight.style.display = 'block';
}

// Function to open the modal
spanEight.onclick = function() {
  modalEight.style.display = 'none';
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

// The Modal for the nineth image
var modalNine = document.getElementById('umbrellaModal');
var modalButtonNine = document.getElementById('white-duck-umbrella');
var spanNine = document.getElementsByClassName('closeNine')[0];

// Function to open the modal
modalButtonNine.onclick = function() {
  modalNine.style.display = 'block';
}

// Function to close the modal
spanNine.onclick = function() {
  modalNine.style.display = 'none';
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

// second box
var boxTwoImage = document.images['box-two-image'];

// to change image when mouse hovers
  function changeBoxTwoImage() {
   document.images['box-two-image'].src = './assets/images/white-duck-reading2.png';
   return true;
  }

// to change back to the original image
  function changeBoxTwoImageBack() {
   document.images['box-two-image'].src ='./assets/images/white-duck-reading.png'
  }

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

let storyText = "Once upon a time, there was an enigmatic creature in town. One day, :insert1:. :insert2: because :insert3: But the day after, :insert4: After that, they finally found out who was behind it all: it was White Duck :insert5:. Then all people were :insert6: The end.";

// parts of text that change randomly

let insert1 = ["there was a raging storm",
"an apple hit a house",
"the sky turned green",
"the dice were rolled",
"a firefly was tired"];

let insert2 = ["There was a terrible commotion amongst the people",
"Everybody started to laugh",
"The people screamed and shut their eyes",
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
"the grapes tasted funny.",
"the sky collapsed and squashed the world.",
"everyone decided to play rolly polly down the hill.",
"they all feasted on pineapples."
];

let insert5 = ["dressed up as a mermaid",
"in a wizard costume",
"in wooly hat and scarf",
"wearing cool sunglasses",
"disguised as an apple",
"covered in leaves",
"who had fallen in love",
"wearing a monocle and a fake moustache",
"holding an umbrella",
];

let insert6 = ["happy ever after.",
"sad ever after.",
"very cranky.",
"so sore they had to go to hospital.",
"dead after that.",
"really mad at him.",
"relieved."];

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
