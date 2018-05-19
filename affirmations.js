var chosenAffirmation;
var writeHeight;
var textColors = ["blue", "red", "orange", "#dd3bccf", "green"]

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.font = "30px Arial";

function writeAffirmation()
{
 var currentColor = Math.floor(Math.random() * Math.floor(5));
 ctx.fillStyle = textColors[currentColor]; 

 ctx.clearRect(0, 0, 800, 400);
 writeHeight = Math.floor(Math.random() * Math.floor(350)) + 20;
 ctx.fillText("I love computer programming and meditation", 10, writeHeight);
}

setInterval(writeAffirmation, 100);

function chooseAffirmation()
{
 chosenAffirmation = prompt("Type an affirmation");
}

