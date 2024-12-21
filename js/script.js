const messages = {
    en: {
        countdown: "Countdown",
        introduction: "Welcome! Let’s count down to 2025 together."
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

const updateTime = () => {
    const now = new Date();
    document.getElementById("current-time").innerHTML = `Local Time: ${now.toLocaleTimeString()}`;
};

countdown();
setInterval(countdown, 1000);
updateTime();
setInterval(updateTime, 1000);
