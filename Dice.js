//----------------the first img---------------
// generating random number:
let randomNumber1 = Math.floor(Math.random() * 6 + 1); // 1 - 6
// generating random image:
let randomDiceImage = "dice" + randomNumber1 + ".png"; // dice1.png - dice6.png
// locating the the source:
let imageSource = "diceImages/" + randomDiceImage;
// selecting the first img src:
let img1 = document.querySelectorAll("img")[0];
// changing the src of the img:
img1.setAttribute("src", imageSource);

//-------------the second img-------------------
let randomNumber2 = Math.floor(Math.random() * 6 + 1);

let randomDiceImage2 = "dice" + randomNumber2 + ".png";

let imageSource2 = "diceImages/" + randomDiceImage2;

let img2 = document.querySelectorAll("img")[1]

img2.setAttribute("src", imageSource2);
//-----------------------------------------------

if (randomNumber1 > randomNumber2){
	document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if (randomNumber2 > randomNumber1)
{
	document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else
{
	document.querySelector("h1").innerHTML = "Draw!";
}