const navLinks = document.querySelectorAll(".nav_link");
const pathname = window.location.pathname;
console.log(pathname);

navLinks.forEach(nav =>{
    if(nav.href.includes(pathname)) {
        nav.classList.add("active");
    }
});