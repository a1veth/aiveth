let previousBackgroundImage = '';
const gameButtons = document.querySelectorAll('.game-button');
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;
const moonIcon = document.querySelector('.moon');
const sunnyIcon = document.querySelector('.sunny');

document.addEventListener("DOMContentLoaded", function () {
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode === 'enabled') {
        body.classList.add('dark-mode');
        darkModeToggle.checked = true;
    } else {
        body.classList.remove('dark-mode');
        darkModeToggle.checked = false;
    }

    const savedIconStyle = localStorage.getItem('iconStyle');
    if (savedIconStyle === 'moon') {
        moonIcon.style.display = 'block';
        sunnyIcon.style.display = 'none';
    } else {
        moonIcon.style.display = 'none';
        sunnyIcon.style.display = 'block';
    }

    darkModeToggle.addEventListener('change', () => {
        if (darkModeToggle.checked) {
            body.classList.add('dark-mode');
            localStorage.setItem('darkMode', 'enabled'); 
            moonIcon.style.display = 'none';
            sunnyIcon.style.display = 'block';
        } else {
            body.classList.remove('dark-mode');
            localStorage.setItem('darkMode', 'disabled'); 
            moonIcon.style.display = 'block';
            sunnyIcon.style.display = 'none';
        }
    });

    darkModeToggle.addEventListener('change', function () {
        const iconStyle = darkModeToggle.checked ? 'sunny' : 'moon';
        localStorage.setItem('iconStyle', iconStyle);
    });
});

gameButtons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        if (button.id === 'valorant-button') {
            previousBackgroundImage = body.style.backgroundImage;
            body.style.backgroundImage = 'url("./valorant.gif")';
        } else if (button.id === 'dota2-button') {
            previousBackgroundImage = body.style.backgroundImage;
            body.style.backgroundImage = 'url("./dota2.gif")';
        }
        body.style.backgroundSize = 'cover';
        body.style.backgroundRepeat = 'no-repeat';
    });

    button.addEventListener('mouseleave', () => {
        body.style.backgroundImage = previousBackgroundImage; 
    });
});