function generateGoogleCalendarLink() {
    var summary = document.getElementById("summary").value;
    var startDate = document.getElementById("start-date").value;
    var startTime = document.getElementById("start-time").value;
    var endDate = document.getElementById("end-date").value;
    var endTime = document.getElementById("end-time").value;
    var description = document.getElementById("description").value;
    var location = document.getElementById("location").value;

    // Convert local IST time to UTC time
    var startDateTime = new Date(startDate + "T" + startTime + "+05:30");
    var endDateTime = new Date(endDate + "T" + endTime + "+05:30");
    var startUTC = startDateTime.toISOString().replace(/[:-]/g, "").slice(0, -4) + "Z";
    var endUTC = endDateTime.toISOString().replace(/[:-]/g, "").slice(0, -4) + "Z";

    var link = "https://www.google.com/calendar/render?action=TEMPLATE";
    link += "&text=" + encodeURIComponent(summary);
    link += "&dates=" + startUTC + "/" + endUTC;
    link += "&details=" + encodeURIComponent(description);
    link += "&location=" + encodeURIComponent(location);

    var linkTextarea = document.createElement("textarea");
    linkTextarea.readOnly = true;
    linkTextarea.className = "generated-link-textarea";
    linkTextarea.value = link;

    linkTextarea.addEventListener("click", function () {
        this.select();
        document.execCommand("copy");
        alert("Link copied to clipboard!");
    });

    document.getElementById("generated-link").innerHTML = "";
    document.getElementById("generated-link").appendChild(linkTextarea);
}
