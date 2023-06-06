// For 1st Dicee

var n = Math.random()*6;
var randomNumber1 = Math.floor(n) + 1;

if (randomNumber1 === 1){
    document.querySelector(".img1").setAttribute("src", "images/dice1.png");
}
else if (randomNumber1 === 2){
    document.querySelector(".img1").setAttribute("src", "images/dice2.png");
}
else if (randomNumber1 === 3){
    document.querySelector(".img1").setAttribute("src", "images/dice3.png");
}
else if (randomNumber1 === 4){
    document.querySelector(".img1").setAttribute("src", "images/dice4.png");
}
else if (randomNumber1 === 5){
    document.querySelector(".img1").setAttribute("src", "images/dice5.png");
}
else {
    document.querySelector(".img1").setAttribute("src", "images/dice6.png");
}

// For 2nd Dicee

var a = Math.random()*6;
var randomNumber2 = Math.floor(a) + 1;

if (randomNumber2 === 1){
    document.querySelector(".img2").setAttribute("src", "images/dice1.png");
}
else if (randomNumber2 === 2){
    document.querySelector(".img2").setAttribute("src", "images/dice2.png");
}
else if (randomNumber2 === 3){
    document.querySelector(".img2").setAttribute("src", "images/dice3.png");
}
else if (randomNumber2 === 4){
    document.querySelector(".img2").setAttribute("src", "images/dice4.png");
}
else if (randomNumber2 === 5){
    document.querySelector(".img2").setAttribute("src", "images/dice5.png");
}
else {
    document.querySelector(".img2").setAttribute("src", "images/dice6.png");
}

// For Displaying Result

if (randomNumber1 > randomNumber2){
    document.querySelector("h2").textContent = "Player 1 Wins! 🚩";
}

else if (randomNumber1 < randomNumber2){
    document.querySelector("h2").textContent = "Player 2 Wins! 🚩";
}

else {
    document.querySelector("h2").textContent = "Draw!";
}