

const images = document.querySelectorAll("#slider img");
let current = 0;

function next() {
  images[current].style.display = "none";
  current = (current + 1) % images.length;
  images[current].style.display = "block";
}

setInterval(next, 1500)