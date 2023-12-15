function likePost(button) {
    button.classList.toggle("liked");
}

// // Data de início do relacionamento (formato: ano, mês (0-11), dia)
// const dataInicio = new Date(2023, 3, 10); // Ajuste para a data real de início

// function calcularTempoDecorrido() {
//     const hoje = new Date();
//     const diferenca = hoje - dataInicio;

//     const totalSegundos = Math.floor(diferenca / 1000);
//     const anos = Math.floor(totalSegundos / (365 * 24 * 60 * 60));
//     const meses = Math.floor(
//         (totalSegundos % (365 * 24 * 60 * 60)) / (30 * 24 * 60 * 60)
//     );
//     const semanas = Math.floor(
//         (totalSegundos % (30 * 24 * 60 * 60)) / (7 * 24 * 60 * 60)
//     );
//     const dias = Math.floor(
//         (totalSegundos % (7 * 24 * 60 * 60)) / (24 * 60 * 60)
//     );
//     const horas = Math.floor((totalSegundos % (24 * 60 * 60)) / (60 * 60));
//     const minutos = Math.floor((totalSegundos % (60 * 60)) / 60);
//     const segundos = Math.floor(totalSegundos % 60);

//     return { anos, meses, semanas, dias, horas, minutos, segundos };
// }

// function formatTime(tempo) {
//     return `${tempo.anos} anos, ${tempo.meses} meses, ${tempo.semanas} semanas, ${tempo.dias} dias, ${tempo.horas} horas, ${tempo.minutos} minutos e ${tempo.segundos} segundos`;
// }

// function atualizarTempoDecorrido() {
//     const tempoDecorrido = calcularTempoDecorrido();
//     const contador = document.getElementById("contador");
//     contador.textContent = formatTime(tempoDecorrido);
// }

// // Atualizar o contador a cada segundo (opcional)
// setInterval(atualizarTempoDecorrido, 1000);

// // Chamar a função para exibir o contador ao carregar a página
// atualizarTempoDecorrido();

const dataInicio = new Date(2023, 3, 10); // Ajuste para a data real de início

function calcularTempoDecorrido() {
    const hoje = new Date();
    const diferenca = hoje - dataInicio;

    const totalSegundos = Math.floor(diferenca / 1000);
    const anos = Math.floor(totalSegundos / (365 * 24 * 60 * 60));
    const meses = Math.floor(
        (totalSegundos % (365 * 24 * 60 * 60)) / (30 * 24 * 60 * 60)
    );
    const semanas = Math.floor(
        (totalSegundos % (30 * 24 * 60 * 60)) / (7 * 24 * 60 * 60)
    );
    const dias = Math.floor(
        (totalSegundos % (7 * 24 * 60 * 60)) / (24 * 60 * 60)
    );
    const horas = Math.floor((totalSegundos % (24 * 60 * 60)) / (60 * 60));
    const minutos = Math.floor((totalSegundos % (60 * 60)) / 60);
    const segundos = Math.floor(totalSegundos % 60);

    return { anos, meses, semanas, dias, horas, minutos, segundos };
}

function atualizarTempoDecorrido() {
    const tempoDecorrido = calcularTempoDecorrido();
    document.getElementById("anos").textContent = `${tempoDecorrido.anos}`;
    document.getElementById("meses").textContent = `${tempoDecorrido.meses}`;
    document.getElementById(
        "semanas"
    ).textContent = `${tempoDecorrido.semanas}`;
    document.getElementById("dias").textContent = `${tempoDecorrido.dias}`;
    document.getElementById("horas").textContent = `${tempoDecorrido.horas}`;
    document.getElementById(
        "minutos"
    ).textContent = `${tempoDecorrido.minutos}`;
    document.getElementById(
        "segundos"
    ).textContent = `${tempoDecorrido.segundos}`;
}

// Atualizar o contador a cada segundo
setInterval(atualizarTempoDecorrido, 1000);

// Chamar a função para exibir o contador ao carregar a página
atualizarTempoDecorrido();
