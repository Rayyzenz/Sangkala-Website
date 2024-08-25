// Disable Right-Click and Inspect Element Shortcuts
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'F12' || 
        (e.ctrlKey && e.shiftKey && ['I', 'C', 'J'].includes(e.key)) || 
        (e.ctrlKey && e.key === 'U')) {
        e.preventDefault();
    }
});

// Motion Blur on Scroll
const blurContainer = document.querySelector('.blur-container');
let isScrolling;

// Add blur on scroll
window.addEventListener('scroll', () => {
    blurContainer.classList.add('blur');

    // Clear our timeout throughout the scroll
    window.clearTimeout(isScrolling);

    // Set a timeout to run after scrolling ends
    isScrolling = setTimeout(() => {
        blurContainer.classList.remove('blur');
    }, 200); // Time in milliseconds after which blur will be removed
});
