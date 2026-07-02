function Travel() {
    return (<div>
        <div>{showTopBar()}</div>
        <div class="flightinfo">
            <div class="flightmap">Flight Map
                <img src="images/Map.png" alt="Flight Map" class="map" />
            </div>
            <div class="flighttext">
                <div class="eta-flight"> {showETA()}</div>
                <div class="altitude">Altitude: 35,000ft</div>
                <div class="speed">Speed: 589mph </div>
                <div class="time-local" id="local-time">{showTimeL()}</div>
                <div class="time-dest" id="dest-time">{showTimeD()}</div>
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