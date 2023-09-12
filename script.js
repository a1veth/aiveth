const darkModeToggle = document.getElementById('dark-mode-toggle');
const gameButtons = document.querySelectorAll('.game-button');
const body = document.body;
let previousBackgroundImage = '';

darkModeToggle.addEventListener('change', () => {
    if (darkModeToggle.checked) {
        body.classList.add('dark-mode');
        body.classList.remove('light-mode');
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
    }
});

gameButtons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        if (button.id === 'valorant-button') {
            previousBackgroundImage = body.style.backgroundImage;
            body.style.backgroundImage = 'url("Valorant.gif")';
        } else if (button.id === 'dota2-button') {
            previousBackgroundImage = body.style.backgroundImage;
            body.style.backgroundImage = 'url("Dota2.gif")';
        }
        body.style.backgroundSize = 'cover';
        body.style.backgroundRepeat = 'no-repeat';
    });

    button.addEventListener('mouseleave', () => {
        body.style.backgroundImage = previousBackgroundImage; 
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const moonIcon = document.querySelector(".moon");
    const sunnyIcon = document.querySelector(".sunny");
    const darkModeToggle = document.querySelector("#dark-mode-toggle");

    darkModeToggle.addEventListener("change", function() {
        if (darkModeToggle.checked) {
            moonIcon.style.display = "none";
            sunnyIcon.style.display = "block";
        } else {
            moonIcon.style.display = "block";
            sunnyIcon.style.display = "none";
        }
    });
});
