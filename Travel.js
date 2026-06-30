function showTimeL() {
    const now = new Date();

    const currentTime = now.toLocaleTimeString("en-US", {
        timeZone: "America/New_York",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
    });

    const localTime = document.getElementById("local-time");
    if (localTime) {
        localTime.textContent = "Local Time: " + currentTime;
    }

    setInterval(showTimeL, 1000);
}

function showTimeD() {
    const now = new Date();

    const currentTime = now.toLocaleTimeString("en-US", {
        timeZone: "Europe/Paris",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
    });

    const destTime = document.getElementById("dest-time");
    if (destTime) {
        destTime.textContent = "Destination Time: " + currentTime;
    }

    setInterval(showTimeD, 1000);
}

function showETA() {
    document.getElementById("eta").textContent = "ETA: 2:30 PM CEST";
}
function showETAF() {
    document.getElementById("etaf").textContent = "ETA: 2:30 PM CEST";
}
document.addEventListener("DOMContentLoaded", showETA);
document.addEventListener("DOMContentLoaded", showETAF)
document.addEventListener("DOMContentLoaded", showTimeL);
document.addEventListener("DOMContentLoaded", showTimeD);