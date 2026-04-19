const menuBtn = document.querySelector(".menu-btn");
const mainNav = document.querySelector(".main-nav");
const yearEl = document.querySelector("#year");
const heroSlide = document.querySelector("#heroSlide");
const heroSlideImg = document.querySelector("#heroSlideImg");
const mottoLeft = document.querySelector("#mottoLeft");
const mottoRight = document.querySelector("#mottoRight");

if (menuBtn && mainNav) {
  menuBtn.addEventListener("click", () => {
    mainNav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(mainNav.classList.contains("open")));
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
    });
  });
}

if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}

if (heroSlide && heroSlideImg && mottoLeft && mottoRight) {
  const slides = [
    {
      src: "./slide-1.jpg",
      left: "Learning Today, Leading Tomorrow",
      right: "Every Child Can Achieve Excellence",
    },
    {
      src: "./slide-2.jpg",
      left: "Discipline Builds Strong Character",
      right: "Care, Respect, And Responsibility",
    },
    {
      src: "./slide-3.jpg",
      left: "Knowledge With Confidence",
      right: "Inspiring Students To Do Their Best",
    },
    {
      src: "./slide-4.jpg",
      left: "Recognizing Effort And Talent",
      right: "Success Through Dedication",
    },
    {
      src: "./slide-5.jpg",
      left: "Together We Build A Bright Future",
      right: "A School Family That Grows Together",
    },
    {
      src: "./slide-6.jpg",
      left: "Unity, Integrity, And Service",
      right: "Nurturing Dreams Into Achievement",
    },
  ];

  let current = 0;
  heroSlideImg.src = slides[current].src;
  heroSlide.style.setProperty("--hero-bg", `url("${slides[current].src}")`);
  mottoLeft.textContent = slides[current].left;
  mottoRight.textContent = slides[current].right;

  setInterval(() => {
    current = (current + 1) % slides.length;
    heroSlideImg.src = slides[current].src;
    heroSlide.style.setProperty("--hero-bg", `url("${slides[current].src}")`);
    mottoLeft.textContent = slides[current].left;
    mottoRight.textContent = slides[current].right;
  }, 3000);
}
