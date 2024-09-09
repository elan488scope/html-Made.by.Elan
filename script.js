function updateClassNames() {
    const elements = document.querySelectorAll('[class*="portrait"], [class*="landscape"]');
    const isPortrait = window.innerHeight > window.innerWidth;

    elements.forEach(element => {
        if (isPortrait) {
            element.className = element.className.replace(/landscape/g, 'portrait');
        } else {
            element.className = element.className.replace(/portrait/g, 'landscape');
        }
    });
}

// Apply styles on page load
updateClassNames();

// Apply styles on window resize
window.addEventListener('resize', updateClassNames);


function updateClassNames2() {
    const elements = document.querySelectorAll('.no-void, .void');
    const isWideScreen = window.innerWidth >= 0.75 * window.innerHeight;

    elements.forEach(element => {
        if (isWideScreen) {
            element.classList.replace('no-void', 'void');
        } else {
            element.classList.replace('void', 'no-void');
        }
    });
}

// Apply styles on page load
updateClassNames2();

// Apply styles on window resize
window.addEventListener('resize', updateClassNames2);
