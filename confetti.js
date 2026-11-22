
const container = document.getElementById("confetti-container");

const colors = [
    "red",
    "blue",
    "yellow",
    "green",
    "purple",
    "orange"
];

for (let i = 0; i < 100; i++) {

    let confetti = document.createElement("div");

    confetti.classList.add("confetti");

    // Random position
    confetti.style.left = Math.random() * 100 + "%";

    // Random color
    confetti.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];

    //  falling speed
    confetti.style.animationDuration =
        (Math.random() * 3 + 2) + "s";

    // Random starting time
    confetti.style.animationDelay =
        (Math.random() * 2) + "s";

    container.appendChild(confetti);

    // Remove confetti after falling
    confetti.addEventListener("animationend", function() {
        confetti.remove();
    });
}
