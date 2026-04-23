const textElement = document.getElementById('status-text');
const message = "Will be back soon...";
let index = 0;

function typeWriter() {
    if (index < message.length) {
        textElement.innerHTML = message.substring(0, index + 1);
        index++;
        setTimeout(typeWriter, 100);
    }
}

// Start typing effect on load
window.onload = typeWriter;