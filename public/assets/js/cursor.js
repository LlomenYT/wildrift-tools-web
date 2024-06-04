document.addEventListener('DOMContentLoaded', () => {
    const customCursor = document.getElementById('custom-cursor');

    if (customCursor) {
        document.addEventListener('mousemove', (e) => {
            customCursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        });
    } else {
        console.error("Custom cursor element not found.");
    }
});