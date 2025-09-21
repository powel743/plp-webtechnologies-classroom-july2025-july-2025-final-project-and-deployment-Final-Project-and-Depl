// script.js - navigation toggle, form validation, simple scroll reveal
document.addEventListener('DOMContentLoaded', () => {
  // mobile nav toggle (works for multiple pages)
  document.querySelectorAll('.nav-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      // find the nearby nav controlled by this button (aria-controls id must match)
      const controls = btn.getAttribute('aria-controls');
      const nav = controls ? document.getElementById(controls) : btn.nextElementSibling;
      if (!nav) return;
      const isOpen = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  });

  // Form validation with inline feedback
  const form = document.getElementById('contact-form');
  if (form) {
    const feedback = document.getElementById('form-feedback');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();
      if (!name || !email || !email.includes('@') || !message) {
        feedback.textContent = 'Please fill in all fields and provide a valid email.';
        feedback.style.color = '#9f3a38';
        return;
      }
      // simulate successful send (replace this with real backend when available)
      feedback.textContent = 'Thanks your message has been recorded (demo).';
      feedback.style.color = '#155724';
      form.reset();
    });
  }

  // Simple scroll reveal using IntersectionObserver
  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
});
