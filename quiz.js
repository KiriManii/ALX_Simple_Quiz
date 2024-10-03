// Function to check the user's answer
function checkAnswer() {
    // Correct answer is "4"
    const correctAnswer = "4";
    
    // Get the user's selected answer
    const userAnswer = document.querySelector('input[name="quiz"]:checked');
    
    // If no answer is selected
    if (!userAnswer) {
        document.getElementById("feedback").textContent = "Please select an answer!";
        return;
    }

    // Compare user's answer to the correct answer using the value property
    if (userAnswer.value === correctAnswer) {
        document.getElementById("feedback").textContent = "Correct! Well done.";
    } else {
        document.getElementById("feedback").textContent = "That's incorrect. Try again!";
    }
}

// Add event listener to the "Submit Answer" button
const submitButton = document.getElementById("submit-answer");
if (submitButton) { // Check if the button exists
    submitButton.addEventListener("click", checkAnswer);
}
