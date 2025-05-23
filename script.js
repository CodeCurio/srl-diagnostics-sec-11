
// Get the menu icon and navbar elements
const menuIcon = document.getElementById('menu-icon');
const navright = document.getElementById('navright');

// Add event listener to the menu icon
menuIcon.addEventListener('click', () => {
    navright.classList.toggle('active'); // Toggle the 'active' class
});

// Add this to your script.js file
document.addEventListener('DOMContentLoaded', function() {
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    
    // Initially hide all answers
    answer.style.display = 'none';
    
    question.addEventListener('click', () => {
      // Toggle the answer visibility
      const isOpen = answer.style.display === 'block';
      
      // Close all other answers
      document.querySelectorAll('.faq-answer').forEach(ans => {
        ans.style.display = 'none';
      });
      
      document.querySelectorAll('.faq-question i').forEach(icon => {
        icon.className = 'ri-arrow-down-s-line';
      });
      
      // Open the clicked one if it was closed
      if (!isOpen) {
        answer.style.display = 'block';
        item.querySelector('.faq-question i').className = 'ri-arrow-up-s-line';
      }
    });
  });
});
