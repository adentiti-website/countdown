document.addEventListener('DOMContentLoaded', () => {
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptCookies = document.getElementById('accept-cookies');

    if (!localStorage.getItem('cookiesAccepted')) {
        cookieBanner.style.display = 'flex';
    }

    acceptCookies.addEventListener('click', () => {
        localStorage.setItem('cookiesAccepted', 'true');
        cookieBanner.style.display = 'none';
    });
});
