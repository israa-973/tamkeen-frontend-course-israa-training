const root = document.documentElement;
const themeBtn = document.getElementById('theme-toggle');
const themeIcon = themeBtn.querySelector('i');

function renderThemeIcon() {
  const dark = root.dataset.theme === 'dark';
  themeIcon.className = dark ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
  themeBtn.setAttribute('aria-pressed', dark);
}

themeBtn.addEventListener('click', () => {
  const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
  root.dataset.theme = next;
  localStorage.setItem('theme', next);
  renderThemeIcon();
});

renderThemeIcon();