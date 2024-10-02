//your JS code here. If required.
function updateSize() {
    // Get the width and height of the window
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Update the HTML elements with the current size
    document.getElementById('width').textContent = width;
    document.getElementById('height').textContent = height;
}

// Call updateSize once to set the initial values
updateSize();

// Add an event listener to the window resize event
window.addEventListener('resize', updateSize);
