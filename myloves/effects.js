/* 🎉 CONFETTI */
confetti({
    particleCount: 200,
    spread: 120,
    origin: { y: 0.6 }
});

/* ❄️ SNOW */
function createSnow() {
    const snow = document.createElement("div");
    snow.className = "snow";
    snow.innerHTML = "❄";

    snow.style.left = Math.random() * window.innerWidth + "px";
    snow.style.animationDuration = (Math.random() * 3 + 2) + "s";
    snow.style.opacity = Math.random();

    document.body.appendChild(snow);

    setTimeout(() => {
        snow.remove();
    }, 6000);
}

setInterval(createSnow, 120);
