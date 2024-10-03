// Function to check the user's answer
function checkAnswer() {
    // Correct answer is "4"
    const correctAnswer = "4";
    
    // Get the user's selected answer
    const userAnswerElement = document.querySelector('input[name="quiz"]:checked');
    
    // If no answer is selected
    if (!userAnswerElement) {
        document.getElementById("feedback").textContent = "Please select an answer!";
        return;
    }

    // Retrieve the value from the checked radio button
    const userAnswer = userAnswerElement.value; // Get the value of the checked radio button

    // Compare user's answer to the correct answer
    if (userAnswer === correctAnswer) {
        document.getElementById("feedback").textContent = "Correct! Well done.";
    } else {
        document.getElementById("feedback").textContent = "That's incorrect. Try again!";
    }
}

// Add event listener to the "Submit Answer" button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
