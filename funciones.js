
document.addEventListener('DOMContentLoaded', function() {
    var menuButton = document.getElementById('menuButton');
    var subMenu = document.getElementById('sub-menu');

    menuButton.addEventListener('click', function() {
        if (subMenu.classList.contains('show')) {
            subMenu.classList.remove('show');
        } else {
            subMenu.classList.add('show');
        }
    });
});