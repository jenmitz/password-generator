/*
Problem: Generate a password that uses the user input to decide what type of characters - and how many - to produce.
IOCE
	Inputs: number from user (8-58)
	Outputs: randomized password using the parameters the user selects
	Constraints: n/a
	Edge cases: none that I can see - not complex enough to have them? very straight-forward

/////////////////////////////////////////////////

> What's happening currently:
1. Function that listens for a click - when clicked, it will run the main function that generates the PW
3. If no boxes are checked, console logs an error
4. If no number(s) or an incorrect number is entered, console logs an error
5. If box is checked, a string is passed into an array (to later expand upon to determine what values to draw from)
6. If box is checked, console logs "____ checked" and generates/console logs a single random value from that array
7. If a box isn't checked, console logs "___ no" and no random value is generated for that box


> Needed functionality:
- Combine the checked boxes values with the entered # of characters to generate final PW [add to empty array?]
- Have the PW populate the HTML element (output #password) once generated


> Possible ways to generate correct amount/types of values:
[option 1]  Generate from every character type then have the function ignore whatever values are not selected
[option 2] Combine the checked boxes values with the entered # of characters to generate final PW / add to empty array?


> What I can't quite figure out/brainstorming solutions:
- How to generate the PW with the correct number of values while drawing the values from whatever boxes are selected
- Could I combine the values of the checked boxes by adding them into one array, then randomizing from the new array?


*/

// event listener to generate password
document.getElementById("generateBtn").addEventListener("click", generatePassword);

// generate
function generatePassword() {

    // variables
    var characterLength = document.getElementById("length").value;
    var numericBoxChecked = document.getElementById("numeric").checked;
    var lowercaseBoxChecked = document.getElementById("lowercase").checked;
    var uppercaseBoxChecked = document.getElementById("uppercase").checked;
    var specialBoxChecked = document.getElementById("special").checked;
    
    // check input length / error for invalid number
    if (characterLength >= 8 && characterLength <= 58) {
        console.log("nice, you entered a good number")
    } else {
        console.log("no! bad number!");
    };

    // see if at least one box is checked / error if no character types are checked
    if (!numericBoxChecked && !lowercaseBoxChecked && !uppercaseBoxChecked && !specialBoxChecked) {
        console.log("check a goddamn box you heathen")
    } else {
        console.log("at least 1 box is checked");
    };
   
    // input value
    var input = document.getElementById("length").value;

    // random values from each array using ASCII codes (how many depends on input)
    var letterUppercase = Array.from({length: input}, () => String.fromCharCode(Math.floor(Math.random() * (90 - 65) + 65)));
    var letterLowercase = Array.from({length: input}, () => String.fromCharCode(Math.floor(Math.random() * (122 - 97) + 97)));
    var special = Array.from({length: input}, () => String.fromCharCode(Math.floor(Math.random() * (43 - 33) + 33)));
    var numeric = Array.from({length: input}, () => String.fromCharCode(Math.floor(Math.random() * (57 - 48) + 48)));

    //empty array to be dynamically added to
    var values = [];
    
    ///////// HOW DO I MAKE THIS MORE DRY? /////////
    
    // if a box is checked, add it to array 'values'
    if (numericBoxChecked) {
        values.push(numeric);
        console.log(numeric);
    };
    if (lowercaseBoxChecked) {
        values.push(letterLowercase);
        console.log(letterLowercase);
    };
    if (uppercaseBoxChecked) {
        values.push(letterUppercase);
        console.log(letterUppercase);
    };
    if (specialBoxChecked) {
        values.push(special);
        console.log(special);
    };

    console.log("values array has the following values: " + values);

};
generatePassword(); 

//////////////////////////////////// RANDOM NOTES / DUMP ///////////////////////////////////////
//Math.floor(Math.random() * (57 - 48) + 48));


// var range = ("8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58");
// var uppercaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]; // 26 characters
// var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]; // 10 characters
// var lowercaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; // 26 characters
// var specialCharacters = ["!", "?", "&", "#", "@", "*", "_", "-", "."]; // 9 characters