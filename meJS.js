//Swapping images:
function bigJake() {
  document.getElementById("thumb").src="Images/Jake-VA-small.jpg";
}

function littleJake() {
  document.getElementById("thumb").src="Images/Jake-VA-tiny.jpg";
}

function bigBobby() {
  document.getElementById("clown").src="Images/Bobby-DUI-small.jpg";
}

function littleBobby() {
  document.getElementById("clown").src="Images/Bobby-DUI-tiny.jpg";
}

//Contact Me:
function agree() {
  alert("I agree to the terms and conditions -especially donating my kidney.");
}

function today() {
  var dtg = new Date();
  document.getElementById("DTG").insertAdjacentHTML('beforeend', dtg);
}

//Guessing game:
var guess = [
  'dog',
  'fish',
  'car',
  'giraff',
  'fern',
  'boat',
  'house',
  'coin',
  'screwdriver',
  'armchair',
  'water bottle',
  'glass',
  'table',
  'vase',
  'spoon',
  'stairs',
  'light',
  'fence',
  'berries',
  'lamp',
  'boot',
  'coat',
  'door',
  'basket',
  'drawer'];

var hint = [
  'Snoop ____',
  'swim like a ____',
  'you drive one',
  'long neck',
  'Where the Red ____ Grows',
  'floats',
  'you live in one',
  'less than a bill',
  'tool',
  'comfy',
  'holds thirst quencher',
  'you can see through it',
  'put stuff on it',
  'for plants',
  'utensil',
  'climb them before bed',
  'stay away from it',
  'keeps you in, and them out',
  'natural desert',
  'helps you see the light',
  'hiking ____',
  '____ of arms',
  'has a knob',
  'coding JavaScript makes me a _______ case!',
  'socks go in one'];

function dupe() {
  alert("Play now?");
  gg();
}

function gg() {
  confirm("Let's play 'What am I thinking!'");
//  prompt("Guess what I'm thinking!:");
}

function openNewName() {
    var nm = prompt("Name");
    var ph = prompt("Phone Number");
  };
