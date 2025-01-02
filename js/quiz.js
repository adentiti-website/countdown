document.addEventListener('DOMContentLoaded', () => {
    const quizContainer = document.getElementById('quiz-container');
    const questions = [
        { q: "What is a phishing attack?", a: "An attempt to steal sensitive information through deceitful emails." },
        { q: "What does MFA stand for?", a: "Multi-Factor Authentication." }
    ];
    let quizHTML = "";
    questions.forEach((item, index) => {
        quizHTML += `<div>
            <p><strong>Q${index + 1}:</strong> ${item.q}</p>
            <p>Answer: ${item.a}</p>
        </div>`;
    });
    quizContainer.innerHTML = quizHTML;
});
