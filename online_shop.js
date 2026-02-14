const mobileMenu = document.getElementById('mobile-menu');
const navBar = document.getElementById('navbar');
const closeBtn = document.getElementById('close');

//toggle navbar when harmburger menu is clicked
mobileMenu.addEventListener('click', () =>{
    navBar.classList.toggle('active');
});

//close navbar when a link is clicked
navBar.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navBar.classList.remove('active');
    });
});

//close navbar when close button is clicked
closeBtn.addEventListener('click', () => {
    console.log("Close button clicked!")
    navBar.classList.remove('active');
});