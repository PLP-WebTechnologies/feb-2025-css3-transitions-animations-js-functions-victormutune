// Store user preferences in localStorage
function storePreferences(color) {
    localStorage.setItem('bgColor', color);
}

// Retrieve user preferences from localStorage
function loadPreferences() {
    const savedColor = localStorage.getItem('bgColor');
    if (savedColor) {
        document.body.style.backgroundColor = savedColor;
        document.getElementById('colorPicker').value = savedColor;
    }
}

// Add animation to the element when clicked
function triggerAnimation() {
    const animatedElement = document.getElementById('animatedElement');
    
    // Add animation class
    animatedElement.classList.add('animated');

    // Remove animation class after animation completes to make it reusable
    setTimeout(() => {
        animatedElement.classList.remove('animated');
    }, 2000);  // Match the animation duration (2s)
}

// Event listener for button click to trigger animation
document.getElementById('animateButton').addEventListener('click', triggerAnimation);

// Event listener for color picker change
document.getElementById('colorPicker').addEventListener('input', (event) => {
    const selectedColor = event.target.value;
    storePreferences(selectedColor);  // Store color preference in localStorage
    document.body.style.backgroundColor = selectedColor;  // Apply the color to the background
});

// Load user preferences on page load
window.onload = loadPreferences;
