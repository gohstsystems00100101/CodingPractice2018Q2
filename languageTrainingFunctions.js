function addWords()
{
 alert("adding words");
 //check to make sure all fields are filled in

}

function displayFullVocabList()
{
 var englishDiv = document.getElementById('displayArea'.'englishDiv');
 var russianDiv = document.getElementById('russianDiv');
 var latinDiv = document.getElementById('latinDiv');
 var spanishDiv = document.getElementById('spanishDiv');
 
 displayArea.innerHTML = "";

 for (var i = 0; i < vocabList.length; i++)
 {
  //alert(vocabList[i] + " " + i);
  displayArea.innerHTML += "Row #" + i + "__";
  displayArea.innerHTML  += "__"    + vocabList[i][0] + "__";
  russianDiv.innerHTML  += "__"    + vocabList[i][1] + "__";
  latinDiv.innerHTML    += "__"    + vocabList[i][2] + "__";
  spanishDiv.innerHTML  += "__"    + vocabList[i][3] + "<br>";
  
  //if (i = vocabList.length) {break;}
 }
}

