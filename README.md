# White Duck Says Hello!


![club logo](/assets/images/white-duck-quacks.png)

## Table of contents

1. [Introduction](#introduction)
1. [UX](#ux)
    * [Demographics](#demographics)
    * [User Stories](#user-stories)
    * [Development Planes](#development-planes)
    * [Design](#design)
1. [Features](#features)
    * [Design Features](#design-features)
    * [Additional Comments](#additional-comments)
    * [Future Features](#future-features)
1. [Final Product](#final-product)
    * [Desktops](#desktops)
    * [Laptops](#laptops)
    * [Tablets](#tablets)
    * [Mobiles](#mobiles)
1. [Troubles](#troubles)
1. [Technical Information](#technical-information)
    * [Languages Used](#languages-used)
1. [Credits](#credits)
    * [Art work](#art-work)
    * [Texts](#texts)
    * [Websites Consulted](#websites-consulted)
1. [Acknowledgements](#acknowledgements)
1. [About](#about)


## Introduction </a>

White Duck Says Hello! is a humorous two page website about a duck who is learning JavaScript and wants to show off the new tricks he can do.

The basic idea for this project is to tell simple interactive stories through words and illustrations.

Because I have been struggling to understand JavaScript I decided to keep it simple and try to make the most of it.

The main page comprises of 2 different sections, displayed in boxes, plus some extra simple effects like changing the background colour of the pages.

This project was conceived as a response to our JavaScript Essentials Porfolio 2 project at The Code Institute for their Full Stack Web Development Program. It is an interactive front-end website, written in HTML, CSS and JavaScript.

[Back to the top](#white-duck-says-hello)

## UX

### Demographics

**Ideal users of this website**
* People interested in art and design
* People interested in JavaScript and front-end programming languages, especially beginners
* Young families
* Family and friends

### User Stories

*As a person interested in art and design:*
1. I want to get to see the art work in this website.
2. I want to get to see more of Patricia’s work.
3. I want to follow Patricia on social media to stay up to date with her art.

*As a person interested in programming:*
1. I want to get ideas of what can be done in JavaScript, HTML and CSS
2. I want to stay in touch with Patricia and exchange ideas and experiences.

*As a parent/carer of young children*
1. I want to have a fun time and a giggle with my children by looking and talking about the cute illustrations and reading the silly stories

*As Patricia's family, friend or acquaintance:*
1. I want to see what she’s up to.

### Development Planes
It took me an awful long time to "get" JavaScript. And when I say that, I mean that.

I started off with a very simple idea of changing the background colour of a page. Then I started to build upon this until I arrived at the final product.

#### Strategy

**Audiences**
* Art and design lovers
* New and aspiring programers
* Family, friends and acquaintances
* Young families

**What the user needs to achieve**
* Stay engaged:
    * Interact with the site
    * Explore new possibilities
    * Be inspired by what can be done with JavaScript
    * Have a giggle, maybe

**What the developer needs to achieve**
* Provide user with an easy and fun experience
* Provide an accessible way for user to stay in touch
￼
![main image](/assets/images/viability-importance.jpg)

#### Scope
* Content Requirements
    * Illustrations
    * Stories
    * Interactive features
* Functionality Requirements
    * The user will be able to:
        * Interact with contents of site
        * Manipulate content and have a bit of fun

#### Structure

**Skeleton**

**Balsamiq wireframes**

![main image](/assets/README/Home.png)
![main image](/assets/README/About.png)
![main image](/assets/README/phone-home.png)
![main image](/assets/README/phone-about.png)
![main image](/assets/README/tablet-home.png)
![main image](/assets/README/tablet-about.png)

**iPad drawing**

![main image](/assets/README/ipad-drawing.jpg)

#### Design

**Colour Scheme**

Vibrant and bold colours were chosen for this project to match with the simple and bold illustrations.
￼

**Typography**

The fonts used were Roboto Mono and Uchen, with Helvetica as a fall back.


**Illustrations**

All illustrations were made by me for the purpose of this project. The illustrations are digital and were made on Procreate, iPad. Basically, the same image of White Duck is used over and over again with added accessories and props. The idea is to convey a sense of humour and simplicity in accordance with the very simplistic approach taken in the use of JavaScript. The illustrations were saved on .png format to make use of the transparent background feature, which was a requirement for the purpose of this particular website.

![main image](/assets/images/white-duck-wizard.png)
￼
[Back to the top](#white-duck-says-hello)

## Features

### Design Features

The website has two pages: Home and About
Both pages of the website contain:
* Header with logo and navigation menu (Home and About pages)
* Instructions on how to use site (opens a modal)
* Clickable logo that changes background colour
* Clickable White Duck image in footer that randomly changes a bigger version of White Duck beside it
* Footer with links to social media and GitHub styled with Font Awesome

Home page contains:
* The main content: two boxes
1. Box with images to be clicked (opens a modal)
2. Random story generator

About page contains:
* Brief introduction about me, Patricia Melo, the developer
* Brief explanation about the project
* A form

### Additional Comments

I went from being extremely confused, overwhelmed and frustrated by JavaScript to being slightly less confused, overwhelmed and frustrated, which about a week ago I never thought I would make any progress.

Unfortunately I ran out of time and wasn't able to finish this project properly.

### Future Features:

I can see great potential for developing this project further in the future. First of all, the way it's laid out makes it fairly straight forward to add more boxes with new features. Possible features include:
* Memory game
* Quiz
* More complex functions involving timer and interaction between stories and illustrations

[Back to the top](#white-duck-says-hello)

## Final Product

### Desktops

![main image](/assets/README/desktop.jpg)
![main image](/assets/README/footer.jpg)

### Laptops

![main image](/assets/README/laptop.jpg)
![main image](/assets/README/laptop2.jpg)
![main image](/assets/README/laptop3.jpg)

### Tablets

![main image](/assets/README/iPad.jpg)
![main image](/assets/README/iPad2.jpg)

### Mobiles

![main image](/assets/README/mobile.jpg)
![main image](/assets/README/mobile2.jpg)
![main image](/assets/README/mobile3.jpg)
![main image](/assets/README/mobile4.jpg)

### Modals

![main image](/assets/README/modal.jpg)
![main image](/assets/README/modal2.jpg)

[Back to the top](#white-duck-says-hello)


## Troubles

* Overall, I found this project extremely challenging to the point where it makes me wonder if I will ever
get better at programming. I kept trying to add more advanced features but only to find myself out of my depth each time. In the end I decided to settle for something very basic but to make it tastefully and have a bit of fun while doing it. I dedicated many more hours to this project than I should have, probably, and got stuck several times trying to fix something. I like the end result but I do acknowledge that it might not be good enough.

[Back to the top](#white-duck-says-hello)

## Technical Information

### Languages Used
* HTML5
* CSS3
* JavaScript

### List of files
* index.html
* about.html
* script.js
* script-about.js
* style.css


### JavaScript Features

1. At the top in both the Home and About pages, there is the logo on both home and about pages. When the mouse hovers the duck the image changes and changes back once the mouse is no longer hovering it.
```
var logoImage = document.images['jsbutton'];

 function changeImage() {
   document.images['jsbutton'].src = './assets/images/white-duck-quacks2.png';
   return true;
 }

 function changeImageBack() {
   document.images['jsbutton'].src ='./assets/images/white-duck-quacks.png'
 }
```
The functions changeImage() and changeImageBack() are called in the html document
```
  <button id="hello" class="white-duck" onMouseOver="return changeImage()" onMouseOut= "return changeImageBack()">
```
The logo is clickable and will change the background colour of the active page.
```
var colors = ['#FF5733', '#FFBD33', '#334bff', '#FF5733', '#FF8A33', '#FFBD33',
'#5e6aad', '#905ead', '#ad3e3e', '#55701f', '#1f7033', '#1f2a70', '#701f5e'];

var i = 0;

document.querySelector('.white-duck').addEventListener('click', function() {
  i = i < colors.length ? ++i : 0;
document.querySelector('body').style.background = colors[i]
})
```
1. Above the logo in both the Home and About pages, there is a link with simple instructions on how to use the site and a list of the features being described here. Upon a click, it will open a modal window.
```
var modal = document.getElementById('myModal');
var modalButton = document.getElementById('how-to');
var span = document.getElementsByClassName('close')[0];

modalButton.onclick = function() {
  modal.style.display = 'block';
}

span.onclick = function() {
  modal.style.display = 'none';
}
```
1. In the container in the Home page only, there are two boxes. The first contains 9 small icons of White Duck in various costumes. When the mouse hovers each icon it changes and changes back once mouse is no longer hovering it.
1. In the second box in the container in the Home page only, there’s a random story generator that works by clicking on the single White Duck icon. A new story is generated every time the icon is clicked on. The same mouse hover feature used before is being used here.
```
let randomStory = document.querySelector('.random-story');
let story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

let storyText = "Once upon a time, there was an enigmatic creature in town. One day, :insert1:. :insert2: because :insert3: But the day after, :insert4: After that, they finally found out who was behind it all: it was White Duck :insert5:. Then all people were :insert6: The end.";

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
```
1. At the footer in both Home and About pages, there’s the last feature in which the small White Duck can be clicked on to randomly display a new bigger picture of White Duck.
```
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
```


[Back to the top](#white-duck-says-hello)

## Credits

### Art Work

All illustrations were made by me, Patricia Melo (developer and artist)

### Texts

All texts were written by me, Patricia Melo (developer and artist)

### Websites Consulted

* [Font Awesome](https://fontawesome.com/icons/instagram-square?style=brands)
* [W3Schools](https://www.w3schools.com/)
* [HTML Color Codes - color picker](https://htmlcolorcodes.com/color-picker/)
* [CSS Tricks - math random](https://css-tricks.com/lots-of-ways-to-use-math-random-in-javascript/)
* [CSS Tricks - flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
* [JavaScript tutorial](https://www.javascripttutorial.net/javascript-dom/javascript-setattribute/)
* [Thought Co](https://www.thoughtco.com/moving-javascript-out-of-the-web-page-2037542)
* [codegrepper](https://www.codegrepper.com/code-examples/javascript/change+image+background+color+javascript)
* [Mozilla - Silly Story Generator](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Silly_story_generator)
* [Diff Checker](https://www.diffchecker.com/diff)
* [java T point - random image generator](https://www.javatpoint.com/random-image-generator-in-javascript)
* [stackoverflow](https://stackoverflow.com/questions/41667237/making-an-array-of-file-paths-in-javascript)
* [JavaScript Coder](https://www.javascript-coder.com/button/javascript-button-p1/)
* [Learn Enough](https://www.learnenough.com/)
* [Source Decoded](https://www.youtube.com/channel/UCl0hPcsUmeld49qmWWSQKOg/playlists)
* [Free Code Camp](https://www.freecodecamp.org/news/javascript-projects-for-beginners/)
* [errosea](https://errorsea.com/how-to-change-text-onclick-event-javascript/)
* [HTML validator](https://validator.w3.org/nu/)
* [CSS validator](http://www.css-validator.org/)


*Note:* Even though the best efforts have been made to acknowledge all the websites, articles and codes used for this project, it is possible that some of them haven't been listed here. If that is the case, I sincerely apologise.

[Back to the top](#white-duck-says-hello)

## Acknowledgements

I would like to thank my mentor, Seun, for her help and to the Code Institute Student Care people for their support when I needed it.

[Back to the top](#white-duck-says-hello)

## About

My name is Patricia Melo. I am an artist and I am a Software Development student at the Code Institute. You can contact me by [email](mailto:contact@patriciamelo.ie).

*******

![white-duck](/assets/images/white-duck-apple2.png)

[Back to the top](#white-duck-says-hello)
