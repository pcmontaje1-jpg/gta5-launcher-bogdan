document.addEventListener('DOMContentLoaded', () => {
  // Динамический год в футере
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Плавное появление элементов при скролле
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.step, .download-card, .section-title, .section-subtitle')
    .forEach((el) => {
      el.classList.add('reveal');
      observer.observe(el);
    });
});
