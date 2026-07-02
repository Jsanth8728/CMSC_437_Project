function Travel() {
    return (<div>
        <div>{showTopBar()}</div>
        <div className="flightinfo">
            <div className="flightmap">Flight Map
                <img src="images/Map.png" alt="Flight Map" className="map" />
            </div>
            <div className="flighttext">
                <div className="eta-flight" id="etaf"></div>
                <div className="altitude" id = "altitude"></div>
                <div className="speed" id = "speed"></div>
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
    if (altitude){
        altitude.textContent= "Altitude: " + randAlt + "ft"
    }
}

function showSpeed() {
    const speed = document.getElementById("speed");
    console.log(speed);
    const randAlt = Math.floor(Math.random() * (600 - 550 + 1)) + 550;
    if (speed){
        speed.textContent= "Speed: " + randAlt + "mph"
    }
}

let etaHours = 3;
let etaMinutes = 30;
let etaSeconds = 60;
function showETAF() {
    const eta = document.getElementById("etaf");
    console.log("etaf");
    etaSeconds -= 1;
   if (etaSeconds < 0) {
        etaSeconds = 59;
        etaMinutes--;
    }

    if (etaMinutes < 0) {
        etaMinutes = 59;
        etaHours--;
    }

    // stop at 0
    if (etaHours < 0) {
        etaHours = 0;
        etaMinutes = 0;
        etaSeconds = 0;
    }
    const formatted = String(etaHours).padStart(2, "0") + ":" +
    String(etaMinutes).padStart(2, "0") + ":" + String(etaSeconds).padStart(2, "0");
    eta.textContent = "ETA: " + formatted;
}

setInterval(showETAF,  1000);
setInterval(showAltitude, 1000);
setInterval(showSpeed, 1000);
setInterval(showTimeD, 1000);
setInterval(showTimeL, 1000);