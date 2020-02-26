/*
Problem: Generate a password that uses the user input to decide what type of characters - and how many - to produce.
IOCE
	Inputs: number from user (8-58), checked boxes representing character types
	Outputs: randomized password using the parameters the user selects
	Constraints: n/a
	Edge cases: entering a letter, not entering anything [solution found]

/////////////////////////////////////////////////

> Needed functionality:
- Randomize/generate final password by randomizing the "values" array
- Populate final PW to the HTML element (#password) once generated

*/

// event listener to run function
document.getElementById("generateBtn").addEventListener("click", generatePassword);

// generate password
function generatePassword() {

    // variables for checked boxes
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
        // alert("Please enter a number from 8 - 58.");
        // stop entire function here
    };

    // check if at least one box is selected / error if no character types are selected
    if (!numericBoxChecked && !lowercaseBoxChecked && !uppercaseBoxChecked && !specialBoxChecked) {
        console.log("check a goddamn box you heathen");
        // alert("Please select at least one character type.");
        // stop entire function here
    } else {
        console.log("at least 1 box is checked");
    };
   
    // input value
    var input = document.getElementById("length").value;

    // random values from each array using ASCII codes (how many values generated depends on user input)
    var letterUppercase = Array.from({length: input}, () => String.fromCharCode(Math.floor(Math.random() * (90 - 65) + 65)));
    var letterLowercase = Array.from({length: input}, () => String.fromCharCode(Math.floor(Math.random() * (122 - 97) + 97)));
    var special = Array.from({length: input}, () => String.fromCharCode(Math.floor(Math.random() * (43 - 33) + 33)));
    var numeric = Array.from({length: input}, () => String.fromCharCode(Math.floor(Math.random() * (57 - 48) + 48)));

    //empty array to be filled with randomized values of checked boxes
    var values = [];
    
    ///////// HOW DO I MAKE THIS MORE DRY? /////////
    // if a box is checked, add randomized values to array 'values'
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

    document.getElementById("password").append(values);




    var noCommas = values.join("");
    console.log(noCommas);


    for (let i = 0; i < input.length; i++) {
        (Math.floor(Math.random(values)));
    };
    
        
};

//////////////////////////////////// RANDOM NOTES / DUMP ///////////////////////////////////////

// var range = ("8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58");
// var uppercaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]; // 26 characters
// var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]; // 10 characters
// var lowercaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; // 26 characters
// var specialCharacters = ["!", "?", "&", "#", "@", "*", "_", "-", "."]; // 9 characters