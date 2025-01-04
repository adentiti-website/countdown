document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".carousel-image");
    let currentIndex = 0;

    function switchImage() {
        // Remove the 'active' class from the current image
        images[currentIndex].classList.remove("active");

        // Increment the index and loop back to 0 if it exceeds the image count
        currentIndex = (currentIndex + 1) % images.length;

        // Add the 'active' class to the new current image
        images[currentIndex].classList.add("active");
    }

    // Change image every 3 seconds
    setInterval(switchImage, 3000);
});

// Service pricing map
const servicePricing = {
    "Cybersecurity Assessment": 200,
    "Threat Monitoring": 150,
    "Employee Training": 100,
    "Custom IT Solutions": null, // Null means no predefined price
};

// Function to calculate price
function calculatePrice() {
    const employees = document.getElementById("employees").value;
    const service = document.getElementById("services").value;
    const duration = document.getElementById("duration").value;

    const estimatedPriceField = document.getElementById("estimated-price");
    const calculatedPriceField = document.getElementById("calculated-price-field");

    // Validate inputs
    if (!employees || !service || !duration) {
        alert("Please fill out all the required fields.");
        return;
    }

    // Check if the service has a predefined price
    const basePrice = servicePricing[service];

    if (basePrice === null) {
        // No price available, prompt to request a quote
        estimatedPriceField.textContent = "Request a Quote";
        calculatedPriceField.value = "Request a Quote";
        alert("This service requires a detailed quote. Please submit your request.");
    } else {
        // Calculate the total price
        const totalPrice = basePrice * employees * duration;
        estimatedPriceField.textContent = `$${totalPrice.toFixed(2)}`;
        calculatedPriceField.value = totalPrice.toFixed(2);
    }
}

// Store likes and comments in localStorage
function saveDataToLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

function getDataFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key)) || [];
}

// Handle Likes
function likePost(postId) {
    // Get the like span and current like count
    const likeSpan = document.getElementById(`likes-${postId}`);
    let currentLikes = parseInt(likeSpan.textContent);
    likeSpan.textContent = currentLikes + 1;

    // Add a "You liked this" entry to the liked-by list
    const likedByList = document.getElementById(`liked-by-${postId}`);
    const newLike = document.createElement("li");
    newLike.textContent = "You liked this";
    likedByList.appendChild(newLike);

    // Save the like to local storage
    const likes = getDataFromLocalStorage('likes') || [];
    likes.push({ postId, username: "You" });
    saveDataToLocalStorage('likes', likes);
}

// Display Likes
function displayLikes(postId) {
    const likes = getDataFromLocalStorage('likes') || [];
    const filteredLikes = likes.filter((like) => like.postId === postId);

    // Update the like count
    document.getElementById(`likes-${postId}`).textContent = filteredLikes.length;

    // Update the liked-by list
    const likedByList = document.getElementById(`liked-by-${postId}`);
    likedByList.innerHTML = filteredLikes.map((like) => `<li>${like.username}</li>`).join('');
}

// Local Storage Utility Functions
function getDataFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key)) || [];
}

function saveDataToLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

// Call displayLikes for each post on page load
document.addEventListener("DOMContentLoaded", () => {
    const postIds = ["post-1"]; // Add all post IDs here
    postIds.forEach((postId) => displayLikes(postId));
});


// Handle Comments
function addComment(postId, commentInputId) {
    const comments = getDataFromLocalStorage('comments');
    const commentText = document.getElementById(commentInputId).value.trim();

    if (commentText) {
        comments.push({ postId, text: commentText });
        saveDataToLocalStorage('comments', comments);
        displayComments(postId);
        document.getElementById(commentInputId).value = '';
    } else {
        alert('Please enter a comment before submitting.');
    }
}

function displayComments(postId) {
    const comments = getDataFromLocalStorage('comments').filter((comment) => comment.postId === postId);
    const commentList = document.getElementById(`comment-list-${postId}`);
    commentList.innerHTML = comments.map((comment) => `<li>${comment.text}</li>`).join('');
}

// Initialize Engagement Data
document.addEventListener('DOMContentLoaded', () => {
    displayLikes('post-1');
    displayComments('post-1');
    displayLikes('post-2');
    displayComments('post-2');
});

function toggleDetails(detailId) {
    const detailElement = document.getElementById(detailId);
    if (detailElement) {
        if (detailElement.classList.contains('hidden')) {
            detailElement.classList.remove('hidden');
            detailElement.classList.add('visible');
        } else {
            detailElement.classList.remove('visible');
            detailElement.classList.add('hidden');
        }
    }
}


// Add scroll-triggered animations
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.case-study-card');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-card');
            }
        });
    }, {
        threshold: 0.1,
    });

    cards.forEach(card => observer.observe(card));
});

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
