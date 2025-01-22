document.addEventListener("DOMContentLoaded", () => {
    const backToTopButton = document.getElementById("back-to-top");

    // Show or hide the "Back to Top" button based on scroll position
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTopButton.classList.add("visible");
        } else {
            backToTopButton.classList.remove("visible");
        }
    });

    // Scroll to top functionality
    backToTopButton.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Ensure smooth scrolling for anchor links
    document.querySelectorAll('.bottom-nav a').forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = e.currentTarget.getAttribute("href").slice(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});

// Add 'loaded' class on page load for fade-in effect
document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("loaded");
    handleSectionVisibility();
});

// Smooth scrolling and navigation transitions
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            const overlay = document.getElementById("transition-overlay");
            overlay.classList.add("active");

            setTimeout(() => {
                overlay.classList.remove("active");
                target.scrollIntoView({ behavior: "smooth" });
            }, 800); // Match the CSS transition duration
        }
    });
});

// Intersection Observer for section visibility
function handleSectionVisibility() {
    const sections = document.querySelectorAll("[data-transition]");
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));
}
// Dismiss Training Banner
function dismissBanner() {
    document.getElementById('training-banner').style.display = 'none';
}

// Hero Image Slideshow
function initHeroSlideshow() {
    const slides = document.querySelectorAll(".hero-slide");
    let currentSlide = 0;

    function changeSlide() {
        slides[currentSlide].classList.remove("active");
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add("active");
    }

    setInterval(changeSlide, 3000);
}

document.addEventListener("DOMContentLoaded", () => {
    initHeroSlideshow();

    // Intersection Observer for Animations
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // Scroll-to-Top Button
    const backToTopButton = document.getElementById("back-to-top");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTopButton.classList.add("visible");
        } else {
            backToTopButton.classList.remove("visible");
        }
    });

    backToTopButton.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
