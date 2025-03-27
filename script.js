function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

window.onscroll = function () {
    let backToTopButton = document.getElementById("backToTop");
    if (document.documentElement.scrollTop > 200) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
// Get the dropdown button and the dropdown content
var dropdown = document.querySelector('.dropdown');

// Toggle dropdown visibility when button is clicked
dropdown.querySelector('.dropdown-button').addEventListener('click', function() {
  // Toggle the 'open' class to show or hide the dropdown
  dropdown.classList.toggle('open');
});

// Close the dropdown if the user clicks outside of it
window.addEventListener('click', function(event) {
  if (!dropdown.contains(event.target)) {
    dropdown.classList.remove('open');
  }
});
