// Assignment Code
var generateBtn = document.querySelector("#generate");




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
if (password === "true"){
  password = "generate"
}



function generatePassword(){
// Pseudocode
  // gather user input on password requirements
var lengthChoice = window.prompt("How many characters long? Choose between 8 and 20");
if (lengthChoice > 20) {
  window.prompt("choose between 8 and 20 characters.")
} else if (lengthChoice < 8) {
  window.prompt("choose between 8 and 20 characters.")
}

var choosecharacters = window.confirm("would you like to use special characters?");
var chooselower = window.confirm("would you like to use lower case characters?");
var chooseupper = window.confirm("would you like to use upper case characters");
var choosenumber = window.confirm("Would you like to use numbers?");


    // input for # of characters
    // input for special characters
    // input for lower case
    // input for uppercase
    // input for numbers
    
  // Validate user input

  let i = 0; i < lengthChoice; i++

    // number of characters between 8 and 128

    var special = ["!", "@", "#", "$", "%", "^", "&", ":", "*", "(", ")"];
    var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var numbers =  ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  // what was answered "true" (or yes, pressed OK) to included


  
  
  var specialL = special.concat(lowerCase);
  var specialU = special.concat(upperCase);
  var specialN = special.concat(numbers);
  var lowerUpper = lowerCase.concat(upperCase);
  var lowerNum = lowerCase.concat(numbers);
  var upperNum = upperCase.concat(numbers);
  var specialLU = specialL.concat(upperCase);
  var specialLN = specialL.concat(numbers);
  var specialUN = specialU.concat(numbers);
  var lowerUN = lowerUpper.concat(numbers);
  var all = specialLU.concat(numbers);




    if (choosecharacters === "true"){
      special++;
    } else if (choosecharacters && chooselower === "true"){
      specialL++;      
    } else if (choosecharacters && upperCase === "true"){
      specialU++;
    } else if (choosecharacters && numbers === "true"){
      specialN++;
    } else if (lowerCase && upperCase === "true"){
      lowerUpper++;
    } else if (lowerCase && numbers === "true"){
      lowerNum++;
    } else if (upperCase && numbers === "true"){
      upperNum++;
    } else if (special && lowerCase && upperCase === "true"){
      specialLU++;
    } else if (special && lowerCase && numbers === "true"){
      specialLN++;
    } else if (special && upperCase && numbers === "true"){
      specialUN++;
    } else if (lowerCase && upperCase && numbers === "true"){
      lowerUN++;
    } else if (special && lowerCase && upperCase && numbers === "true"){
      all++; 
    }

  

var randoSpecial = Math.floor(Math.random() * special.length);
var randoSpecialL = Math.floor(Math.random() * specialL.length);
var randoSpecialU = Math.floor(Math.random() * specialU.length);
var randoSpecialN = Math.floor(Math.random() * specialN.length);
var randolowerupper = Math.floor(Math.random() * lowerUpper.length);
var randolowernum = Math.floor(Math.random() * lowerNum.length);
var randouppernum = Math.floor(Math.random() * upperNum.length);
var randospecialLU = Math.floor(Math.random() * specialLU.length);
var randospecialLN = Math.floor(Math.random() * specialLN.length);
var randospecialUN = Math.floor(Math.random() * specialUN.length);
var randoall = Math.floor(Math.random() * all.length);



  // Decide how to choose what characters to include
  // Randomly grab values from each included in the categories chosen
  // Assemble the password string to be returned
   

  
  return password;



}

//  

