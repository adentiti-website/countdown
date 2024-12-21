// Language Support
const messages = {
    en: {
        countdown: "Countdown",
        introduction: "Welcome! Let us count down to 2025 together."
    },
    fr: {
        countdown: "Compte à rebours",
        introduction: "Bienvenue! Comptons ensemble jusqu’en 2025."
    }
};

let currentLanguage = "en";

function setLanguage(lang) {
    currentLanguage = lang;
    document.getElementById("introduction").innerText = messages[lang].introduction;
}

// Countdown Logic
const countdown = () => {
    const now = new Date().getTime();
    const targetDate = new Date("Jan 1, 2025 00:00:00").getTime();
    const timeLeft = targetDate - now;

    if (timeLeft > 0) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("days").innerHTML = `${days} ${days === 1 ? "day" : "days"}`;
        document.getElementById("time").innerHTML = `${hours}h ${minutes}m ${seconds}s`;
    } else {
        document.getElementById("days").innerHTML = "Happy New Year!";
        document.getElementById("time").innerHTML = "";
    }
};

// Update Local Time
const updateTime = () => {
    const now = new Date();
    document.getElementById("current-time").innerHTML = `Local Time: ${now.toLocaleTimeString()}`;
};

// Quotes Logic
const quotes = [
    "Believe in yourself and all that you are.",
    "The future belongs to those who prepare for it today.",
    "Every moment is a fresh beginning.",
    "Your limitation, it is only your imagination.",
    "Dream big and dare to fail.",
    "Success doesn’t just find you. You have to go out and get it.",
    "Do not wait for opportunity. Create it.",
    "Great things never come from comfort zones.",
    "Dream it. Wish it. Do it.",
    "Stay positive. Work hard. Make it happen.",
    "The best time to start was yesterday. The next best time is now.",
    "It always seems impossible until it is done.",
    "Believe you can, and you’re halfway there.",
    "Act as if what you do makes a difference. It does.",
    "Keep your face always toward the sunshine, and shadows will fall behind you.",
    "Motivation is what gets you started. Habit is what keeps you going.",
    "You are braver than you believe, stronger than you seem, and smarter than you think.",
    "Do not watch the clock; do what it does. Keep going.",
    "We generate fears while we sit. We overcome them by action.",
    "Strength doesn’t come from what you can do. It comes from overcoming the things you once thought you couldn’t."
];

const updateQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerText = quotes[randomIndex];
};

// Social Sharing
const shareText = `Join me in counting down to 2025!`;
const shareURL = "https://adentiti.ca";

document.getElementById("share-twitter").href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareURL)}`;
document.getElementById("share-linkedin").href = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareURL)}&title=${encodeURIComponent(shareText)}`;
document.getElementById("share-instagram").href = shareURL; // Instagram doesn't support direct links

// Mini Game Logic
let score = 0;
let gameActive = false;

function toggleGame() {
    gameActive = !gameActive;
    document.getElementById("toggle-game").innerText = gameActive ? "Stop Mini-Game" : "Play Mini-Game";
}

function startMiniGame() {
    if (!gameActive) return;

    const target = document.createElement("div");
    target.style.position = "absolute";
    target.style.top = `${Math.random() * 90}vh`;
    target.style.left = `${Math.random() * 90}vw`;
    target.style.width = "50px";
    target.style.height = "50px";
    target.style.background = "red";
    target.style.borderRadius = "50%";
    target.style.cursor = "pointer";
    target.onclick = () => {
        score++;
        document.getElementById("score").innerText = `Score: ${score}`;
        target.remove();
    };
    document.body.appendChild(target);
    setTimeout(() => target.remove(), 3000);
}

setInterval(() => {
    if (gameActive) startMiniGame();
}, 2000);

// Theme Toggle
let isDarkTheme = true;

document.getElementById("theme-toggle").addEventListener("click", () => {
    isDarkTheme = !isDarkTheme;
    document.body.style.background = isDarkTheme
        ? "linear-gradient(90deg, #000428, #004e92)"
        : "linear-gradient(90deg, #ffffff, #c0c0c0)";
});

// Initialize the page
countdown();
setInterval(countdown, 1000);
updateTime();
setInterval(updateTime, 1000);
updateQuote();
setInterval(updateQuote, 10000);
const shareText = `Join me in counting down to 2025!`;
const shareURL = "https://adentiti.ca";

document.getElementById("share-twitter").href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareURL)}`;
document.getElementById("share-linkedin").href = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareURL)}&title=${encodeURIComponent(shareText)}`;
document.getElementById("share-instagram").href = shareURL; // Instagram doesn't support direct links
document.getElementById("share-facebook").href = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareURL)}&quote=${encodeURIComponent(shareText)}`;

document.getElementById("toggle-game").addEventListener("click", toggleGame);
