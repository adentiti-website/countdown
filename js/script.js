<script>
  // 🚀 Initialize Hero Slideshow with Auto-Rotation
  function initHeroSlideshow() {
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    if (slides.length === 0) return;

    function changeSlide() {
      slides[currentSlide].classList.remove("active");
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add("active");
    }

    setInterval(changeSlide, 1000); // 🔄 Switch every 2.5 seconds
  }

  // ❌ Dismiss the Training Alert Banner
  function dismissBanner() {
    const banner = document.getElementById("training-banner");
    if (banner) banner.style.display = "none";
  }

  // 🎯 Animate Sections as They Enter the Viewport
  function handleSectionVisibility() {
    const sections = document.querySelectorAll("[data-transition]");
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, { threshold: 0.2 });

    sections.forEach(section => observer.observe(section));
  }

  // ⬆️ Back to Top Button Logic
  function setupBackToTop() {
    const backToTopButton = document.getElementById("back-to-top");
    if (!backToTopButton) return;

    window.addEventListener("scroll", () => {
      backToTopButton.classList.toggle("visible", window.scrollY > 300);
    });

    backToTopButton.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // 🔗 Smooth Anchor Scrolling with Overlay Transition
  function enableSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        const overlay = document.getElementById("transition-overlay");

        if (overlay) overlay.classList.add("active");

        setTimeout(() => {
          if (overlay) overlay.classList.remove("active");
          if (target) target.scrollIntoView({ behavior: "smooth" });
        }, 600);
      });
    });
  }

  // 🎬 Page Ready Initialization
  document.addEventListener("DOMContentLoaded", () => {
    initHeroSlideshow();
    handleSectionVisibility();
    setupBackToTop();
    enableSmoothScrolling();

    document.body.classList.add("loaded");
    console.log("✨ ADENTITI UI initialized. Stay secure, stay ahead.");
  });
</script>
