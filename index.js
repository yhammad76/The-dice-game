// My Solution;
//
// let randomNumber1 = Math.floor((Math.random() * 6)) + 1;
// if (randomNumber1 === 1) {
//   document.querySelector("img.img1").setAttribute("src", "/Users/yhammad/Desktop/The Dice project/Dicee Challenge - Starting Files/images/dice1.png");
// } else if (randomNumber1 === 2) {
//   document.querySelector("img.img1").setAttribute("src", "/Users/yhammad/Desktop/The Dice project/Dicee Challenge - Starting Files/images/dice2.png");
// } else if (randomNumber1 === 3) {
//   document.querySelector("img.img1").setAttribute("src", "/Users/yhammad/Desktop/The Dice project/Dicee Challenge - Starting Files/images/dice3.png");
// } else if (randomNumber1 === 4) {
//   document.querySelector("img.img1").setAttribute("src", "/Users/yhammad/Desktop/The Dice project/Dicee Challenge - Starting Files/images/dice4.png");
// } else if (randomNumber1 === 5) {
//   document.querySelector("img.img1").setAttribute("src", "/Users/yhammad/Desktop/The Dice project/Dicee Challenge - Starting Files/images/dice5.png");
// } else if (randomNumber1 === 6) {
//   document.querySelector("img.img1").setAttribute("src", "/Users/yhammad/Desktop/The Dice project/Dicee Challenge - Starting Files/images/dice6.png");
// }
//
// let randomNumber2 = Math.floor((Math.random() * 6)) + 1;
// if (randomNumber2 === 1) {
//   document.querySelector("img.img2").setAttribute("src", "/Users/yhammad/Desktop/The Dice project/Dicee Challenge - Starting Files/images/dice1.png");
// } else if (randomNumber2 === 2) {
//   document.querySelector("img.img2").setAttribute("src", "/Users/yhammad/Desktop/The Dice project/Dicee Challenge - Starting Files/images/dice2.png");
// } else if (randomNumber2 === 3) {
//   document.querySelector("img.img2").setAttribute("src", "/Users/yhammad/Desktop/The Dice project/Dicee Challenge - Starting Files/images/dice3.png");
// } else if (randomNumber2 === 4) {
//   document.querySelector("img.img2").setAttribute("src", "/Users/yhammad/Desktop/The Dice project/Dicee Challenge - Starting Files/images/dice4.png");
// } else if (randomNumber2 === 5) {
//   document.querySelector("img.img2").setAttribute("src", "/Users/yhammad/Desktop/The Dice project/Dicee Challenge - Starting Files/images/dice5.png");
// } else if (randomNumber2 === 6) {
//   document.querySelector("img.img2").setAttribute("src", "/Users/yhammad/Desktop/The Dice project/Dicee Challenge - Starting Files/images/dice6.png");
// }
//
// if(randomNumber1 > randomNumber2){
//   document.querySelector("h1").innerHTML = "Player 1 Wins!";
// }else if (randomNumber1 < randomNumber2) {
//   document.querySelector("h1").innerHTML = "Player 2 Wins!";
// }else if (randomNumber1 === randomNumber2) {
//   document.querySelector("h1").innerHTML = "Draw!";
// }

// Angela's solution;

let randomNumber1 = Math.floor((Math.random() * 6)) + 1;
let imageSource1 = "images/dice" + randomNumber1 + ".png";
document.querySelector("img.img1").setAttribute("src", imageSource1);

let randomNumber2 = Math.floor((Math.random() * 6)) + 1;
let imageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelector("img.img2").setAttribute("src", imageSource2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🇩🇪 Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "🇪🇬 Player 2 Wins!";
} else if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerHTML = "Draw!";
}