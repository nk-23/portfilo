// Function to scroll to a specific section
function scrollToSection(sectionId) {
    const section = document.querySelector(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Log a greeting message to the console
console.log("Welcome to Nagendra Kumar's Portfolio!");
