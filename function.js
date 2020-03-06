/*
Problem: Generate a password that uses the user input to decide what type of characters - and how many - to produce.
IOCE
	Inputs: number from user (8-58), checked boxes representing character types
	Outputs: randomized password using the parameters the user selects
	Constraints: n/a
	Edge cases: entering a letter, not entering anything

/////////////////////////////////////////////////

> Needed functionality:
- Randomize/generate final password by randomizing the "values" array
- Stop the function (don't generate a password) if any inputs are incorrect

> Optional/Bonus functionality:
- Copy to clipboard

*/

// event listener to run function
document.getElementById("generateBtn").addEventListener("click", generatePassword);

// generate password
function generatePassword() {

    // variables for checked boxes
    const characterLength = document.getElementById("length").value;
    const numericBoxChecked = document.getElementById("numeric").checked;
    const lowercaseBoxChecked = document.getElementById("lowercase").checked;
    const uppercaseBoxChecked = document.getElementById("uppercase").checked;
    const specialBoxChecked = document.getElementById("special").checked;
    
    
    // error handling

    // error for invalid number input
    if (characterLength >= 8 && characterLength <= 58) {
        console.log("nice, you entered a good number")
    } else {
        console.log("no! bad number!");
        // alert("Please enter a number from 8 - 58.");
        // stop entire function here if error?
    };

    // error if no character types are selected
    if (!numericBoxChecked && !lowercaseBoxChecked && !uppercaseBoxChecked && !specialBoxChecked) {
        console.log("check a goddamn box you heathen");
        // alert("Please select at least one character type.");
        // stop entire function here if error?
    } else {
        console.log("at least 1 box is checked");
    };
   
    // input value
    const input = document.getElementById("length").value;

    // random values from each array using ASCII codes (how many values generated depends on user input)
    let letterUppercase = Array.from({length: input}, () => String.fromCharCode(Math.floor(Math.random() * (90 - 65) + 65)));
    let letterLowercase = Array.from({length: input}, () => String.fromCharCode(Math.floor(Math.random() * (122 - 97) + 97)));
    let special = Array.from({length: input}, () => String.fromCharCode(Math.floor(Math.random() * (43 - 33) + 33)));
    let numeric = Array.from({length: input}, () => String.fromCharCode(Math.floor(Math.random() * (57 - 48) + 48)));

    //empty array to be filled with randomized values of checked boxes
    let values = [];
    

    // can following conditionals drier?
    // currently, each of these conditionals generates input amount, meaning that if 2 boxes are checked and input is 10, there will be 20 characters

    // if a box is checked, add randomized values to array "values" & get rid of commas in between strings
    if (numericBoxChecked) {
        let noCommasNumeric = numeric.join("");
        values.push(numeric);
        document.getElementById("password").append(noCommasNumeric);
        console.log(numeric);
    };
    if (lowercaseBoxChecked) {
        let noCommasLower = letterLowercase.join("");
        values.push(letterLowercase);
        document.getElementById("password").append(noCommasLower);
        console.log(letterLowercase);
    };
    if (uppercaseBoxChecked) {
        let noCommasUpper = letterUppercase.join("");
        values.push(letterUppercase);
        document.getElementById("password").append(noCommasUpper);
        console.log(letterUppercase);
    };
    if (specialBoxChecked) {
        let noCommasSpecial = special.join("");
        values.push(special);
        document.getElementById("password").append(noCommasSpecial);
        console.log(special);
    };
    
    console.log(values);

    
// Randomize/generate final password by randomizing the info in "values" array


// randomizing "values" array doesn't work b/c the value sets are from their own separate arrays
// brainstorming
    // concat arrays in "values" together, then randomly pull input amount of characters out
    // randomly pick index[x] of each array until i get the amount of values that matches input
    // shuffle those random values to get the final PW
 
// these indexes correspond to each array (checked box) in "values", but i need to have the appropriate amount of indexes for the amount of boxes checked
    // use conditionals? something else?
/*  
    let array1 = values[0];
    let array2 = values[1];
    let array3 = values[2];
    let array4 = values[3]; 

    let finalArray = values.concat();
    console.log(finalArray);
*/

};

// refreshes page on button click
const refreshBtn = document.getElementById("refreshBtn").addEventListener("click", refreshPage);

function refreshPage() {
    if(confirm("Are you sure you'd like to refresh? You will lose your current password.")) {
        window.location.reload();
    };
};
//////////////////////////////////// RANDOM NOTES / DUMP ///////////////////////////////////////

// var range = ("8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58");
// var uppercaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]; // 26 characters
// var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]; // 10 characters
// var lowercaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; // 26 characters
// var specialCharacters = ["!", "?", "&", "#", "@", "*", "_", "-", "."]; // 9 characters