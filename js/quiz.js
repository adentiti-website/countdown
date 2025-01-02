function submitQuiz() {
    const selected = document.querySelector('input[name="answer"]:checked');
    const feedback = document.getElementById('quiz-feedback');
    const explanationTable = document.getElementById('quiz-explanation');

    if (selected) {
        let message, color, explanationData;

        // Define quiz data
        if (selected.value === "B") {
            message = "Correct! 🎉";
            color = "green";
            explanationData = [
                { column: "Your Choice", value: "Install regular patches" },
                { column: "Correct Answer", value: "Install regular patches" },
                {
                    column: "Explanation",
                    value:
                        "Regular patches ensure that vulnerabilities are fixed, minimizing the risk of cyberattacks.",
                },
            ];
        } else {
            const wrongAnswer =
                selected.value === "A" ? "Ignore updates" : "Use outdated software";
            message = "Incorrect. 😔";
            color = "red";
            explanationData = [
                { column: "Your Choice", value: wrongAnswer },
                { column: "Correct Answer", value: "Install regular patches" },
                {
                    column: "Explanation",
                    value:
                        "Ignoring updates or using outdated software exposes your system to known vulnerabilities.",
                },
            ];
        }

        // Set feedback message
        feedback.textContent = message;
        feedback.style.color = color;

        // Generate explanation table
        let tableHTML = `<table class="explanation-table"><thead><tr>`;
        explanationData.forEach((row) => {
            tableHTML += `<th>${row.column}</th>`;
        });
        tableHTML += `</tr></thead><tbody><tr>`;
        explanationData.forEach((row) => {
            tableHTML += `<td>${row.value}</td>`;
        });
        tableHTML += `</tr></tbody></table>`;
        explanationTable.innerHTML = tableHTML;
    } else {
        feedback.textContent = "Please select an answer.";
        feedback.style.color = "orange";
        explanationTable.innerHTML = "";
    }
}
