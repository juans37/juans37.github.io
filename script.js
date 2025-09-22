// Smooth scrolling for navigation links
document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({
      behavior: "smooth",
    });
    // Close mobile menu after clicking a link
    document.querySelector("nav ul").classList.remove("show");
  });
});

// Hamburger menu toggle
document.querySelector(".hamburger").addEventListener("click", function () {
  document.querySelector("nav ul").classList.toggle("show");
});

// Contact form submission
document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const message = this.querySelector("textarea").value;

    // Basic validation
    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    // Here you would typically send the data to a server
    // For now, just show a success message
    alert("Thank you for your message! I will get back to you soon.");

    // Clear the form
    this.reset();
  });

// Add some gaming-inspired animations
function addGlowEffect() {
  const projects = document.querySelectorAll(".project");
  projects.forEach((project) => {
    project.addEventListener("mouseenter", () => {
      project.style.boxShadow = "0 0 20px #00ff88";
    });
    project.addEventListener("mouseleave", () => {
      project.style.boxShadow = "0 4px 8px rgba(0, 255, 136, 0.1)";
    });
  });
}

// Initialize animations
document.addEventListener("DOMContentLoaded", function () {
  addGlowEffect();

  // Add typing effect to hero text
  const heroText = document.querySelector("#hero p");
  const text = heroText.textContent;
  heroText.textContent = "";
  let i = 0;
  const timer = setInterval(() => {
    if (i < text.length) {
      heroText.textContent += text.charAt(i);
      i++;
    } else {
      clearInterval(timer);
    }
  }, 50);
});
