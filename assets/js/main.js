// =============================================
//        JAVASCRIPT
//        Funcionalidades:
//        1. Toggle de tema oscuro/claro con persistencia en localStorage
//        2. Año dinámico en el footer
// =============================================

/* ------------------------------------------
    1. TEMA: OSCURO / CLARO
    Lee la preferencia guardada en localStorage.
    Si no existe, usa la preferencia del sistema.
    Persiste la elección del usuario entre visitas.
------------------------------------------ */
const html = document.documentElement;
const themeToggle = document.getElementById('theme-toggle');

/**
 * Aplica el tema al documento y guarda la preferencia.
 * @param {'light'|'dark'} theme
 */
function applyTheme(theme) {
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

/**
 * Lee la preferencia guardada o detecta la del sistema.
 * @returns {'light'|'dark'}
 */
function getInitialTheme() {
    const saved = localStorage.getItem('theme');
    if (saved === 'light' || saved === 'dark') return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

/* Aplica el tema al cargar la página */
applyTheme(getInitialTheme());

/* Alterna el tema al hacer clic en el botón */
themeToggle.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    applyTheme(current === 'dark' ? 'light' : 'dark');
});


/* ------------------------------------------
    2. AÑO DINÁMICO EN EL FOOTER
    Evita tener que actualizar el año manualmente.
------------------------------------------ */
const yearEl = document.getElementById('footer-year');
if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}
