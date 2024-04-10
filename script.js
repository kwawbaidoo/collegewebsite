const navLinks = document.querySelectorAll(".nav_link");
const list = document.querySelectorAll(".navigation-list");
const pathname = window.location.pathname;
console.log(pathname);
console.log(navLinks);

const loading = document.getElementById("loading");
const toggle = document.getElementById("toggleSection");
const onLoadClick = loadPage();

navLinks.forEach((nav) => {
  if (nav.href.includes(pathname)) {
    nav.classList.add("active");
  }
});


function click(){
    navLinks.forEach((nav)=>{
        nav.add(setAttribute("onClick", "onLoadClick"));
    })
}

function loadPage() {
//   toggle.style.display = "none";
  setInterval(  toggle.style.display = "none"
  , 5000);
  toggle.style.display = "block";
}
