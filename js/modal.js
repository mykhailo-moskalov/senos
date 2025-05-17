(() => {
  const modal = document.querySelector('[data-modal]');
  const modalBgOverlay = document.querySelector('[data-modal-bg]');
  document
    .querySelectorAll(
      '[data-modal-open], [data-modal-close], [data-modal-bg-open], [data-modal-bg-close]'
    )
    .forEach(btn => {
      btn.addEventListener('click', toggleModal);
    });
  modalBgOverlay?.addEventListener('click', toggleModal);
  function toggleModal() {
    modal.classList.toggle('is-open');
    modalBgOverlay?.classList.toggle('is-open');
  }
})();
