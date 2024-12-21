document.addEventListener("DOMContentLoaded", () => {
    // Language Support
    const messages = {
        en: {
            countdown: "Countdown",
            introduction: "Welcome! Let us count down to 2025 together.",
        },
        fr: {
            countdown: "Compte à rebours",
            introduction: "Bienvenue! Comptons ensemble jusqu’en 2025.",
        },
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
    ];

    const updateQuote = () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        document.getElementById("quote").innerText = quotes[randomIndex];
    };

    // Social Sharing
    const shareText = "Join me in counting down to 2025!";
    const shareURL = "https://adentiti.ca";

    document.getElementById("share-twitter").href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareURL)}`;
    document.getElementById("share-linkedin").href = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareURL)}&title=${encodeURIComponent(shareText)}`;
    document.getElementById("share-facebook").href = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareURL)}&quote=${encodeURIComponent(shareText)}`;
    document.getElementById("share-instagram").href = "https://instagram.com/adentiti"; // Replace with your profile

    // Initialize the page
    countdown();
    setInterval(countdown, 1000);
    updateTime();
    setInterval(updateTime, 1000);
    updateQuote();
    setInterval(updateQuote, 10000);
});
