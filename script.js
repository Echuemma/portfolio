function toggleMenu() {
    var menu = document.querySelector('.menu');
    var menuToggle = document.querySelector('.menu-toggle');
    var closeIcon = document.querySelector('.close-icon');

    menu.classList.toggle('active');
    menuToggle.style.display = menu.classList.contains('active') ? 'none' : 'block';
    closeIcon.style.display = menu.classList.contains('active') ? 'block' : 'none';
}