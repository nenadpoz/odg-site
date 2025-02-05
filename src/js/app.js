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
  let swiperInstance1;
  let swiperInstance2;
  let swiperInstance3;
  const initSwiper1 = () => {
    swiperInstance1 = new Swiper(".swiper-1", {
      direction: "horizontal",
      slidesPerView: 1,
      speed: 10,
      autoplay: {
        delay: 2000,
      },
      effect: "fade",
      loop: true,
    });
  };
  const initSwiper2 = () => {
    swiperInstance2 = new Swiper(".swiper-2", {
      direction: "horizontal",
      slidesPerView: 1,
      speed: 10,
      autoplay: {
        delay: 3000,
      },
      effect: "fade",
      loop: true,
    });
  };
  const initSwiper3 = () => {
    swiperInstance3 = new Swiper(".swiper-3", {
      direction: "horizontal",
      slidesPerView: 1,
      speed: 10,
      autoplay: {
        delay: 4000,
      },
      effect: "fade",
      loop: true,
    });
  };
  function handleSwiper() {
    if (window.innerWidth < 768) {
      if (swiperInstance1) {
        swiperInstance1.destroy(true, true);
        swiperInstance1 = null;
      }
      if (swiperInstance2) {
        swiperInstance2.destroy(true, true);
        swiperInstance2 = null;
      }
      if (swiperInstance3) {
        swiperInstance3.destroy(true, true);
        swiperInstance3 = null;
      }
    } else {
      if (!swiperInstance1) {
        initSwiper1();
      }
      if (!swiperInstance2) {
        initSwiper2();
      }
      if (!swiperInstance3) {
        initSwiper3();
      }
    }
  }

  // Initialize Swiper on load if screen width is large
  if (window.innerWidth >= 768) {
    initSwiper1();
    initSwiper2();
    initSwiper3();
  }

  // Listen for window resize
  window.addEventListener("resize", handleSwiper);
});
