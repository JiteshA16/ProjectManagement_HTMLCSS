
function toggleMenu() {
    var menuState = document.getElementsByClassName('menu-block')[0];
    if (menuState.style.display == 'none') {
        menuState.style.display = '';
    } else {
        menuState.style.display = 'none';
    }
}