function login() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === "" || password === "") {
        alert("Please enter both a username and password.");
        return;
    }

    //Saves that they logged in (since front end only)
    localStorage.setItem("loggedIn", "true");

    // Successful "login"
    window.location.href = "Home_Screen.html";
}

function guestLogin() {
    localStorage.setItem("loggedIn", "false"); //not logged in
    window.location.href = "Home_Screen.html";
}