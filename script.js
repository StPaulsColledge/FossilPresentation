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

const dropdownButtons = document.querySelectorAll('.dropdown-button');

dropdownButtons.forEach(button => {
    button.addEventListener('click', function() {
        const dropdownContent = this.nextElementSibling;

        // Toggle the display of the dropdown content
        if (dropdownContent.style.display === 'block') {
            dropdownContent.style.display = 'none';
        } else {
            dropdownContent.style.display = 'block';
        }
    });
});
