function Travel() {
    return (<div>
        <div>{showTopBar()}</div>
        <div className="flightinfo">
            <div className="flightmap">Flight Map
                <img src="images/Map.png" alt="Flight Map" className="map" />
            </div>
            <div className="flighttext">
                <div className="eta-flight" id="etaf"></div>
                <div className="altitude" id="altitude"></div>
                <div className="speed" id="speed"></div>
                <div className="time-local" id="local-time"></div>
                <div className="time-dest" id="dest-time"></div>
            </div>
        </div>
    </div>)
}

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
}

function showAltitude() {
    const altitude = document.getElementById("altitude");
    console.log(altitude);
    const randAlt = Math.floor(Math.random() * (35000 - 30000 + 1)) + 30000;
    if (altitude) {
        altitude.textContent = "Altitude: " + randAlt + "ft"
    }
}

function showSpeed() {
    const speed = document.getElementById("speed");
    console.log(speed);
    const randAlt = Math.floor(Math.random() * (600 - 550 + 1)) + 550;
    if (speed) {
        speed.textContent = "Speed: " + randAlt + "mph"
    }
}

function showETA() {
    if (!localStorage.getItem("etaHours")) {
        localStorage.setItem("etaHours", 3);
        localStorage.setItem("etaMinutes", 30);
        localStorage.setItem("etaSeconds", 60);
    }
    const eta = document.getElementById("etaf");
    console.log("etaf");
    let seconds = localStorage.getItem("etaSeconds");
    let minutes = localStorage.getItem("etaMinutes");
    let hours = localStorage.getItem("etaHours");
    seconds--;
    if (seconds < 0) {
        seconds = 59;
        minutes--;
    }

    if (minutes < 0) {
        minutes = 59;
        hours--;
    }

    // stop at 0
    if (hours < 0) {
        hours = 0;
        minutes = 0;
        seconds = 0;
    }
    localStorage.setItem("etaHours", hours);
    localStorage.setItem("etaMinutes", minutes);
    localStorage.setItem("etaSeconds", seconds);
    const formatted = String(hours).padStart(2, "0") + ":" +
        String(minutes).padStart(2, "0") + ":" + String(seconds).padStart(2, "0");
    eta.textContent = "ETA: " + formatted;
}

setInterval(showETA, 1000);
setInterval(showAltitude, 1000);
setInterval(showSpeed, 1000);
setInterval(showTimeD, 1000);
setInterval(showTimeL, 1000);