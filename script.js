const countdown = document.getElementById('countdown');
const birthday = new Date('2024-03-16').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = birthday - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    
    countdown.innerHTML = `
        <span>${days}&nbspdias,&nbsp</span>
        <span>${hours}&nbsphoras,&nbsp</span>
        <span>${minutes}&nbspminutos e&nbsp</span>
        <span>${seconds}&nbspsegundos</span>
    `;

    if (distance < 0) {
        clearInterval(countdownInterval);
        countdown.innerHTML = 'Feliz Aniversário!';
    }
}

updateCountdown();
const countdownInterval = setInterval(updateCountdown, 1000);