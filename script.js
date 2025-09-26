// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
  
  // Example: Handle navigation links
  const navLinks = document.querySelectorAll('.dashboard-nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      showSection(targetId);
    });
  });

  // Function to show a specific section
  function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(sec => {
      if (sec.id === sectionId) {
        sec.style.display = 'block';
      } else {
        sec.style.display = 'none';
      }
    });
  }

  // Example: Handle "Get Started" button if exists
  const getStartedBtn = document.querySelector('#getStartedBtn');
  if (getStartedBtn) {
    getStartedBtn.addEventListener('click', () => {
      // For example, scroll to categories or show a specific section
      // Or trigger some intro animation
      alert('Welcome! Explore the categories to get started.');
      // Optionally, navigate to categories section
      showSection('categories-section');
    });
  }

  // Initialize: hide all sections except default
  // For example, hide all except intro
  // Assuming you have sections with IDs like 'intro', 'categories', 'profile', etc.
  // You can set their display styles accordingly here
  
  // Example: Hide all sections initially
  document.querySelectorAll('.section').forEach(sec => {
    sec.style.display = 'none';
  });
  
  // Show the intro or get-started section by default
  // For example:
  // document.getElementById('intro').style.display = 'block';

});
document.addEventListener("DOMContentLoaded", () => {
  // Handle sidebar navigation smooth scroll
  const links = document.querySelectorAll('.sidebar a');

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1); // remove '#'
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Buttons actions
  const createAccountBtn = document.querySelector('.content #create-account .btn');
  if (createAccountBtn) {
    createAccountBtn.addEventListener('click', () => {
      alert('Create your account to get started! (Feature coming soon)');
    });
  }

  // Sign Up button
  const signUpBtn = document.querySelector('.content button.btn');
  if (signUpBtn) {
    signUpBtn.addEventListener('click', () => {
      alert('Account creation feature coming soon!');
    });
  }

  // Additional interactivity can be added here
});
document.addEventListener("DOMContentLoaded", () => {
  // Handle sidebar smooth scroll
  const links = document.querySelectorAll('.sidebar a');
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Button alerts
  const createAccountBtn = document.querySelector('.content #create-account .btn');
  if (createAccountBtn) {
    createAccountBtn.addEventListener('click', () => {
      alert('Please fill the registration form below.');
    });
  }

  const signUpBtn = document.querySelector('.content button.btn');
  if (signUpBtn && signUpBtn.parentElement.id !== 'create-account') {
    signUpBtn.addEventListener('click', () => {
      alert('Account creation feature coming soon!');
    });
  }

  // Handle form submission
  const form = document.getElementById('registerForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault(); // prevent actual form submission

      // Validate form inputs
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value;

      const messageDiv = document.getElementById('formMessage');

      if (name && email && password.length >= 6) {
        // You can send data to server here using fetch/AJAX
        // For demo, we'll just show success message
        messageDiv.style.color = 'green';
        messageDiv.innerText = `Thank you, ${name}! Your account has been created.`;
        form.reset();
      } else {
        messageDiv.style.color = 'red';
        messageDiv.innerText = 'Please fill all fields correctly (Password min 6 characters).';
      }
    });
  }
});