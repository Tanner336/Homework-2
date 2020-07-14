// Assignment Code
var generateBtn = document.querySelector("#generate");

var lettersUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "?", "/"];
var lettersLower = [] 
  for(var i = 0; i < lettersUpper.length; i++){
    lettersLower.push( lettersUpper[i].toLowerCase())
  }
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]

var answerUpper = confirm("Do you want your password to have Upper Case?")
var answerLower = confirm("Do you want your password to have Lower Case?")
var answerSym = confirm("Do you want your password to have Symbols?")
var answerNum = confirm("DO you want numbers in your password to be?")
var answerLength = prompt("How long do you want your password to be?")



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  if(answerUpper === false && answerLower === false && answerNum === false && answerSym === false){
    alert("You need to have at least one input type selected")
      return("no password")
  }

  var totalSample = [];
    if(answerUpper === true){
      for(var i = 0; i < lettersUpper.length; i++){
        totalSample.push(lettersUpper[i])
      }
    
    } if(answerLower === true) {
      for(var i = 0; i < lettersLower.length; i++){
        totalSample.push( lettersLower[i])
      }
    } if(answerSym === true) {
      for(var i = 0; i < symbols.length; i++){
        totalSample.push(symbols[i])
      }
    } if(answerNum === true){
      for(var i = 0; i < numbers.length; i++){
      totalSample.push( numbers[i])
    }
  }
  

  var finishedPassword = []
  for(var i = 0; i < parseInt(answerLength); i++) {
    var randomPassword = Math.floor(Math.random() * totalSample.length);
    finishedPassword.push(totalSample[randomPassword]);
    console.log(finishedPassword);

  }
  return(finishedPassword.join(""));
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
