<script>
  // 🚀 Hero Slideshow
  function initHeroSlideshow() {
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    if (!slides.length) return;

    setInterval(() => {
      slides[currentSlide].classList.remove("active");
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add("active");
    }, 2500); // 2.5s switch
  }

  // ⬆️ Back to Top Button
  function setupBackToTop() {
    const btn = document.getElementById("back-to-top");
    if (!btn) return;

    window.addEventListener("scroll", () => {
      btn.classList.toggle("visible", window.scrollY > 300);
    });

    btn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // 🔗 Smooth Scrolling (anchors)
  function enableSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function (e) {
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  }

  // ✅ Init on Page Load
  document.addEventListener("DOMContentLoaded", () => {
    initHeroSlideshow();
    setupBackToTop();
    enableSmoothScrolling();
    console.log("✅ ADENTITI loaded");
  });
</script>
