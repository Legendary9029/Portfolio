// Smooth scroll to projects section
document.getElementById('cta-button').addEventListener('click', () => {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
});

// Dynamic year in footer
document.querySelector('footer p').innerHTML = `&copy; ${new Date().getFullYear()} Aditya Sinha. All rights reserved.`;