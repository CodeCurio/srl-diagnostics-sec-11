
// Get the menu icon and navbar elements
const menuIcon = document.getElementById('menu-icon');
const navright = document.getElementById('navright');

// Add event listener to the menu icon
menuIcon.addEventListener('click', () => {
    navright.classList.toggle('active'); // Toggle the 'active' class
});
