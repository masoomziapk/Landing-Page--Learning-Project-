document.addEventListener("DOMContentLoaded", function() {
    const logoImg = document.querySelector('.logo img');
    const siteName = document.querySelector('.site-name');
    if (logoImg && siteName) {
        logoImg.onload = function() {
            siteName.style.display = 'none';
        };
        logoImg.onerror = function() {
            siteName.style.display = 'inline';
        };
        // If image is cached and already loaded
        if (logoImg.complete && logoImg.naturalWidth !== 0) {
            siteName.style.display = 'none';
        }
    }
});