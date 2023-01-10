function dropDice() {
  return Math.floor(Math.random() * 6) + 1;
}

var randomNumber1 = dropDice();
var img1Attribute = "images/dice" + randomNumber1 + ".png";
var img1 = document.querySelector(".img1");
img1.setAttribute("src", img1Attribute);

var randomNumber2 = dropDice();
var img2Attribute = "images/dice" + randomNumber2 + ".png";
var img2 = document.querySelector(".img2");
img2.setAttribute("src", img2Attribute);

var heading = document.querySelector("h1");
if (randomNumber1 > randomNumber2) {
  heading.innerHTML = "🏆 Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  heading.innerHTML = "Player 2 Wins! 🏆";
} else {
  heading.innerHTML = "Draw!";
}
