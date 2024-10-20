// Get formatted date for 'date' field
function getFormattedDate() {
    const today = new Date();
    date_options = {
        year: "numeric",
        month: "long",
        day: "numeric"
    }
    const formatted_date = today.toLocaleString("en-GB", date_options);
    document.getElementById("date").textContent = formatted_date;
}

// Get time for 'clock' field
function updateClock() {
    const now = new Date();
    time_options = {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    }
    const time = now.toLocaleTimeString("en-GB", time_options)
    document.getElementById("clock").textContent = time
    setInterval(updateClock, 1000)
}

getFormattedDate()
updateClock()