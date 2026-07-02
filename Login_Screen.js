function LoginPage() {

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

    return (
        <div className="loginPage">
            {/* Top Bar */}
            <div>{showTopBar()}</div>
            {/*Login / Guest Section*/}
            <div className="login-container">
                {/* Login Box */}
                <div className="login-box">
                    <h2>Login</h2>
                    <input type="text" id="username" placeholder="Username"/>
                    <input type="password" id="password" placeholder="Password"/>
                    <button className="login-btn" onClick={login}>Login</button>
                </div>
                {/* Guest Box */}
                <div className="guest-box">
                    <h2>Continue as Guest</h2>
                    <p>Browse the site without creating an account.</p>
                    <button className="guest-btn" onClick={guestLogin}>Proceed as Guest</button>
                </div>
            </div>
        </div>
    );
}