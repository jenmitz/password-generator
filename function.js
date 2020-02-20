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


// listen for a click on generateBtn - run function generatePW [working]
function whenClicked() {
    document.getElementById("generateBtn").addEventListener("click", generatePW);

    // main function - run when generateBtn is clicked [working]
    function generatePW() {

        // get a random value from whatever box is checked [working]
        function generateChecked() {
            // empty array that will store which boxes are checked [working]
            var boxesArray = [];
            
            // if box is checked, pull a random value from array
            if (document.getElementById("special").checked) {
                boxesArray.push("special")
                var special = ["!", "?", "&", "#", "@", "*", "_", "-", "."]; // 9 characters
                var specialNum = special[Math.floor(Math.random() * special.length)];
                console.log("special checked")
                console.log(specialNum);
            } else {
                console.log("special no")
            };
            
            
            if (document.getElementById("numeric").checked) {
                boxesArray.push("numeric")
                var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]; // 10 characters
                var numericNum = numeric[Math.floor(Math.random() * numeric.length)];
                console.log("numeric checked")
                console.log(numericNum);
            } else {
                console.log("numeric no");
            };
            
            
            if (document.getElementById("lowercase").checked) {
                boxesArray.push("lowercase")
                var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; // 26 characters
                var lowercaseNum = lowercase[Math.floor(Math.random() * lowercase.length)];
                console.log("lowercase checked");
                console.log(lowercaseNum);
            } else {
                console.log("lowercase no");
            };
            
            
            if (document.getElementById("uppercase").checked) {
                boxesArray.push("uppercase")
                var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]; // 26 characters
                var uppercaseNum = uppercase[Math.floor(Math.random() * uppercase.length)];
                console.log("uppercase checked")
                console.log(uppercaseNum);
            } else {
                console.log("uppercase no")
            };
            console.log(boxesArray);
        };
        generateChecked();

        // errors to give if neccessary [working]
        function error() {

            // error for incorrect length input [working]
            function invalidLength() {
                var charLength = document.getElementById("length").value;
                if (charLength >= 8 && charLength <= 58) {
                    console.log("nice, you entered a good number")
                } else {
                    console.log("no! bad number!");
                };
            };
            invalidLength();

            // error for no character type selected [working]
            function notChecked() {
                var numYes = document.getElementById("numeric").checked;
                var lowerYes = document.getElementById("lowercase").checked;
                var upperYes = document.getElementById("uppercase").checked;
                var specialYes = document.getElementById("special").checked;

                if (
                    !numYes
                    && !lowerYes
                    && !upperYes
                    && !specialYes
                    ) {
                    console.log("check a goddamn box you heathen")
                } else {
                    console.log("box checked");
                };
            };
            notChecked();

        };
        error();

    };   
    generatePW(); 

};
whenClicked();



//////////////////////////////////// RANDOM NOTES / DUMP ///////////////////////////////////////

// var result = document.getElementById("password");
// var range = ("8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58");

