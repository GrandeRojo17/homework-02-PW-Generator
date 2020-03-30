// Assignment: CREATE A PASSWORD GENERATOR with JavaScript!

//Design a password Generator.*Randomly generates a password based off of some selected parameteres.(simple confirms to create true or false)(Ver.2 should add buttons or sliders)(ver.3 Should include a cool Nav Bar)(ver.4 Should have a day and night mode.)

//Ask User how long should the Password be.
var pwLength = prompt("How many characters long would you like your pw to be?"); 

//create variables/arrays for lower.higher.special.all


//Originally tried the array method and 
//Then switched to creating 4 variables with strings I would loop through.


var arrLower = "abcdefghijklmnoprstuvwxyz";
var arrHigher = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";//Curious if I could re use the "arrLower" but with a .capitalCase method somewhere 26 items then input into a string.
var arrSpecial = "!@#$%^&*()_+=-:;'/?. ,<`>";
var arrAllCharacters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";
//  26 strings for each variable and would loop through that.


//VvvVx However I then discovered xVvvV
//this exact same thing with String.fromCharCode() 
//reference sheet here https://www.w3schools.com/html/html_charset.asp
//and I utilize this when I begin to make the functions.



//I connected the html and JS variables.
isUpper = confirm("Would you like Upper Case characters in your password?");
isLower = confirm("Would you like Lower Case characters in your password?");
isNumber = confirm("Would you like numbers?");
isSpecial = confirm("Would you like Special Case characters in your password?");
//could dislay these as checkboxes in future.

//connect the button
const generateEl = document.getElementById('generate');
//add the output into a string called result then connect that with placeholder.
const resultEl = document.getElementById('password');



//link the click to the button, Add an event listener for click on the button
generateEl.addEventListener('click', () => {
const length = +pwLength.value ; //I need to find out why that works. 

console.log(typeof +length);
console.log(typeof findRandomLower(+length));

console.log("lower: "+ isLower);
console.log("Upper: "+ isUpper);
console.log("Special:" + isSpecial);


resultEl.innerText = generatePassword(isLower,isUpper,isNumber,isSpecial,pwLength);
});
//generate the  password function


function generatePassword(isLower,isUpper,isNumber,isSpecial, pwLength){

  let generatePassword="";
  const typesCount = isLower + isUpper + isNumber + isSpecial;
  console.log("types: ",typesCount);
  const typesArray = [{isLower},{isUpper},{isNumber},{isSpecial}].filter //this will filter through
  
  
  console.log(typesArray,"types: array")
  (item =>Object.values(item)[0] );
  //check if all were denied. ) 0 is equal to false
  if(typesCount=== 0){
    return "";
  }
for (let i = 0;i<length;i += typesCount){
  typesArray.forEach(type => {
const randomFunc = Object.keys(type)[0];
generatePassword += randomFunc[randomFunc]
  });
}


)

//1.Generate a pw var 


//2.Filter out unselected items.

//3.create a loop to run the generator function ea type
//4. Add the final PW to the resultEL
//5. display that back on the page
//(ver.2 I should add a copy and paste function option)
}



const randomFunc = {

  lower: findRandomLower, upper: findRandomUpper, number: findRandomNumber, special: findRandomSpecial
};
//The main functions to randomly pick from object
function findRandomLower() {

  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
} //26 letters in alphabet

function findRandomUpper() {

  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function findRandomNumber() {

  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);} //rose the multiple to 10 to see the character "9" more often.

function findRandomSpecial() {
  var arrSpecial = "!@#$%^&*()_+=-:;'/?. ,<`>"; //some special characters are generally never used (ver.2 Should have individual character check boxes)
  return arrSpecial[Math.floor(Math.random() * arrSpecial.length)];
}
console.log(findRandomLower(),findRandomNumber,findRandomSpecial,findRandomUpper);


//--------------------------------- Pseudo Code --------------------------------

// Create a Boolean for pwIsUpper,pwIsLower,pwIsSpecial

//while i is less than pwLength.Generate random number and pick random letter
//then push that to the newPw string.

//while(newPw < pwLength){

//Grab a random letter and place it into string for the length of pwLength.

//function generatePw(){
//};

//var bgEl = document.querySelector("body");
//var textTest = document.getElementsByClassName("textarea");
//then add/replace the current textarea text with randomly chosen ints.


//if event clicked button *Toggle on and off"     ** Could ask the User to input each request or a series of yes and no questions
//I will choose series of confirms for
//I want the questions to populate in the box.As the user types out the text the letters appear in grey and 
// Ask for PassWord Length from user *form*How many Characters ? *upperCase *lowerCase *NoPrefCase *specialCharacters *Choose encryption Level
//does generatedPW contain parameters set forth by User? IF YES POST THAT TOO PAGE
//Bonus console.log and then copy that to clipboard3

//I did not complete the generator as of 3/29/20
// I will hopefully discuss with a tutor and see where I can go from here.