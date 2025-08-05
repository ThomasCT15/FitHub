    // Animación hamburguesa a X y menú deslizante
    const menuToggle = document.getElementById('menu-toggle');
    const menuIcon = document.querySelector('.menu-icon');
    const menu = document.querySelector('.menu');

    menuToggle.addEventListener('change', function() {
      if (this.checked) {
        menuIcon.classList.add('open');
        menu.classList.add('slide-in');
      } else {
        menuIcon.classList.remove('open');
        menu.classList.remove('slide-in');
      }
    });
  // function closeMenu() {
  //   // Cambia el estado del checkbox a desmarcado
  //   document.getElementById("menu-toggle").checked = false;
  // }