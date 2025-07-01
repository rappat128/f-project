
const Burger = document.querySelector('.burger')
const Burgericon = document.querySelector('.burger i')
const dropdown = document.querySelector('.dropdown-manu')

Burger.onclick = function (e) {
    e.stopPropagation(); 
    dropdown.classList.toggle('open');
};

document.addEventListener('click',function (e) {
    const isClickInside = dropdown.contains(e.target) || Burger.contains(e.target);
    if (!isClickInside) {
        dropdown.classList.remove('open');
        }
    
});
// ____________________________________________________

document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.getElementById("navbar");

   window.addEventListener("scroll", handleScroll);

    function handleScroll() {
        const isScrolled = window.scrollY > 210;
        navbar.classList.toggle("show", isScrolled);
    }
});