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
                        "Installing regular patches ensures vulnerabilities in software are fixed, minimizing the risk of cyberattacks.",
                },
            ];
        } else if (selected.value === "A") {
            message = "Incorrect. 😔";
            color = "red";
            explanationData = [
                { column: "Your Choice", value: "Ignore updates" },
                { column: "Correct Answer", value: "Install regular patches" },
                {
                    column: "Explanation",
                    value:
                        "Ignoring updates leaves your system exposed to known vulnerabilities that hackers can exploit.",
                },
            ];
        } else if (selected.value === "C") {
            message = "Incorrect. 😔";
            color = "red";
            explanationData = [
                { column: "Your Choice", value: "Use outdated software" },
                { column: "Correct Answer", value: "Install regular patches" },
                {
                    column: "Explanation",
                    value:
                        "Using outdated software lacks critical security updates, making it easier for attackers to compromise your system.",
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
