// Live Clock
setInterval(() => {
    const now = new Date();
    const time = now.toLocaleTimeString();
    document.getElementById("current-time").textContent = `Current Time: ${time}`;
}, 1000);

// Game Logic
document.getElementById("start-game").addEventListener("click", () => {
    const gameCanvas = document.getElementById("catch-game");
    const ctx = gameCanvas.getContext("2d");
    let score = 0;
    let isPlaying = true;

    function createCircle() {
        const x = Math.random() * gameCanvas.width;
        const y = Math.random() * gameCanvas.height;

        ctx.clearRect(0, 0, gameCanvas.width, gameCanvas.height);
        ctx.beginPath();
        ctx.arc(x, y, 20, 0, Math.PI * 2);
        ctx.fillStyle = "yellow";
        ctx.fill();
        ctx.closePath();

        setTimeout(() => {
            if (isPlaying) createCircle();
        }, 1000);
    }

    gameCanvas.addEventListener("click", (e) => {
        const rect = gameCanvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        if (ctx.isPointInPath(x, y)) {
            score++;
            document.getElementById("game-status").textContent = `Score: ${score}`;
        }
    });

    createCircle();

    setTimeout(() => {
        isPlaying = false;
        document.getElementById("game-status").textContent = `Game Over! Your score: ${score}`;
    }, 30000);
});
