document.addEventListener('DOMContentLoaded', () => {
    const hamburgerButton = document.querySelector('.hamburger-button');
    const hamburguerMenu = document.querySelector('.hamburguer_menu');

    hamburgerButton.addEventListener('click', () => {
        hamburgerButton.classList.toggle('active');
        hamburguerMenu.classList.toggle('active');
    });

    // Opcional: Cerrar el menú si se hace clic fuera de él
    document.addEventListener('click', (event) => {
        if (!hamburguerMenu.contains(event.target) && !hamburgerButton.contains(event.target) && hamburguerMenu.classList.contains('active')) {
            hamburgerButton.classList.remove('active');
            hamburguerMenu.classList.remove('active');
        }
    });

    // Opcional: Cerrar el menú cuando se hace clic en un enlace del menú
    hamburguerMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburgerButton.classList.remove('active');
            hamburguerMenu.classList.remove('active');
        });
    });
});