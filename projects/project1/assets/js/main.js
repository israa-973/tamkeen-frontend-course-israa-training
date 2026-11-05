
// dark mode
const toggle = document.getElementById('darkModeToggleNav');
const body = document.body;

const saved = localStorage.getItem('theme') || 'light';
body.dataset.bsTheme = saved;

toggle.checked = saved === 'dark';

toggle.addEventListener('change', () => {
    const theme = toggle.checked ? 'dark' : 'light';
    body.setAttribute('data-bs-theme', theme);
    localStorage.setItem('theme', theme);
});