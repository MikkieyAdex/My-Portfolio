// 1. Dark Mode Toggle Module
        const themeToggler = document.getElementById('themeToggler');
        const sunIcon = document.getElementById('sunIcon');
        const moonIcon = document.getElementById('moonIcon');
        const htmlElement = document.documentElement;

        
        themeToggler.addEventListener('click', () => {
            const currentTheme = htmlElement.getAttribute('data-bs-theme');
            if (currentTheme === 'dark') {
                htmlElement.setAttribute('data-bs-theme', 'light');
                sunIcon.classList.add('d-none');      
                moonIcon.classList.remove('d-none');  
            } else {
                htmlElement.setAttribute('data-bs-theme', 'dark');
                sunIcon.classList.remove('d-none');   
                moonIcon.classList.add('d-none');     
            }
        });

// 2. Download Resume Button
document.getElementById('downloadResumeBtn').addEventListener('click', function() {
    window.open('assets/michael-adeniji-resume.pdf', '_blank');
});

