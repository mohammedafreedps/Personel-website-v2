const menuButton = document.querySelector('.menu-btn');
const menuBar = document.querySelector('.menu-bar');


menuButton.addEventListener('click', () => {
    menuBar.classList.toggle('active');
});


document.addEventListener('click', (event) => {
    const target = event.target;
    if (!menuBar.contains(target) && target !== menuButton) {
        menuBar.classList.remove('active');
    }
});
