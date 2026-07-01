function HelpPage() {
    const [feedbackOpen, setFeedbackOpen] = React.useState(false);
    function openFeedback() {
        setFeedbackOpen(true);
    }
    function closeFeedback() {
        setFeedbackOpen(false);
    }
    
    const [attendantOpen, setAttendantOpen] = React.useState(false);
    function openAttendant() {
        setAttendantOpen(true);
    }
    function closeAttendant() {
        setAttendantOpen(false);
    }
    
    const [safetyOpen, setSafetyOpen] = React.useState(false);
    function openSafety() {
        setSafetyOpen(true);
    }
    function closeSafety() {
        setSafetyOpen(false);
    }
    
    const [announceOpen, setAnnounceOpen] = React.useState(false);
    function openAnnounce() {
        setAnnounceOpen(true);
    }
    function closeAnnounce() {
        setAnnounceOpen(false);
    }
    
    return(
        <div className="help-page">
            <div>{showTopBar()}</div>
            <h1>Help Page</h1>
            <div className = "helpSection">
                <button className = "announcementsTab" onClick = {openAnnounce}>Announcements</button>
                <button className = "SafetyTab" onClick={openSafety}>Safety</button>
                <button className = "AttendentTab" onClick = {openAttendant}>Call Attendent</button>
                <button className = "ReportTab" onClick = {openFeedback}>Feedback</button>
            </div>
            
            {feedbackOpen && (
                <div className="feedback-overlay active">
                    <div className="feedback-box">
                        <h2>We value your opinion</h2>
                        <p></p>
                        <input type="text" placeholder="Enter your feedback here..." />
                        <div className="feedback-buttons">
                            <button onClick={closeFeedback}>Submit</button>
                            <button onClick={closeFeedback}>Back</button>
                        </div>
                    </div>
                </div>
            )}

            {attendantOpen && (
                <div className="attendent-overlay active">
                    <div className="attendent-box">
                        <h2>Calling an Attendant to Your Seat</h2>
                        <p></p>
                        <div className="attendent-buttons">
                            <button onClick={closeAttendant}>Back</button>
                        </div>
                    </div>
                </div>
            )}

            {safetyOpen && (
                <div className="safety-overlay active">
                    <div className="safety-box">
                        <h2>Safety</h2>
                        <img src = "images/Airplane safety.jpg" alt="Airplane Safety Card" class="safetyCard"/>
                        <div className="feedback-buttons">
                            <button onClick={closeSafety}>Back</button>
                        </div>
                    </div>
                </div>
            )}

            {announceOpen && (
                <div className="announce-overlay active">
                    <div className="announce-box">
                        <h2>Announcements</h2>
                        <p>Announcement 1</p>
                        <p>Announcement 2</p>
                        <p>Announcement 3</p>
                        <p>Announcement 4</p>
                        <div className="announce-buttons">
                            <button onClick={closeAnnounce}>Back</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}