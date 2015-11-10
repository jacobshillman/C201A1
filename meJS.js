//Contact Me:
function agree() {
  alert("I agree to the terms and conditions -especially donating my kidney.");
}

function today() {
  var dtg = new Date();
  document.getElementById("DTG").insertAdjacentHTML('beforeend', dtg);
}

//Guessing game:
var userCount = 0;
var houseCount = 0;

var answer = [
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
  'hole in the water you throw money into',
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

function gg() { //1
  if (confirm("Let's play 'What am I thinking!'")) { //2
    var indexNumber = Math.floor(Math.random()*24); //24 items in hint/answer arrays.
    var guess = prompt(hint[indexNumber], "Your answer:");
      if (guess.toLowerCase() == answer[indexNumber]) { //3
        userCount++;
        var userScored = document.getElementById("userScoreDisplay");
        userScored.value = userCount;
          if (confirm("You so SMART!! \n\nPoint for you! \n\n Play again??")) { //4
            gg();
          } /*4*/else{ //5
            return false;
          } /*5*/;
  } /*3*/ else{ //6
        houseCount++;
        var houseScored = document.getElementById("houseScoreDisplay");
        houseScored.value = houseCount;
        if (confirm("The force is WEAK in this one. \n\nPoint for the house!
            \n\n Play again??")) { //7
          gg();
        } /*7*/ else{ //8
          return false;
        }/*8*/;
      }/*6*/;
  }/*2*/else{ //9
    return false;
    }/*9*/;
} /*1*/;
