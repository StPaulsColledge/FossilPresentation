document.addEventListener("DOMContentLoaded", function() {
    // Example of a timeline interaction
    const timelineDiv = document.getElementById("timeline");

    // Simple content example
    timelineDiv.innerHTML = "<p>Click below to learn about fossils:</p><button onclick='showFossilInfo()'>Click to reveal Fossil Information</button>";
});

function showFossilInfo() {
    const timelineDiv = document.getElementById("timeline");
    timelineDiv.innerHTML = "<p>Fossil 1: 65 million years ago, the T. rex roamed!</p>";
}
