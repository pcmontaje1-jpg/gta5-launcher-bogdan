document.addEventListener('DOMContentLoaded', () => {
  // Año dinámico en el footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Enlace de descarga (muestra aviso si aún es el placeholder)
  const downloadBtn = document.getElementById('download-btn');
  if (downloadBtn) {
    downloadBtn.addEventListener('click', (e) => {
      const href = downloadBtn.getAttribute('href');
      if (!href || href === 'TU_ENLACE_DE_DESCARGA' || href === '#') {
        e.preventDefault();
        alert('El enlace de descarga estará disponible muy pronto. ¡Gracias por tu paciencia!');
      }
    });
  }

  // Animación de aparición al hacer scroll
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
