const menuBtn = document.getElementById('menuBtn');
const navLinks = document.querySelector('.nav-links');

if(menuBtn){
    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}