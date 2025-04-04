// Open the form with animation
function openForm() {
    document.getElementById("form-container").style.display = "block";
}

// Handle form submission
document.getElementById("action-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page reload

    // Hide form and show thank-you message
    document.getElementById("form-container").style.display = "none";
    document.getElementById("thank-you").style.display = "block";
});