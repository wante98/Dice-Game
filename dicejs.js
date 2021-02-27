// Create a Random Number
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
//dice1.png - dice6.png
var randomDiceImg = "dice" + randomNumber1 + ".png";

var randomImageSource = "images/" + randomDiceImg; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImg2 = "dice" + randomNumber2 + ".png";

var randomImageSource2 = "images/" + randomDiceImg2;

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);

//if player 1 wins
if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML =" Player 1 Wins!";
}

else if(randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML =" Player 2 Wins!";
}
else{
  document.querySelector("h1").innerHTML = "Draw";
}
