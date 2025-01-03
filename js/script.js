function calculatePrice() {
    const employees = document.getElementById('employees').value;
    const services = document.getElementById('services').value;
    const duration = document.getElementById('duration').value;

    if (employees && services && duration) {
        let basePrice = 0;

        switch (services) {
            case 'Cybersecurity Assessment':
                basePrice = 500;
                break;
            case 'Threat Monitoring':
                basePrice = 700;
                break;
            case 'Employee Training':
                basePrice = 300;
                break;
            case 'Custom IT Solutions':
                basePrice = 1000;
                break;
        }

        const estimatedPrice = basePrice * employees * duration;
        document.getElementById('estimated-price').textContent = `$${estimatedPrice}`;
        document.getElementById('calculated-price-field').value = `$${estimatedPrice}`;
    } else {
        alert('Please fill out all fields to calculate the price.');
    }
}
// Like functionality
function likePost(postId) {
    const likesSpan = document.getElementById(`likes-${postId}`);
    let currentLikes = parseInt(likesSpan.textContent, 10);
    likesSpan.textContent = currentLikes + 1;
}

// Share functionality
function sharePost(title) {
    const shareUrl = window.location.href;
    alert(`Share this post: ${title}\n${shareUrl}`);
}

// Add a new comment to the comment list
function addComment(listId, inputId) {
    const commentList = document.getElementById(listId);
    const commentInput = document.getElementById(inputId);
    const commentText = commentInput.value.trim();

    if (commentText) {
        // Create a new list item for the comment
        const newComment = document.createElement('li');
        newComment.textContent = commentText;

        // Append the new comment to the list
        commentList.appendChild(newComment);

        // Clear the input field
        commentInput.value = '';
    } else {
        alert('Please enter a comment before submitting.');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.carousel-image');
    let currentIndex = 0;

    setInterval(() => {
        // Remove the active class from the current image
        images[currentIndex].classList.remove('active');
        
        // Move to the next image
        currentIndex = (currentIndex + 1) % images.length;

        // Add the active class to the next image
        images[currentIndex].classList.add('active');
    }, 4000); // Change image every 4 seconds
});


// Add a new comment to the comment list
function addComment(listId, inputId) {
    const commentList = document.getElementById(listId);
    const commentInput = document.getElementById(inputId);
    const commentText = commentInput.value.trim();

    if (commentText) {
        // Create a new list item for the comment
        const newComment = document.createElement('li');
        newComment.textContent = commentText;

        // Append the new comment to the list
        commentList.appendChild(newComment);

        // Save comments to local storage
        saveComments(listId);

        // Clear the input field
        commentInput.value = '';
    } else {
        alert('Please enter a comment before submitting.');
    }
}

// Save comments to local storage
function saveComments(listId) {
    const commentList = document.getElementById(listId);
    const comments = Array.from(commentList.children).map(comment => comment.textContent);

    localStorage.setItem(listId, JSON.stringify(comments));
}

// Load comments from local storage
function loadComments(listId) {
    const commentList = document.getElementById(listId);
    const storedComments = JSON.parse(localStorage.getItem(listId)) || [];

    storedComments.forEach(comment => {
        const newComment = document.createElement('li');
        newComment.textContent = comment;
        commentList.appendChild(newComment);
    });
}

// Load comments for all blog posts when the page loads
document.addEventListener('DOMContentLoaded', () => {
    loadComments('comment-list-1');
    loadComments('comment-list-2');
});

function toggleDetails(detailsId) {
    const detailsElement = document.getElementById(detailsId);
    if (detailsElement.classList.contains('hidden')) {
        detailsElement.classList.remove('hidden');
        detailsElement.classList.add('visible');
    } else {
        detailsElement.classList.add('hidden');
        detailsElement.classList.remove('visible');
    }
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// JavaScript for Sticky Header Scroll Behavior
document.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

document.querySelector('form').addEventListener('submit',e=>{const t=document.getElementById('name').value.trim(),n=document.getElementById('email').value.trim();t&&n||alert('Please fill in all required fields.')});

/// Form Validation
document.querySelector('form').addEventListener('submit', function (e) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();

    if (!name || !email) {
        alert('Please fill in all required fields.');
        e.preventDefault();
    }
});

// Dynamic Animations
document.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('section');
    elements.forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight) {
            el.classList.add('visible');
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    console.log("Welcome to ADENTITI Limited!");
});

// Dark Mode Toggle
const toggle = document.getElementById('dark-mode-toggle');
toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    toggle.textContent =
        document.body.classList.contains('dark-mode') ? "☀️" : "🌙";
});
function toggleMenu() {
    const navMenu = document.querySelector('nav ul');
    navMenu.classList.toggle('active');
}
