/*
Problem: Generate a password that uses the user input to decide what type of characters - and how many - to produce.
IOCE
	Inputs: number from user (8-58), checked boxes representing character types
	Outputs: randomized password using the parameters the user selects
	Constraints: n/a
	Edge cases: entering a letter, not entering anything

/////////////////////////////////////////////////

Optional/Bonus functionality:
    Copy to clipboard
/////////////////////////////////////////////////  
Need to fix:
- each value checked is generated one after the other(5n2i8h, etc), instead of randomly distributed (h8799y8dfvff8f, etc)
- need to get CORRECT length of characters. currently generates the input amount of each character type selected (generates 8 of both special and lower for a total of 1 characters, for example)

- randomly pick indexes from generated array (values) until it reaches the input??
*/

// event listeners to run functions
document.getElementById("generateBtn").addEventListener("click", generatePassword);
// document.getElementById("refreshBtn").addEventListener("click", resetForm);
// document.getElementById("copyBtn").addEventListener("click", copyPW);

// generate password
function generatePassword() {

    // variables for length input and checked boxes
    // input
    const inputLength = document.getElementById("length").value;

    const arr = [
        numberBoxChecked = document.getElementById("number").checked,
        lowercaseBoxChecked = document.getElementById("lowercase").checked,
        uppercaseBoxChecked = document.getElementById("uppercase").checked,
        specialBoxChecked = document.getElementById("special").checked
    ];
    // error handling

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
    let values = [];
            
    // if box is checked, push value "1" to values array - do for length of input
    for (i = 0; i < inputLength; i++) {
        if (numberBoxChecked) {
            values.push(number());
            //document.getElementById("password").append(number());
        };
        if (uppercaseBoxChecked) {
            values.push(letterUppercase());
            //document.getElementById("password").append(letterUppercase());
        };
        if (lowercaseBoxChecked) {
            values.push(letterLowercase());
            //document.getElementById("password").append(letterLowercase());
        };
        if (specialBoxChecked) {
            values.push(special());
            //document.getElementById("password").append(special());
        };
    };

    

    const getRandomIndex = () => {
        for (i = 0; i < inputLength; i++) {
            const randomIndex = values[Math.floor(Math.random() * values.length)];
            console.log(randomIndex);
            document.getElementById("password").append(randomIndex);
        };
        return;
    }; 

    // length of array produces values until reaches input
    getRandomIndex();
    console.log(values);


    // check to see how many boxes are checked (not working)
    // if (arr.length === 4) {
    //     // loop through arr.length until youve reached the correct input length
    //     console.log("4 boxes");
    // } else if (arr.length === 3) {
    //     console.log("3 boxes");
    // } else if (arr.length === 2) {
    //     console.log("2 boxes");
    // } else if (arr.length === 1) {
    //     console.log("1 box");
    // };

    // loop through checked boxes until amount is length, add random value 



    // function scramble() {
    //     values(numOfBoxesChecked);
    // };

    // scramble();

    //console.log(values);



    // final number divided by number of boxes checked?
    // add one character (if box is checked) for [input] amount of times
    // each time we loop, we want to add one letter to password and shuffle array values
    // we want to choose one of the four functions we have 
//};



    // refresh page on button click
    // const refreshBtn = document.getElementById("refreshBtn").addEventListener("click");
    // if (refreshBtn) {
    //     if (confirm("Are you sure you'd like to refresh? You will lose your current password.")) {
    //     window.location.reload();
    // };
    



};