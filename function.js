/*
Problem: Generate a password that uses the user input to decide what type of characters - and how many - to produce.
IOCE
	Inputs: number from user (8-58), checked boxes representing character types
	Outputs: randomized password using the parameters the user selects
	Constraints: n/a
	Edge cases: n/a
/////////////////////////////////////////////////
Optional/Bonus functionality:
    Copy to clipboard
    Refresh
/////////////////////////////////////////////////
*/  


// event listeners to run functions
document.getElementById("generateBtn").addEventListener("click", generatePassword);
// document.getElementById("refreshBtn").addEventListener("click", resetForm);
// document.getElementById("copyBtn").addEventListener("click", copyPW);

// generate password function
function generatePassword() {

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
    const getRandomIndex = () => {
        for (i = 0; i < inputLength; i++) {
            const randomIndex = values[Math.floor(Math.random() * values.length)];
            console.log(randomIndex);
            document.getElementById("password").append(randomIndex);
        };
        return;
    }; 

    getRandomIndex();

};