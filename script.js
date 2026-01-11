document.addEventListener('DOMContentLoaded', () => {
  // ===== Navigation Toggle =====
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // ===== Smooth Scroll =====
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const headerOffset = 80;
        const offsetPosition = target.offsetTop - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
      // Close menu after clicking link
      navLinks.classList.remove('active');
    });
  });

  // ===== Project Buttons Alerts =====
  const projectButtons = document.querySelectorAll('#projects .btn');
  projectButtons.forEach((btn, index) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (index === 0) {
        alert('E-Commerce Website project coming soon!');
      } else if (index === 1) {
        alert('Task Manager App project coming soon!');
      } else {
        alert('Project coming soon!');
      }
    });
  });

  // ===== Skill Tags Alerts =====
  const skillTags = document.querySelectorAll('.skill-tag');
  skillTags.forEach(tag => {
    tag.addEventListener('click', () => {
      alert(`You clicked on skill: ${tag.textContent}`);
    });
  });

  // ===== Contact Form Alert =====
  const contactForm = document.getElementById('contactForm');
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
  });
});
