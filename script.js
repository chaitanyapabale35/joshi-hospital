// Mobile nav toggle
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
    navLinks.classList.remove("show");
  });
});

// Contact form alert
document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();
  alert("Thank you for contacting Joshi Hospital! We’ll reach you soon.");
  e.target.reset();
});

// Counter Animation
const counters = document.querySelectorAll('.counter');
let started = false;
const statsSection = document.querySelector('.stats');

function animateCounters() {
  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    const duration = 2000;
    const startTime = performance.now();

    function update(time) {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      counter.innerText = Math.floor(easedProgress * target);
      if (progress < 1) requestAnimationFrame(update);
      else counter.innerText = target;
    }

    requestAnimationFrame(update);
  });
}

window.addEventListener('scroll', () => {
  const sectionTop = statsSection.offsetTop - window.innerHeight + 100;
  if (!started && window.scrollY > sectionTop) {
    animateCounters();
    started = true;
  }
});
