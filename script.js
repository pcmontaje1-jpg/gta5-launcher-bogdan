document.addEventListener('DOMContentLoaded', () => {
  // Año dinámico en el footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // --- Логика кнопки скачивания ---
  const downloadBtn = document.getElementById('download-btn');
  
  // Создаем красивое модальное окно программно (чтобы не засорять HTML)
  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.innerHTML = `
    <div class="modal-box">
      <h3>Muy pronto</h3>
      <p>El enlace de descarga estará disponible muy pronto. ¡Gracias por tu paciencia!</p>
      <button class="btn btn-primary" id="close-modal">ENTENDIDO</button>
    </div>
  `;
  document.body.appendChild(modal);

  const closeModalBtn = document.getElementById('close-modal');

  const closeModal = () => modal.classList.remove('active');
  closeModalBtn.addEventListener('click', closeModal);
  
  // Закрытие при клике мимо окна
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  // Проверка ссылки перед переходом
  if (downloadBtn) {
    downloadBtn.addEventListener('click', (e) => {
      const href = downloadBtn.getAttribute('href');
      // Если ссылка не изменена — блокируем переход и показываем окно
      if (!href || href === 'TU_ENLACE_DE_DESCARGA' || href === '#') {
        e.preventDefault();
        modal.classList.add('active');
      }
      // Если ссылка реальная — браузер сам откроет её в новой вкладке (target="_blank")
    });
  }

  // Анимация появления при скролле
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
