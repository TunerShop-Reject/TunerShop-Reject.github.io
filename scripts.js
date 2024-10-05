document.addEventListener('DOMContentLoaded', () => {
    const footerImage = document.querySelector('.footer-image');
    let pressTimer;

    // Handle mousedown (or touchstart for mobile)
    footerImage.addEventListener('mousedown', (e) => {
        e.preventDefault(); // Prevent default action
        pressTimer = window.setTimeout(() => {
            window.location.href = 'easter-egg.html'; // Redirect to the easter egg page
        }, 1000); // Time in milliseconds to hold before redirect (1 second)
    });

    // Clear the timer if mouse is released or if touch is ended
    footerImage.addEventListener('mouseup', () => {
        clearTimeout(pressTimer);
    });

    footerImage.addEventListener('mouseleave', () => {
        clearTimeout(pressTimer);
    });

    footerImage.addEventListener('touchstart', (e) => {
        e.preventDefault(); // Prevent default action
        pressTimer = window.setTimeout(() => {
            window.location.href = 'easter-egg.html'; // Redirect to the easter egg page
        }, 1000); // Time in milliseconds to hold before redirect (1 second)
    });

    footerImage.addEventListener('touchend', () => {
        clearTimeout(pressTimer);
    });
});
