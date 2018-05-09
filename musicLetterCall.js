//Musical note&chord random call out program

/*
1. create variables

In each loop:
 randomize nextLetterNumber value
 run switch on nextLetterNumber to reassign nextLetter/bkgdColor/letterColor
 clear screen & print value of nextLetter to screen
 
 check input fields & adjust settings accordingly
 
*/

var c = document.getElementById("screen0");
var ctx = c.getContext("2d");
var c = document.getElementById("screen1");
var ctx2 = c.getContext("2d");

var bkgdMusicImg1 = new Image();
bkgdMusicImg1.src = 'Images/waterBkgd.jpg';

var 
 nextLetterNumber = 1,
 nextLetter = 'A',
 bkgdImg = 'bkgroundURL',
 letterColor = '#0f1',
 loopSpeed = 1000;



function drawScreens()
{
 //draw back screen image 
 function drawBkgd()
 {
  bkgdMusicImg1.onload = function()
  {
   ctx.drawImage(bkgdMusicImg1, 0, 0, 64, 34);
  } 
 } 
} 

//draw front screen code block
 function drawFrgd()
 {
  
   ctx.fillStyle = "#aaaaff";
   ctx.fillRect(0, 0, 700, 400);

   ctx.fillStyle = letterColor;
   ctx.font = "30px Arial";
   ctx.fillText(nextLetter , 200, 50);  
 }


var loop = function()
{
 var nextLetterNumber = 1;
 var nextLetter = 'A';
 
 nextLetterNumber = Math.ceil(Math.random() * Math.ceil(6));

 switch (nextLetterNumber)
 {
  case 1 : 
   nextLetter = 'A';
   letterColor = '#0f1';
   break;
  
  case 2 : 
   nextLetter = 'B';
   letterColor = '#0f1';
   break;
   
  case 3 :
   nextLetter = 'C';
   letterColor = '#0f1';
   break;
   
  case 4 :
   nextLetter = 'D';
   letterColor = '#0f1';
   break;
   
  case 5 :
   nextLetter = 'E';
   letterColor = '#0f1';
   break;
   
  case 6 :
   nextLetter = 'F';
   letterColor = '#0f1';
   break;
   
  case 7 :
   nextLetter = 'G';
   letterColor = '#0f1';
   break;
 }
 
   
   
   
   ctx.fillStyle = letterColor;
   ctx.font = "40px Arial";
   ctx.fillText(nextLetter, xPos, 100);
   xPos += 50;
   if (xPos >= 600)
   {
	   xPos = 50;
	   ctx.fillStyle = "#2daa1a";
       ctx.fillRect(0, 0, 700, 400);
   }
	   
};
 
xPos = 100;
ctx.fillStyle = "#2daa1a";
ctx.fillRect(0, 0, 700, 400);

  setInterval(function() {loop();}, 1000);
   
  //  setInterval(test(), 1000);