function goToMediaPage() {
    window.location.href = "Media.html";
}

function goToHomePage() {
    window.location.href = "Home_Screen.html";
}
function goToTravelPage() {
    window.location.href = "Travel.html";
}
function goToShopping() {
    window.location.href = "Shopping.html";
}
function goToFood() {
    window.location.href = "Food.html";
}
function goToHelp(){
    window.location.href = "Help.html";
}

function goToProfile()
{
    window.location.href = "Profile.html";
}

function showETA() {
    return "ETA: 2:30 PM CEST";
}

function showTopBar() {
    return (
        <div className="topbar">
            <div className="announcement">Announcements</div>
            <div className="eta" id="eta">{showETA()}</div>
            <button className="login"
                onClick={() => window.location.href = "Login.html"}
            >Login</button>
            <button className="back-button"
                onClick={() => window.location.href = "Home_Screen.html"}>
                Back
            </button>
        </div>
    );
}

function HomePage() {
    return (
        <div className="homepage" id="home">
            <span className="menu" id="menu">
                <span>
                    <a href="#">
                        <img
                            src="images/profilepic.png"
                            alt="Profile"
                            className="profile-pic"
                            onClick={goToProfile}
                        />
                    </a>
                </span>

                <span>
                    <img
                        src="images/Clapboard.png"
                        alt="Entertainment"
                        className="clapboard-pic"
                        onClick={goToMediaPage}
                    />
                </span>

                <span>
                    <a href="#">
                        <img
                            src="images/AirplaneIcon.png"
                            alt="Airplane"
                            className="airplane-pic"
                            onClick={goToTravelPage}
                        />
                    </a>
                </span>

                <span>
                    <a href="#">
                        <img
                            src="images/ShoppingBag.png"
                            alt="Shopping"
                            className="shopping-pic"
                            onClick={goToShopping}
                        />
                    </a>
                </span>

                <span>
                    <a href="#">
                        <img
                            src="images/ForkKnife.png"
                            alt="Food and Beverage"
                            className="food-pic"
                            onClick={goToFood}
                        />
                    </a>
                </span>

                <span>
                    <a href="#">
                        <img
                            src="images/Help.png"
                            alt="Help"
                            className="help-pic"
                            onClick={goToHelp}
                        />
                    </a>
                </span>
            </span>

            <div className="topbar">{showTopBar()}</div>
        </div>
    );
}