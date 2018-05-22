/*
/Notes: 
/ Create tab-like buttons
/ Display Image and quotes
/ Ability to show by person or topic
*/

var benFranklinQuotes =
 [
  "An investment in knowledge pays the best interest.",
  "You may delay, but time will not.",
  "Well done is better than well said." 
 ];
 
 
function displayQuotes(quotes)
{
 quoteList = quotes;
 for (var i = 0; i < quoteList.length; i++)
 {
  alert(quoteList[i]);
 }	  
}