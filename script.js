document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default anchor link behavior

            const targetId = this.getAttribute('href'); // Get the target ID (e.g., '#news')
            const targetElement = document.querySelector(targetId); // Find the target section

            if (targetElement) {
                // Scroll to the target element smoothly
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start' // Aligns the top of the element to the top of the viewport
                });
            }
        });
    });
});
