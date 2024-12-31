// Countdown to Christmas
const countdownDisplay = document.getElementById('countdown');
const christmasDate = new Date("December 25, 2025 00:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = christmasDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));

    countdownDisplay.textContent = days;
}

setInterval(updateCountdown, 1000);

// Snowflakes animation
function createSnowflakes() {
    const snowflakesContainer = document.getElementById('snowflakes');
    for (let i = 0; i < 100; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.textContent = '❄️';
        snowflake.style.left = Math.random() * 100 + '%';
        snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
        snowflake.style.animationDelay = Math.random() * 2 + 's';
        snowflakesContainer.appendChild(snowflake);
    }
}

createSnowflakes();

// Mouse aura effect
const mouseAura = document.getElementById('mouse-aura');

document.addEventListener('mousemove', (e) => {
    mouseAura.style.left = e.pageX - 50 + 'px';
    mouseAura.style.top = e.pageY - 50 + 'px';
    mouseAura.style.transform = 'scale(1)';
});

document.addEventListener('mouseleave', () => {
    mouseAura.style.transform = 'scale(0)';
});
