//initialLoad.js
window.onload = function () {  
  ctxF.drawImage(img1, 10, 10);
  loadState();
 };
  
 var fCanvas = document.getElementById("fg-canvas");
 var ctxF = fCanvas.getContext("2d");
 
 var img1 = new Image();
 img1.src = 'Images/skullFlag1.png';
 
 playerX = 200;
 playerY = 200;
 playerRadius = 20;
 
 enemyX = 400;
 enemyY = 400;
 playerRadius = 20;

function beginQuest() {alert('LET THE QUEST BEGIN!!!!');}


//entities.js
var player = 
{
 xPos : 30,
 yPos : 30,
 color : "white",
 health: 100
};

var enemy = 
{
 xPos : 100,
 yPos : 100,
 color : "red",
 health: 100
};

//inGame.js
function loadState()
{
	//Set Up Canvas
	ctxF.clearRect(0, 0, 1000, 1000);
	ctxF.drawImage(img1, 10, 10);
	
	//Draw Player
	ctxF.beginPath();
	ctxF.strokeStyle = "blue";
	ctxF.fillStyle = "white";
	ctxF.arc(player.xPos, player.yPos, playerRadius, 0,2*Math.PI);
	ctxF.fill();
	ctxF.stroke();
	
	//Draw enemies
	ctxF.beginPath();
	ctxF.strokeStyle = "blue";
	ctxF.fillStyle = "red";
	ctxF.arc(enemy.xPos, enemy.yPos, playerRadius, 0,2*Math.PI);
	ctxF.fill();
	ctxF.stroke();
}

function checkState()
{
	if (player.xPos <= 0) {player.xPos = 0}
	if (player.xPos >= fCanvas.width) {player.xPos = fCanvas.width}
	if (player.yPos <= 0) {player.yPos = 0 + 20}
	if (player.yPos >= fCanvas.height) {player.yPos = fCanvas.height}
}

function moveLeft()
{
	loadState();
	player.xPos -= 10;
	checkState();
}

function moveRight()
{
	loadState();
	player.xPos += 10;
	checkState();
}

function moveUp()
{
	loadState();
	player.yPos -= 10;
	checkState();
}

function moveDown()
{
	loadState();
	player.yPos += 10;
	checkState();
}

window.addEventListener("keypress", checkKeyPress, false);

function checkKeyPress(e) {
 //console.log(e.keyCode);
 if (e.keyCode == "97") {moveLeft();}	
 if (e.keyCode == "119") {moveUp();}	
 if (e.keyCode == "100") {moveRight();}	
 if (e.keyCode == "115") {moveDown();}	
}