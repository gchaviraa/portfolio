const observerOptions = {
  threshold: 0.15,
};

const revealElements = document.querySelectorAll('.fade-in');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

revealElements.forEach((element) => revealObserver.observe(element));

const form = document.getElementById('contact-form');
const formNote = document.getElementById('form-note');

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    formNote.textContent = 'Thanks, I’ll get back to you soon!';
    form.reset();
  });
}

const navLinks = document.querySelectorAll('.site-nav a');
navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId = link.getAttribute('href').slice(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});