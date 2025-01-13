// Hero Image Slideshow
document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".hero-slide");
    let currentSlide = 0;

    function changeSlide() {
        slides[currentSlide].classList.remove("active");
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add("active");
    }

    setInterval(changeSlide, 3000);
});

// Intersection Observer for Animations
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
});

// Highlight Active Navigation Link
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.bottom-nav a');

    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            navLinks.forEach(link => link.classList.remove('active'));
            navLinks[index].classList.add('active');
        }
    });
});

// Service Pricing Map
const servicePricing = {
    "Cybersecurity Assessment": 200,
    "Threat Monitoring": 150,
    "Employee Training": 100,
    "Custom IT Solutions": null
};

function calculatePrice() {
    const employees = document.getElementById("employees").value;
    const service = document.getElementById("services").value;
    const duration = document.getElementById("duration").value;

    const estimatedPriceField = document.getElementById("estimated-price");
    const calculatedPriceField = document.getElementById("calculated-price-field");

    if (!employees || !service || !duration) {
        alert("Please fill out all the required fields.");
        return;
    }

    const basePrice = servicePricing[service];
    if (basePrice === null) {
        estimatedPriceField.textContent = "Request a Quote";
        calculatedPriceField.value = "Request a Quote";
    } else {
        const totalPrice = basePrice * employees * duration;
        estimatedPriceField.textContent = `$${totalPrice.toFixed(2)}`;
        calculatedPriceField.value = totalPrice.toFixed(2);
    }
}

// Like and Comment System
function likePost(postId) {
    const likeSpan = document.getElementById(`likes-${postId}`);
    let currentLikes = parseInt(likeSpan.textContent) || 0;
    likeSpan.textContent = currentLikes + 1;

    const likedByList = document.getElementById(`liked-by-${postId}`);
    const newLike = document.createElement("li");
    newLike.textContent = "You liked this";
    likedByList.appendChild(newLike);
}

function addComment(postId, commentInputId) {
    const commentInput = document.getElementById(commentInputId);
    const commentText = commentInput.value.trim();

    if (commentText) {
        const commentList = document.getElementById(`comment-list-${postId}`);
        const newComment = document.createElement("li");
        newComment.textContent = commentText;
        commentList.appendChild(newComment);
        commentInput.value = '';
    } else {
        alert('Please enter a comment before submitting.');
    }
}

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
