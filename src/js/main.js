"use strict"

//element
let openButton = document.getElementById("open-menu");
let closeButton = document.getElementById("close-menu");

//eventlyssnare
openButton.addEventListener("click", toggleMenu);
closeButton.addEventListener("click", toggleMenu);

function toggleMenu(){
    let navMenuEl = document.getElementById("nav-menu");

    let style = window.getComputedStyle(navMenuEl);

    if(style.display === "none") {
        navMenuEl.style.display = "block";
    } else {
        navMenuEl.style.display = "none";
    }
}