$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    center: true,
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });
});

// Go top of the webpage button
let mybutton = document.getElementById("myBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//Burger Menu
const burgerMenuButton = document.querySelector("#burger-menu-button");
const offcanvasDarkNavbar = document.querySelector("#offcanvasDarkNavbar");
const bsOffCanvas = new bootstrap.Offcanvas(offcanvasDarkNavbar);

burgerMenuButton.addEventListener("click", function (click) {
  click.preventDefault();
  click.stopPropagation();
  bsOffCanvas.toggle();
});

// Closing the offCanvas

function toggleOffCanvas(click) {
  bsOffCanvas.toggle();
}

const navLinks = document.querySelectorAll(".nav-link");

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", toggleOffCanvas);
}

//Gsap- Scroll Trigger

gsap.registerPlugin(ScrollTrigger);

gsap.to("#location-info", {
  scrollTrigger: {
    // markers: true,
    trigger: "#location-info",
    start: "top 88%",
    end: "top center",
    scrub: true,
  },
  x: 0,
  opacity: 1,
  ease: "none",
  duration: 1,
});

gsap.to("#google-map", {
  scrollTrigger: {
    // markers: true,
    trigger: "#location-info",
    start: "top center",
    end: "top 30%",
    scrub: true,
  },
  x: 0,
  opacity: 1,
  ease: "none",
  duration: 1,
});

// Products carousel sync
$(".carousel-sync").on("slide.bs.carousel", function (ev) {
  var dir = ev.direction == "right" ? "prev" : "next";
  $(".carousel-sync").not(".sliding").addClass("sliding").carousel(dir);
});
$(".carousel-sync").on("slid.bs.carousel", function (ev) {
  $(".carousel-sync").removeClass("sliding");
});
