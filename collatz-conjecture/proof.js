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

      document.getElementById("outputTable").innerHTML += `The user entered: ${userInput}.<br /><br /><strong>Step ${stepCounter}</strong><br />`;

      // While the sequence is greater than 1...
      while ((userInput > 1) && (userInput <= maxNumber)) {

         // Check if userInput is Even or Odd...
         var checkNumber = (userInput % 2 == 0) ? "even" : "odd";

         // If userInput is Even...
         if (checkNumber == "even") {

            document.getElementById("outputTable").innerHTML += `${userInput} is ${checkNumber}.<br /> n = (n / 2) will be performed. <br />`;

            var userInput = (userInput / 2);
            stepCounter++; 

            document.getElementById("outputTable").innerHTML += `The new number is: ${userInput}.<br /><br /><strong>Step ${stepCounter}</strong><br />`;

         } 
         
         // If userInput is Odd... 
         else if (checkNumber == "odd") {

            document.getElementById("outputTable").innerHTML += `${userInput} is ${checkNumber}.<br /> n = ((n * 3) + 1) will be performed. <br />`;

            var userInput = ((userInput * 3) + 1);
            stepCounter++;

            document.getElementById("outputTable").innerHTML += `The new number is: ${userInput}.<br /><br /><strong>Step ${stepCounter}</strong><br />`;

         } 
         
         // If userInput is somehow neither Even nor Odd...
         else {

            // Add this snippet to the UI and remove from console
            console.log(`ERROR: Cannot determine if ${userInput} is Even or Odd...`)
         
         }
         
      }

      if (userInput > maxNumber) {

         // Add this snippet to the UI and remove from console
         console.log(`${userInput} is too large; please enter a smaller number.`);
         console.log("Sequence terminated.");

      }

      if (userInput == 1) {

         // Unhide the Output Section
         document.getElementById("output").style.display = "block";

         // Output Summary, based on stepCounter value
         if (stepCounter > 1) {

            var outputSummary = `It took <strong>${stepCounter} steps</strong> for ${originalInput} to reach 1.`;
         
         }
         else if (stepCounter == 1) {
         
            var outputSummary = `It took <strong>${stepCounter} step</strong> for ${originalInput} to reach 1.`;
         
         }
         else {
         
            var outputSummary = `ERROR: Something went wrong!`;
         
         }

         // Print the outputSummary onto the UI
         document.getElementById("outputSummary").innerHTML = outputSummary;

         // Print the last line of outputTable
         document.getElementById("outputTable").innerHTML += `The sequence has reached 1.<br />Sequence terminated.`;

      }

   } else {

      // Add this snippet to the UI and remove from console
      console.log(`${userInput} is too large; please enter a smaller number.`);

   }

}