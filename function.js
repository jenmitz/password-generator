/*
Problem: Generate a password that uses the user input to decide what type of characters - and how many - to produce.
IOCE
	Inputs: number from user (8-58), checked boxes representing character types
	Outputs: randomized password using the parameters the user selects
	Constraints: n/a
    Edge cases: n/a
    
/////////////////////////////////////////////////
Optional/Bonus functionality:
    > Copy to clipboard

To Dos:    
    > Clear password entirely when generate button is clicked, as opposed to adding more characters
    > Clean up CSS
/////////////////////////////////////////////////
*/  


// event listeners to run functions
document.getElementById("generateBtn").addEventListener("click", generatePassword);
document.getElementById("refreshBtn").addEventListener("click", refresh);
document.getElementById("copyBtn").addEventListener("click", copyPW);


// refresh page 
function refresh () { 
    if ((confirm("Are you sure you'd like to refresh? You will lose your current password.")) === true) {
        document.location.reload();
    };
};

// copy to clipboard
function copyPW () {
    console.log("copyBtn was clicked.")
    var val = document.querySelector("#password");
    val.select();
    document.execCommand("copy");
    /* *** pseudo code ***
    1. (error handling) alert "nothing to copy" if clicked but no password has been generated 
    2. need to target output from password generation
    3. find a way to get the generated password onto clipboard
    4. alert "successfully copied!" when clicked after password generation
    5. (edge case) clicking does not copy, error that makes them unable to copy [assuming password generated and button clicked]
    */
};

// generate password
function generatePassword () {

    // input value
    const inputLength = document.getElementById("length").value;

    // checked boxes
    const numberBoxChecked = document.getElementById("number").checked;
    const lowercaseBoxChecked = document.getElementById("lowercase").checked;
    const uppercaseBoxChecked = document.getElementById("uppercase").checked;
    const specialBoxChecked = document.getElementById("special").checked;

    // error for invalid number input
    if (inputLength >= 8 && inputLength <= 58) {
        console.log("Correct length entered.");
    } else {
        alert("Please enter a number from 8 - 58.");
        return;
    };

    // error if no character types are selected
    if (!numberBoxChecked && !lowercaseBoxChecked && !uppercaseBoxChecked && !specialBoxChecked) {
        alert("Please select at least one character type.");
        return;
    };

    // ASCII code randomize character functions
    const number = () => String.fromCharCode(Math.floor(Math.random() * (57 - 48) + 48));
    const letterUppercase = () => String.fromCharCode(Math.floor(Math.random() * (90 - 65) + 65));
    const letterLowercase = () => String.fromCharCode(Math.floor(Math.random() * (122 - 97) + 97));
    const special = () => String.fromCharCode(Math.floor(Math.random() * (43 - 33) + 33));

    // array that holds randomly generated values
    const values = [];

    // if box is checked, push random character to values array
    for (i = 0; i < inputLength; i++) {
        if (numberBoxChecked) {
            values.push(number());
        };
        if (uppercaseBoxChecked) {
            values.push(letterUppercase());
        };
        if (lowercaseBoxChecked) {
            values.push(letterLowercase());
        };
        if (specialBoxChecked) {
            values.push(special());
        };
    };
    
    // get a random character from "values" array
    function getRandomIndex () {
        let password = [];
        for (i = 0; i < inputLength; i++) {
            const randomIndex = values[Math.floor(Math.random() * values.length)];
            // logs result of generation
            console.log(randomIndex);
            // put random character into array
            password.push(randomIndex);
            // marge all values in array together
            console.log(password.join(''));
            
        };
        // value inside password box is the random character generated
        document.getElementById("password").value = randomIndex;
    }; 
    getRandomIndex();

};
// array join