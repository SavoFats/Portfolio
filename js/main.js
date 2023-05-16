
// Header Scroll
let nav = document.querySelector(".navbar");
window.onscroll = function () {
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("header-scrolled");
    }else{
        nav.classList.remove("header-scrolled");
    }
} 

// nav hide 
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})
 
const scancv = document.getElementById("scancv"); 
const qrcode = document.getElementById("qrcode"); 
const aboutme = document.getElementById("aboutme");

scancv.addEventListener("click", (event) => {
    event.preventDefault();

    if (scancv.dataset.type === "scan") {
        qrcode.style.display = "block"
        aboutme.style.display = "none"
        scancv.dataset.type = "sudime"
        scancv.innerText = "Su di me"
    } else if (scancv.dataset.type === "sudime") {
        qrcode.style.display = "none"
        aboutme.style.display = "block"
        scancv.dataset.type = "scan"
        scancv.innerText = "Scannerizza CV"
    }
})

