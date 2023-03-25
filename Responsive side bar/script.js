const menu = document.getElementById('menu-icon');
const list = document.querySelector('.header-list');

menu.addEventListener('click', () => {
    menu.classList.toggle('active');
    list.classList.toggle('active');
    // menu.classList.toggle('bx-x');
})





// function menuClicked() {
//     list.classList.add('active');
//     list.classList.add('bx-x');
// }