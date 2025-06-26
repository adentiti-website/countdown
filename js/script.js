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

    setInterval(changeSlide, 2500); // ⏱ Switch every 2.5 seconds
  }

  // ❌ Dismiss the Training Alert Banner
  function dismissBanner() {
    const banner = document.getElementById("training-banner");
    if (banner) banner.style.display = "none";
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

  // 🔗 Basic Smooth Anchor Scrolling (no overlay)
  function enableSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  }

  // ✅ Page Ready Initialization
  document.addEventListener("DOMContentLoaded", () => {
    initHeroSlideshow();
    setupBackToTop();
    enableSmoothScrolling();
    console.log("✨ ADENTITI UI loaded clean.");
  });
</script>
