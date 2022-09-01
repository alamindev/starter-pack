window.onclick = function (e) {
  if (e.target.matches(".mobile-overlay")) {
    let overlay = document.querySelector(".mobile-overlay");
    let navbar = document.querySelector("#navbar");
    if (overlay.classList.contains("block")) {
      overlay.classList.add("d-none");
    }
    if (navbar.classList.contains("active")) {
      navbar.classList.remove("active");
    }
  }
};

// mobile nav
let burger = document.querySelector("#burger");
let navbar = document.querySelector("#navbar");
let overlay = document.querySelector(".mobile-overlay");
let cross = document.querySelector("#cross");
burger.addEventListener("click", () => {
  if (overlay.classList.contains("d-none")) {
    overlay.classList.remove("d-none");
    overlay.classList.add("block");
  } else {
    overlay.classList.add("d-none");
    overlay.classList.remove("block");
  }
  if (navbar.classList.contains("active")) {
    navbar.classList.remove("active");
  } else {
    navbar.classList.add("active");
  }
});
 


new Swiper(".plans", {
  loop: true,
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
  slidesPerView: 2.1, 
  breakpoints: { 
    600: {
      slidesPerView: 2.5, 
    },
    992: {
      slidesPerView: 3,
    },
    1400: {
      slidesPerView: 4, 
    },
  },
});

new Swiper(".products .swiper", {
  loop: true,
  navigation: {
    nextEl: ".product-next",
    prevEl: ".product-prev",
  },
  slidesPerView: 2.1,
  breakpoints: {
    600: {
      slidesPerView: 2.5,
    },
    992: {
      slidesPerView: 3,
    },
    1400: {
      slidesPerView: 4,
    },
  },
});