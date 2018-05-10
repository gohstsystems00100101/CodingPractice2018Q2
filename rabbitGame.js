var c = document.getElementById("screen0");
var ctx = c.getContext("2d");
var c = document.getElementById("screen1");
var ctx2 = c.getContext("2d");


var player =
{
 healthPts : 100,
 scorePts : 10,
 attk : 1,
 def : 1,
 speed : 10,
 skills :
 {
  attack : function attack()
  {
   alert("attack!");	  
  },
  
  defend : function defend()
  {
   alert("defend!");	  
  }
 },
 xPos : 130,
 yPos : 0,
 subImgXTop : 138,
 subImgYTop : 19
}


function drawTopInfo()
{
//Create gradient
var grd = ctx.createLinearGradient(0, 0, 700, 0);
grd.addColorStop(0, "blue");
grd.addColorStop(1, "white");

// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(0, 0, 700, 70);

ctx.fillStyle = "black";
ctx.font = "30px Arial";
ctx.fillText("Health: " + player.healthPts, 10, 50);
ctx.fillText("Score: " + player.scorePts, 200, 50);
ctx.fillText("Attk: " + player.attk, 400, 50);
ctx.fillText("Def: " + player.def, 500, 50);
}

var img = new Image();
img.src = 'Images/tileSheet1.png';

var playerImg = new Image();
playerImg.src = 'Images/bunnySheet1.png';

var skyImg = new Image();
skyImg.src = 'Images/skyBkgd.png';

 
 
function drawBottomText()
{

 ctx.fillStyle = "#acacff";
 ctx.fillRect(0, 340, 700, 340);
 ctx.fillStyle = "white";
 ctx.font = "30px Arial";
 ctx.fillText("Welcome, warrior!", 20, 370);
}

function drawBkgd()
{
 img.onload = function()
 {
  ctx.drawImage(img, 130, 100, 64, 34, 0, 270, 700, 70);
 }
 
 skyImg.onload = function()
 {
  ctx.drawImage(skyImg, 0, 70, 700, 230);
 }
 
}


function drawPlayer()
{
 playerImg.onload = function()
 {
  ctx2.drawImage(playerImg, 138, 19, 21, 23, player.xPos, 260, 21, 23);
 }
}



function runGameLoop()
{
drawTopInfo();
drawBottomText();
drawBkgd();
drawPlayer();
drawItems();
}


function checkBounds()
{
	//f (player.xPos > 700) {alert(ctx2.width);}
	if (player.xPos <= 0) {player.xPos = 0}
	if (player.xPos >= 700) {player.xPos = 670}
	//if (player.yPos <= 0) {player.yPos = 0 + 20}
	//if (player.yPos >= fCanvas.height) {player.yPos = fCanvas.height}
}



function moveLeft()
{
	//alert("move left!" + "  player.xPos is now: "+ player.xPos);
	//loadState();
	player.xPos -= player.speed;
	ctx2.clearRect(0, 0, 700, 340);
	checkBounds();
	drawPlayer();
	player.subImgXTop = 137;
	player.subImgYTop = 259;
	ctx2.drawImage(playerImg, player.subImgXTop, player.subImgYTop, 29, 25, player.xPos, 260, 29, 25);

	//checkState();
}

function moveRight()
{
	player.xPos += player.speed;
	ctx2.clearRect(0, 0, 700, 340);
	drawPlayer();
	checkBounds();
	player.subImgXTop = 134;
	player.subImgYTop = 218;
	ctx2.drawImage(playerImg, player.subImgXTop, player.subImgYTop, 29, 25, player.xPos, 260, 29, 25);
	
}

function jumpUp()
{
}

function duckDown()
{
}

window.addEventListener("keypress", checkKeyPress, false);

function checkKeyPress(e) 
{
 //console.log(e.keyCode);
 if (e.keyCode == "97") {moveLeft();}	
 if (e.keyCode == "119") {moveUp();}	
 if (e.keyCode == "100") {moveRight();}	
 if (e.keyCode == "115") {moveDown();}	
}
 
 runGameLoop();

 
 