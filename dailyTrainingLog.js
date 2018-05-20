/*
/  HABIT TIMER
*/

var date;
var lastResetTime;

function resetFastingTimer()
{
 date = new Date();
 //alert((date.getMonth() + 1) + '/' + date.getDate() + '/' +  date.getFullYear());
 document.getElementById("fastingTimeDisplay").innerHTML = 
  "Time since last meal: " + date.getDate() + '/' + (date.getMonth() + 1) + '/' +   date.getFullYear() + 
  ' @ ' + date.getHours() + ":" + (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
  
 var currentTimer =  "Time since last meal: " + date.getDate() + '/' + (date.getMonth() + 1) + '/' +   date.getFullYear() + 
  ' @ ' + date.getHours() + ":" + (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();

 lastResetTime = currentTimer;

 // Store most recent reset time
 localStorage.setItem("lastResetTime", currentTimer);
 // Retrieve most recent reset time
 var currentHabitTimer =  localStorage.getItem("lastResetTime");
}

function displayMostRecentTime()
{
 // Retrieve most recent reset time
 document.getElementById("fastingTimeDisplay").innerHTML = localStorage.getItem("lastResetTime");	
}


/*
/  Daily Hourly Training
*/
function toggleTrainingTimer(itemNum)
{
	
 //currentTime - timerStartTime[]	= timerTime[]
 var date = new Date();
 //alert(date);
 
 var interval = [];
 interval[itemNum] = setInterval(function(){idate = new Date(); document.getElementById("timer" + itemNum).innerHTML = idate.getHours() + ":" + (idate.getMinutes() < 10 ? '0' : '') + idate.getMinutes() + ":" + idate.getSeconds() + (idate.getSeconds() < 10 ? '0' : '')}, 1000);
 
 if (interval[itemNum])
 {	 
  clearInterval(interval[itemNum]);
 }

}

///// set and clear interval testing
var light;

function change() {
    if (!light) {
        light = window.setInterval(disco,100);
    } else {
        window.clearInterval(light);
        light = null;
    }
}
/////


//test stuff
 var today = new Date();
var Christmas = new Date("12-24-2018");
var diffMs = (Christmas - today); // milliseconds between now & Christmas
var diffDays = Math.floor(diffMs / 86400000); // days
var diffHrs = Math.floor((diffMs % 86400000) / 3600000); // hours
var diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes
//alert(diffDays + " days, " + diffHrs + " hours, " + diffMins + " minutes until Christmas");























