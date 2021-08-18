// Number Limit (9007199254740991)
let maxNumber = Number.MAX_SAFE_INTEGER;

// Prevent Form from Resetting
document.querySelector("#userSubmit").addEventListener("click", function(event){
   event.preventDefault();
}, false);

// Submitting and Saving User Input
function submit_form(){

   var stepCounter = 1;

   // Set value of "userInput" when form is submitted
   var originalInput = document.getElementById("userInput").value;
   var userInput = document.getElementById("userInput").value;  

   if (userInput <= maxNumber){

      console.log(`Step ${stepCounter} -- the user entered: ${userInput}.`);

      // While the sequence is greater than 1...
      while ((userInput > 1) && (userInput <= maxNumber)) {

         // Check if userInput is Even or Odd...
         var checkNumber = (userInput % 2 == 0) ? "even" : "odd";

         // If userInput is Even...
         if (checkNumber == "even") {

            console.log(`----------- ${userInput} is ${checkNumber}; n = (n / 2) will be performed.`);

            var userInput = (userInput / 2);
            stepCounter++; 

            console.log(`Step ${stepCounter} -- the new number is: ${userInput}.`);

         } 
         
         // If userInput is Odd... 
         else if (checkNumber == "odd") {

            console.log(`----------- ${userInput} is ${checkNumber}; n = ((n * 3) + 1) will be performed.`);

            var userInput = ((userInput * 3) + 1);
            stepCounter++;

            console.log(`Step ${stepCounter} -- The new number is: ${userInput}.`);

         } 
         
         // If userInput is somehow neither Even nor Odd...
         else {
            console.log(`ERROR: Cannot determine if ${userInput} is Even or Odd...`)
         }
         
      }

      if (userInput > maxNumber) {
         console.log(`${userInput} is too large; please enter a smaller number.`);
         console.log("Sequence terminated.");
      }

      if (userInput == 1) {
         // Once sequence reaches 1, termiate the sequence...
         console.log("The sequence has reeached 1.");
         console.log("Sequence terminated.");

         // Unhide the Output Section
         document.getElementById("output").style.display = "block";

         var outputSummary = `It took <strong>${stepCounter} steps</strong> for ${originalInput} to reach 1.`;
         console.log(`It took ${stepCounter} steps for ${originalInput} to reach 1.`);

         // Print the outputSummary onto the UI
         document.getElementById("outputSummary").innerHTML = outputSummary;

         // Print the output into a Table
         // document.getElementById("outputTable").innerHTML = `This will be a table!`;
      }

   } else {

      console.log(`${userInput} is too large; please enter a smaller number.`);

   }

}
