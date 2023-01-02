let header = document.querySelector(".header");
let btn = document.querySelector(".btn");

btn.onclick = function() {
    header.classList.toggle("active");
}

let second = document.querySelector(".second");

second.onclick = function () {
    header.classList.toggle("active");
}

