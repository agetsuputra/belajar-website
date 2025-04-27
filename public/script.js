// Header & Dropdown
const headerfix = document.querySelector(".headerfix");
const dropdown = document.querySelector(".dropdown");
const blurBackground = document.getElementById("blur");
let blurTimeout;

function updateBlur() {
  if (window.scrollY > 0) {
    if (!headerfix.matches(":hover") && !dropdown.matches(":hover")) {
      headerfix.classList.add("blur");
      dropdown.classList.add("blur");
    }
  } else {
    headerfix.classList.remove("blur");
    dropdown.classList.remove("blur");
  }
}

function activateBackground() {
  blurBackground.classList.add("active");
  blurBackground.style.opacity = "1";
}

function deactivateBackground() {
  blurBackground.style.opacity = "0";
  setTimeout(() => {
    blurBackground.classList.remove("active");
  }, 500); // sesuai durasi transition opacity 0.5s
}

window.addEventListener("scroll", updateBlur);

headerfix.addEventListener("mouseenter", () => {
  clearTimeout(blurTimeout);
  headerfix.classList.remove("blur");
  dropdown.classList.remove("blur");
  activateBackground();
});

headerfix.addEventListener("mouseleave", () => {
  if (window.scrollY > 0) {
    blurTimeout = setTimeout(() => {
      headerfix.classList.add("blur");
      dropdown.classList.add("blur");
      deactivateBackground();
    }, 500);
  } else {
    deactivateBackground();
  }
});

dropdown.addEventListener("mouseenter", () => {
  clearTimeout(blurTimeout);
  headerfix.classList.remove("blur");
  dropdown.classList.remove("blur");
  activateBackground();
});

dropdown.addEventListener("mouseleave", () => {
  if (window.scrollY > 0) {
    blurTimeout = setTimeout(() => {
      headerfix.classList.add("blur");
      dropdown.classList.add("blur");
      deactivateBackground();
    }, 200);
  } else {
    deactivateBackground();
  }
});

// Slideshow hero
let currentIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}

setInterval(() => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}, 5000);
