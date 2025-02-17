const dino = document.getElementById("dino");
const obstacle = document.getElementById("obstacle");

document.addEventListener("keydown", function(event) {
    if (event.code === "Space") {
        jump();
    }
});

function jump() {
    if (dino.classList != "jump") {
        dino.classList.add("jump");

        setTimeout(function() {
            dino.classList.remove("jump");
        }, 500);
    }
}

let isAlive = setInterval(function() {
    // Get current dino Y position
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));

    // Get current obstacle X position
    let obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));

    // Detect collision
    if (obstacleLeft < 90 && obstacleLeft > 50 && dinoTop >= 140) {
        // Collision detected
        alert("Game Over!");
    }
}, 10);