const toggle = document.getElementById('darkModeToggle');
const body = document.querySelector('body');
const toggleLabel = document.getElementById('toggleLabel');


const saved = localStorage.getItem('theme') || 'light';
body.setAttribute('data-bs-theme', saved);

if (saved === 'dark') {
    toggle.checked = true;
} else {
    toggle.checked = false;
}

toggle.addEventListener('change', function () {
    const theme = toggle.checked ? 'dark' : 'light';
    body.setAttribute('data-bs-theme', theme);
    localStorage.setItem('theme', theme);
});










