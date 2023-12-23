function updateCountdown() {
    const now = new Date();
    const target = new Date(now.getFullYear() + 1, 0, 1);
    const timeLeft = target - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById(
        "countdown"
    ).innerText = `${days}D ${hours}H ${minutes}M ${seconds}S`;

    if (timeLeft <= 0) {
        document.getElementById("susButton").disabled = false;
        clearInterval(interval);
    }
}

// NÃO ERA PRA VC ESTAR AQUI, NADA DE TENTAR VER A SUS
// POR FAVOR AMOR, VÊ QUANDO LIBERAR PRA VC... AFFAFFF

function redirectToNewYearPage() {
    window.location.href = "love.html";
}

// NÃO ERA PRA VC ESTAR AQUI, NADA DE TENTAR VER A SUS
// POR FAVOR AMOR, VÊ QUANDO LIBERAR PRA VC... AFFAFFF

document.addEventListener("DOMContentLoaded", function () {
    const susButton = document.getElementById("susButton");

    susButton.addEventListener("click", function () {
        redirectToNewYearPage();
    });

    const interval = setInterval(updateCountdown, 1000);

    updateCountdown();
});
