document.addEventListener("DOMContentLoaded", () => {
    // Effects logic
    const effectsContainer = document.getElementById("effects-container");
    let currentEffect = "snow";
    let effectInterval;

    const createSnowflake = () => {
        const snowflake = document.createElement("div");
        snowflake.className = "effect snowflake";
        snowflake.style.left = `${Math.random() * 100}vw`;
        snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;
        snowflake.innerHTML = "❄";
        effectsContainer.appendChild(snowflake);
        setTimeout(() => snowflake.remove(), 5000);
    };

    const createBubble = () => {
        const bubble = document.createElement("div");
        bubble.className = "effect bubble";
        bubble.style.left = `${Math.random() * 100}vw`;
        bubble.style.width = bubble.style.height = `${Math.random() * 20 + 10}px`;
        bubble.style.animationDuration = `${Math.random() * 3 + 2}s`;
        effectsContainer.appendChild(bubble);
        setTimeout(() => bubble.remove(), 5000);
    };

    const createFirework = () => {
        const firework = document.createElement("div");
        firework.className = "effect firework";
        firework.style.left = `${Math.random() * 100}vw`;
        firework.style.top = `${Math.random() * 100}vh`;
        effectsContainer.appendChild(firework);
        setTimeout(() => firework.remove(), 1500);
    };

    const switchEffects = () => {
        clearInterval(effectInterval);
        if (currentEffect === "snow") {
            currentEffect = "bubble";
            effectInterval = setInterval(createBubble, 200);
        } else if (currentEffect === "bubble") {
            currentEffect = "firework";
            effectInterval = setInterval(createFirework, 500);
        } else {
            currentEffect = "snow";
            effectInterval = setInterval(createSnowflake, 200);
        }
    };

    // Initialize effects
    effectInterval = setInterval(createSnowflake, 200);
    setInterval(switchEffects, 3 * 60 * 1000);

    // Game logic
    const gameSection = document.getElementById("game-section");
    const canvas = document.getElementById("catch-game");
    const ctx = canvas.getContext("2d");
    let paddle = { x: canvas.width / 2 - 50, y: canvas.height - 30, width: 100, height: 10 };
    let objects = [];
    let gameRunning = false;
    let score = 0;

    const toggleGame = () => {
        if (gameRunning) {
            gameRunning = false;
            objects = [];
            score = 0;
            document.getElementById("score").innerText = "Score: 0";
            gameSection.style.transform = "translateY(100%)";
        } else {
            gameRunning = true;
            gameSection.style.transform = "translateY(0)";
        }
    };

    document.getElementById("start-game").addEventListener("click", toggleGame);

    // Countdown and Quote Logic
    const countdown = () => {
        const now = new Date().getTime();
        const targetDate = new Date("Jan 1, 2025 00:00:00").getTime();
        const timeLeft = targetDate - now;

        if (timeLeft > 0) {
            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            document.getElementById("days").innerHTML = `${days} days`;
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

    const quotes = [
        "Believe in yourself and all that you are.",
        "The future belongs to those who prepare for it today.",
        "Every moment is a fresh beginning.",
        "Your limitation—it’s only your imagination.",
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
        "Strength doesn’t come from what you can do. It comes from overcoming the things you once thought you couldn’t.",
        "Your life does not get better by chance. It gets better by change.",
        "The comeback is always stronger than the setback.",
        "Sometimes later becomes never. Do it now.",
        "Don’t stop when you’re tired. Stop when you’re done.",
        "Be so good they can’t ignore you.",
        "Work hard in silence, let your success be the noise.",
        "Believe in the power of yet: you’re not there yet, but you will be.",
        "Push yourself, because no one else is going to do it for you.",
        "Doubt kills more dreams than failure ever will.",
        "One small positive thought in the morning can change your whole day.",
        "Happiness is not by chance, but by choice.",
        "Do not limit your challenges. Challenge your limits.",
        "You don’t need to be perfect to be amazing.",
        "A journey of a thousand miles begins with a single step.",
        "Turn your wounds into wisdom.",
        "It’s not whether you get knocked down, it’s whether you get up.",
        "Be so good they can’t ignore you.",
        "The only way to achieve the impossible is to believe it is possible.",
        "Hardships often prepare ordinary people for an extraordinary destiny.",
        "If opportunity doesn’t knock, build a door.",
        "Happiness is not something ready-made. It comes from your own actions.",
        "You are always one decision away from a totally different life.",
        "The comeback is always stronger than the setback.",
        "You were born to be real, not perfect.",
        "Sometimes we are tested not to show our weaknesses but to discover our strengths.",
        "It is never too late to be what you might have been.",
        "Do not quit. Suffer now and live the rest of your life as a champion.",
        "Keep going, because you didn’t come this far just to come this far."
    ];

    const updateQuote = () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        document.getElementById("quote").innerText = quotes[randomIndex];
    };

    // Initialize Page
    countdown();
    setInterval(countdown, 1000);
    updateTime();
    setInterval(updateTime, 1000);
    updateQuote();
    setInterval(updateQuote, 10000);
});
