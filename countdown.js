
// Choose countdown date
let countdownDate = new Date("2027-07-24T00:00:00").getTime();

function updateCountdown() {

    let now = new Date().getTime();

    let distance = countdownDate - now;

    if (distance <= 0) {
        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";

        document.getElementById("countdown-message").textContent =
            " The countdown is over!";

        clearInterval(timer);
        return;
    }

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));

    let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    let minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    let seconds = Math.floor(
        (distance % (1000 * 60)) / 1000
    );

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");
    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");
    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");
}

// Run countdown every second
let timer = setInterval(updateCountdown, 1000);

// Display immediately when page opens
updateCountdown();
