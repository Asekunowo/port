// Responsive Navigation Menu Toggle
const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Alert for Portfolio Buttons
const portfolioButtons = document.querySelectorAll('.portfolio__card .btn');
portfolioButtons.forEach((button) => {
  button.addEventListener('click', () => {
    alert('Redirecting to the portfolio section...');
  });
});

// Scroll Reveal Animations
ScrollReveal().reveal('.header', {
  duration: 1000,
  origin: 'top',
  distance: '50px',
});

ScrollReveal().reveal('.section__header', {
  duration: 1200,
  origin: 'bottom',
  distance: '30px',
  delay: 300,
});

ScrollReveal().reveal('.section__description', {
  duration: 1500,
  origin: 'left',
  distance: '50px',
  delay: 500,
});

ScrollReveal().reveal('.portfolio__grid .portfolio__card, .services__grid .service__card', {
  duration: 1500,
  origin: 'bottom',
  distance: '30px',
  interval: 200,
});

ScrollReveal().reveal('.gallery__grid img', {
  duration: 1000,
  origin: 'bottom',
  distance: '20px',
  interval: 100,
});

ScrollReveal().reveal('.footer__container, .footer__bar', {
  duration: 1000,
  origin: 'top',
  distance: '30px',
});

/*// JavaScript to enhance the portfolio site

document.addEventListener("DOMContentLoaded", () => {
    // Variables
    const navToggle = document.querySelector(".nav-toggle");
    const navMenu = document.querySelector("nav ul");
    const backToTopButton = document.createElement("button");
  
    // Create Back-to-Top button
    backToTopButton.textContent = "↑";
    backToTopButton.classList.add("back-to-top");
    document.body.appendChild(backToTopButton);
  
    // Toggle Navigation Menu
    navToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
      navToggle.classList.toggle("active");
    });
  
    // Smooth Scrolling
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  
    // Back-to-Top Button Visibility
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        backToTopButton.classList.add("visible");
      } else {
        backToTopButton.classList.remove("visible");
      }
    });
  
    // Back-to-Top Button Functionality
    backToTopButton.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });



const menuBtn =document.getElementById("menu-btn");
const navLinks =document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("1");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
 menuBtnIcon.setAttribute("class", isOpen?"ri-close-line":"ri-menu-line")
});

navLinks.addEventListener("click", (e) => {
   navLinks.classList.remove("open");
   menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

scrollReveal().reveal(".about__container .section__header",{
    ...scrollRevealOption,
});
scrollReveal().reveal(".about__container .section__description",{
    ...scrollRevealOption,
    delay:500,
    interval: 500,
});
scrollReveal().reveal(".about__container img",{
    ...scrollRevealOption,
    delay: 1500,

});

ScrollReveal().reveal(".service__container  .service__header", {
    ...scrollRevealOption,
});

ScrollReveal().reveal(".service__container  .service__description", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".service__card", {
    duration: 1000,ss
    delay: 1000,
    interval: 500,
});*/