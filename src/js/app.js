document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".main-nav a");
  const sections = document.querySelectorAll("article");
  const menuButton = document.querySelector(".header__menu");
  const mainNav = document.querySelector(".main-nav-wrapper");
  const images = document.querySelectorAll("img");

  images.forEach((image) => {
    image.classList.add("active");
  });

  // Smooth scrolling
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      // Remove active class from menu and navigation
      menuButton.classList.remove("active");
      mainNav.classList.remove("active");
    });
  });

  // Active navigation item on scroll
  const options = {
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const targetId = entry.target.id;
      const navLink = document.querySelector(
        `.main-nav a[href="#${targetId}"]`
      );

      if (entry.isIntersecting) {
        // Add active class
        navLinks.forEach((link) => link.classList.remove("active"));
        if (navLink) navLink.classList.add("active");
      }
    });
  }, options);

  sections.forEach((section) => observer.observe(section));

  // Toggle menu active class
  menuButton &&
    menuButton.addEventListener("click", () => {
      menuButton.classList.toggle("active");
      mainNav.classList.toggle("active");
    });
});
