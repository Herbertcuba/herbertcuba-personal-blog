// Native modal behavior stays independent of the shared article search engine.
const dialog = document.querySelector('#article-search');
const trigger = document.querySelector('[data-search-open]');
if (dialog && trigger) {
  const input = dialog.querySelector('[data-search-query]');
  const close = () => dialog.close();
  trigger.addEventListener('click', () => {
    dialog.showModal();
    document.documentElement.classList.add('menu-search-open');
    input.focus();
  });
  dialog.querySelector('[data-search-close]').addEventListener('click', close);
  // Capture before type=search's native Escape-to-clear behavior.
  dialog.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      event.stopPropagation();
      close();
    }
  }, true);
  dialog.addEventListener('close', () => {
    document.documentElement.classList.remove('menu-search-open');
    trigger.focus();
  });
  dialog.addEventListener('click', (event) => {
    if (event.target !== dialog) return;
    const box = dialog.getBoundingClientRect();
    if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) close();
  });
}
