function goToMediaPage() {
    window.location.href = "Media.html";
}

function goToHomePage() {
    window.location.href = "Home_Screen.html";
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
                        />
                    </a>
                </span>

                <span>
                    <a href="#">
                        <img
                            src="images/ShoppingBag.png"
                            alt="Shopping"
                            className="shopping-pic"
                        />
                    </a>
                </span>

                <span>
                    <a href="#">
                        <img
                            src="images/ForkKnife.png"
                            alt="Food and Beverage"
                            className="food-pic"
                        />
                    </a>
                </span>

                <span>
                    <a href="#">
                        <img
                            src="images/Help.png"
                            alt="Help"
                            className="help-pic"
                        />
                    </a>
                </span>
            </span>

            <div className="topbar">
                <div className="media-banner">
                    <div className="announcement">Announcements</div>

                    <div className="eta">ETA</div>

                    <div className="login">Login</div>

                </div>
            </div>
        </div>
    );
}