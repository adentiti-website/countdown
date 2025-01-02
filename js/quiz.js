// Quiz Functionality
let currentQuiz = 1;

function submitQuiz(quizNumber) {
    const selected = document.querySelector('input[name="answer"]:checked');
    const feedback = document.getElementById('quiz-feedback');
    const explanationTable = document.getElementById('quiz-explanation');

    if (selected) {
        let message, explanationData;

        // Quiz logic for each question
        if (quizNumber === 1) {
            if (selected.value === "B") {
                message = "Correct! 🎉";
                explanationData = [
                    { column: "Your Choice", value: "Install regular patches" },
                    { column: "Explanation", value: "Patches fix vulnerabilities, reducing risk." }
                ];
            } else {
                message = "Incorrect. 😢";
                explanationData = [
                    { column: "Your Choice", value: selected.value },
                    { column: "Correct Answer", value: "Install regular patches" },
                    { column: "Explanation", value: "Outdated software is vulnerable to attacks." }
                ];
            }
        } else if (quizNumber === 2) {
            if (selected.value === "A") {
                message = "Correct! 🎉";
                explanationData = [
                    { column: "Your Choice", value: "Educate your employees" },
                    { column: "Explanation", value: "Educated employees reduce human error." }
                ];
            } else {
                message = "Incorrect. 😢";
                explanationData = [
                    { column: "Your Choice", value: selected.value },
                    { column: "Correct Answer", value: "Educate your employees" },
                    { column: "Explanation", value: "Employees are the first line of defense." }
                ];
            }
        }

        // Show feedback
        feedback.textContent = message;

        // Show explanation table
        let tableHTML = `<table class="explanation-table"><tr>`;
        explanationData.forEach(row => {
            tableHTML += `<th>${row.column}</th><td>${row.value}</td>`;
        });
        tableHTML += `</tr></table>`;
        explanationTable.innerHTML = tableHTML;

        // Show next step
        if (quizNumber === 1) {
            document.getElementById('next-quiz-container').style.display = 'block';
        } else if (quizNumber === 2) {
            document.getElementById('book-appointment-container').style.display = 'block';
        }
    }
}

function loadNextQuiz() {
    currentQuiz = 2;

    // Replace quiz content with the next question
    document.getElementById('question').textContent = "What is the most effective way to reduce human error in cybersecurity?";
    document.querySelector('form').innerHTML = `
        <label><input type="radio" name="answer" value="A"> Educate your employees</label><br>
        <label><input type="radio" name="answer" value="B"> Use only antivirus software</label><br>
        <label><input type="radio" name="answer" value="C"> Disable all online services</label><br>
        <button type="button" onclick="submitQuiz(2)">Submit</button>
    `;

    // Hide the "Try Another Quiz" button
    document.getElementById('next-quiz-container').style.display = 'none';

    // Clear previous feedback and explanation
    document.getElementById('quiz-feedback').textContent = '';
    document.getElementById('quiz-explanation').innerHTML = '';
}
