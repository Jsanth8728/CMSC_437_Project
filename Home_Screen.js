function HomePage() {
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
                        <select>
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
                            defaultValue="50"
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
                        <select>
                            <option>English</option>
                            <option>Spanish</option>
                            <option>French</option>
                        </select>
                    </div>
                </div>
                <div className="preference-card">
                    <h2>🎬 Favorite Movies</h2>
                    <p>Save movies you'd like to watch or continue during your flight.</p>
                </div>
                <div className="preference-card">
                    <h2>🌙 Dark Mode</h2>
                    <p>Switch between light and dark themes for comfortable viewing.</p>
                    <label className="switch">
                        <input type="checkbox" />
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
                        <button>Off</button>
                        <button>Low</button>
                        <button>Medium</button>
                        <button>High</button>
                    </div>
                </div>
                <div className="preference-card">
                    <h2>🔔 Notifications</h2>
                    <div className="notification-pref">
                        <label>
                            <input type="checkbox" defaultChecked />
                            Meal service reminders
                        </label>
                        <label>
                            <input type="checkbox" defaultChecked />
                            Boarding and arrival updates
                        </label>
                        <label>
                            <input type="checkbox" />
                            Duty-free shopping offers
                        </label>
                        <label>
                            <input type="checkbox" />
                            Entertainment recommendations
                        </label>
                    </div>
                </div>
                <div className="preference-card">
                    <h2>📺 Playback Preferences</h2>
                    <div className="playback-pref">
                        <label>
                            <input type="checkbox" defaultChecked />
                            Resume movies where I left off
                        </label>
                        <label>
                            <input type="checkbox" defaultChecked />
                            Autoplay next episode
                        </label>
                        <label>
                            <input type="checkbox" />
                            Skip intros when available
                        </label>
                        <label>
                            <input type="checkbox" />
                            Play trailers before movies
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
}