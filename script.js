
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            // Toggle the 'active' class on the menu to show/hide it
            navMenu.classList.toggle('active');

            // Toggle the 'active' class on the hamburger icon for animation
            navToggle.classList.toggle('active');
        });
    }
});