function HomePage() {
    //saves favorites
    const favorites = isLoggedIn()
        ? JSON.parse(localStorage.getItem("favoriteMovies") || "[]")
        : [];

    // Saves Language preference
    const [language, setLanguage] = React.useState(() => {
        if (!isLoggedIn()) return "English";
        return localStorage.getItem("language") || "English";
    });

    function changeLanguage(e) {
        setLanguage(e.target.value);

        if (isLoggedIn()) {
            localStorage.setItem("language", e.target.value);
        }
    }

    // Saves volume preferences
    const [volume, setVolume] = React.useState(() => {
        if (!isLoggedIn()) return 50;
        return localStorage.getItem("volume") || 50;
    });

    function changeVolume(e) {
        setVolume(e.target.value);

        if (isLoggedIn()) {
            localStorage.setItem("volume", e.target.value);
        }
    }

    //Saves dark mode prefs
    const [darkMode, setDarkMode] = React.useState(() => {
        if (!isLoggedIn()) return false;
        return localStorage.getItem("darkMode") === "true";
    });

    function toggleDarkMode(e) {
        const enabled = e.target.checked;

        setDarkMode(enabled);

        localStorage.setItem("darkMode", enabled);

        if (enabled) {
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
        }
    }

    //Saves subtitles
    const [subtitles, setSubtitles] = React.useState(() => {
        if (!isLoggedIn()) return "English";
        return localStorage.getItem("subtitles") || "English";
    });

    function changeSubtitles(e) {
        setSubtitles(e.target.value);

        if (isLoggedIn()) {
            localStorage.setItem("subtitles", e.target.value);
        }
    }
    //saves playback prefs
    const [resumeMovie, setResumeMovie] = React.useState(() => {
        if (!isLoggedIn()) return true;
        return localStorage.getItem("resumeMovie") === "true";
    });

    const [autoPlay, setAutoplay] = React.useState(() => {
        if (!isLoggedIn()) return true;
        return localStorage.getItem("autoPlay") === "true";
    });

    const [skipIntros, setSkipIntros] = React.useState(() => {
        if (!isLoggedIn()) return true;
        return localStorage.getItem("skipIntros") === "true";
    });

    const [playTrailers, setPlayTrailers] = React.useState(() => {
        if (!isLoggedIn()) return true;
        return localStorage.getItem("playTrailers") === "true";
    });

    //notifications prefs saved
    const [mealService, setMealService] = React.useState(() => {
        if (!isLoggedIn()) return true;
        return localStorage.getItem("mealService") === "true";
    });

    const [boardUpdates, setBoardUpdates] = React.useState(() => {
        if (!isLoggedIn()) return true;
        return localStorage.getItem("boardUpdates") === "true";
    });

    const [shopOffers, setShopOffers] = React.useState(() => {
        if (!isLoggedIn()) return true;
        return localStorage.getItem("shopOffers") === "true";
    });

    const [enterRecs, setEnterRecs] = React.useState(() => {
        if (!isLoggedIn()) return true;
        return localStorage.getItem("enterRecs") === "true";
    });

    //saves light prefs
    const [readingLight, setReadingLight] = React.useState(() => {
        if (!isLoggedIn()) return "Medium";
        return localStorage.getItem("readingLight") || "Medium";
    });

    function changeReadingLight(level) {
        setReadingLight(level);

        if (isLoggedIn()) {
            localStorage.setItem("readingLight", level);
        }
    }
        
    return (
        <div className="airline-info">
            {/* Top Bar */}
            <div>{showTopBar()}</div>
            <div className="welcome-msg">
                <h1>Welcome to Last Choice Airways!</h1>
                {/* Display Logo here */}
                <h3>
                    Welcome aboard! Use your personal in-flight hub to customize your
                    experience on Last Choice Airways. Your preferences are saved throughout
                    your flight, so you can return at any time to continue watching
                    movies, shop duty-free, make calls, browse destinations, and more.
                    Customize your settings below to make your journey more enjoyable. 
                    We may be your last choice, but we hope it's a memorable one! 
                </h3>
            </div>
            <div className="preferences-container">
                <div className="preference-card">
                    <h2>🌎 Preferred Language</h2>
                    <p>Please select the language used throughout the entertainment system</p>
                    <div className="language-pref">
                        <select value={language} onChange={changeLanguage}>
                            <option>English</option>
                            <option>Spanish</option>
                            <option>French</option>
                            <option>German</option>
                            <option>Japanese</option>
                            <option>Chinese</option>
                        </select>
                    </div>
                </div>
                <div className="preference-card">
                    <h2>🔊 Volume Level</h2>
                    <p>Choose your default audio volume for movies, music, and announcements.</p>
                    <div className="volume-pref">
                        <input
                            type="range"
                            min="0"
                            max="100"
                            value={volume}
                            onChange={changeVolume}
                        />
                    </div>
                </div>
                <div className="preference-card">
                    <h2>💬 Subtitle Settings</h2>
                    <p>Enable subtitles and choose your preferred subtitle language.</p>
                    <label>
                        <input type="checkbox" />
                        Enable Subtitles
                    </label>
                        <br /><br />
                    <div className="subtitle-pref">
                        <select value={subtitles} onChange={changeSubtitles}>
                            <option>English</option>
                            <option>Spanish</option>
                            <option>French</option>
                        </select>
                    </div>
                </div>
                <div className="preference-card">
                    <h2>🎬 Favorite Movies</h2>
                    <p>Save movies you'd like to watch or continue during your flight.</p>
                    {isLoggedIn() ? (
                        favorites.length === 0 ? (
                            <p>No favorite movies yet.</p>
                        ) : (
                            favorites.map(movie => (
                                <div key={movie.title} className="favorite-item">
                                    {movie.title}
                                </div>
                            ))
                        )
                    ) : (
                        <p>Log in to save and view your favorite movies.</p>
                    )}
                </div>
                <div className="preference-card">
                    <h2>🌙 Dark Mode</h2>
                    <p>Switch between light and dark themes for comfortable viewing.</p>
                    <label className="switch">
                        <input type="checkbox" checked={darkMode} onChange={toggleDarkMode}/>
                        <span className="slider"></span>
                    </label>
                </div>
                 <div className="preference-card">
                    <h2>💺 Seat Preferences</h2>
                    <p>Customize seat-specific settings such as reading light, seat position, 
                        or other available options.</p>
                    <h4>💺 Seat Recline</h4>
                    <div className="recline">
                        <input type="range" min="0" max="100" defaultValue="20"/>
                    </div>
                    <h4>💡 Reading Light</h4>
                    <div className="reading-pref">
                        <button  className={readingLight === "Off" ? "selected" : ""}
                            onClick={() => changeReadingLight("Off")}>
                            Off
                        </button>
                        <button  className={readingLight === "Low" ? "selected" : ""}
                            onClick={() => changeReadingLight("Low")}>
                            Low
                        </button>
                        <button  className={readingLight === "Medium" ? "selected" : ""}
                            onClick={() => changeReadingLight("Medium")}>
                            Medium
                        </button>
                        <button  className={readingLight === "High" ? "selected" : ""}
                            onClick={() => changeReadingLight("High")}>
                            High
                        </button>
                    </div>
                </div>
                <div className="preference-card">
                    <h2>🔔 Notifications</h2>
                    <div className="notification-pref">
                        <label>
                            <input
                                type="checkbox"
                                checked={mealService}
                                onChange={(e) => {
                                    setMealService(e.target.checked);

                                    if (isLoggedIn()) {
                                        localStorage.setItem("mealService", e.target.checked);
                                    }
                                }}/>
                            Meal service reminders
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                checked={boardUpdates}
                                onChange={(e) => {
                                    setMealService(e.target.checked);

                                    if (isLoggedIn()) {
                                        localStorage.setItem("boardUpdates", e.target.checked);
                                    }
                                }}/>
                            Boarding and arrival updates
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                checked={shopOffers}
                                onChange={(e) => {
                                    setShopOffers(e.target.checked);

                                    if (isLoggedIn()) {
                                        localStorage.setItem("shopOffers", e.target.checked);
                                    }
                                }}/>
                            Duty-free shopping offers
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                checked={enterRecs}
                                onChange={(e) => {
                                    setEnterRecs(e.target.checked);

                                    if (isLoggedIn()) {
                                        localStorage.setItem("enterRecs", e.target.checked);
                                    }
                                }}/>
                            Entertainment recommendations
                        </label>
                    </div>
                </div>
                <div className="preference-card">
                    <h2>📺 Playback Preferences</h2>
                    <div className="playback-pref">
                        <label>
                            <input
                                type="checkbox"
                                checked={resumeMovie}
                                onChange={(e) => {
                                    setResumeMovie(e.target.checked);

                                    if (isLoggedIn()) {
                                        localStorage.setItem("resumeMovie", e.target.checked);
                                    }
                                }}/>
                            Resume movies where I left off
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                checked={autoPlay}
                                onChange={(e) => {
                                    setAutoplay(e.target.checked);

                                    if (isLoggedIn()) {
                                        localStorage.setItem("autoPlay", e.target.checked);
                                    }
                                }}/>
                            Autoplay next episode
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                checked={skipIntros}
                                onChange={(e) => {
                                    setSkipIntros(e.target.checked);

                                    if (isLoggedIn()) {
                                        localStorage.setItem("skipIntros", e.target.checked);
                                    }
                                }}/>
                            Skip intros when available
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                checked={playTrailers}
                                onChange={(e) => {
                                    setPlayTrailers(e.target.checked);

                                    if (isLoggedIn()) {
                                        localStorage.setItem("playTrailers", e.target.checked);
                                    }
                                }}/>
                            Play trailers before movies
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
}