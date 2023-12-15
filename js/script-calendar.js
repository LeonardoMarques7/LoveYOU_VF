// // Obtém o elemento com a classe "info-dia"
// const infoDiaElement = document.querySelector(".info-dias");

// // Função para adicionar os dias do mês ao elemento
// function adicionarDiasDoMes() {
//     const dataAtual = new Date();
//     const anoAtual = dataAtual.getFullYear();
//     const mesAtual = dataAtual.getMonth();
//     const diasNoMes = new Date(anoAtual, mesAtual + 1, 0).getDate();

//     for (let i = 1; i <= diasNoMes; i++) {
//         const novoDia = document.createElement("div");
//         novoDia.textContent = i;
//         novoDia.classList.add("dia-mes");
//         novoDia.addEventListener("click", function () {
//             exibirMensagem(i);
//         });
//         infoDiaElement.appendChild(novoDia);
//     }
// }

// function exibirMensagem(dia) {
//     const mensagemExistente = document.querySelector(".mensagem-dia");
//     if (mensagemExistente) {
//         mensagemExistente.remove();
//     }

//     const mensagem = document.createElement("div");
//     mensagem.classList.add("mensagem-dia");
//     mensagem.textContent = `Você clicou no dia ${dia}`;
//     document.body.appendChild(mensagem);
//     setTimeout(() => {
//         mensagem.remove();
//     }, 3000);
// }

// adicionarDiasDoMes();

// ----------------------------------------------------------------

// const infoDiaElement = document.querySelector(".info-dias");
// const calendarioElement = document.querySelector(".calendario");

// function adicionarDiasDoMes() {
//     const dataAtual = new Date();
//     const anoAtual = dataAtual.getFullYear();
//     const mesAtual = dataAtual.getMonth();
//     const diaAtual = dataAtual.getDate();
//     const diasNoMes = new Date(anoAtual, mesAtual + 1, 0).getDate();

//     for (let i = 1; i <= diasNoMes; i++) {
//         const novoDia = document.createElement("div");
//         novoDia.textContent = i;
//         novoDia.classList.add("dia-mes");
//         if (i !== diaAtual) {
//             novoDia.classList.add("dia-inativo");
//         } else {
//             novoDia.addEventListener("click", function () {
//                 exibirMensagem(i);
//                 esconderCalendario();
//             });
//         }
//         infoDiaElement.appendChild(novoDia);
//     }
// }

// function exibirMensagem(dia) {
//     const mensagemExistente = document.querySelector(".mensagem-dia");
//     if (mensagemExistente) {
//         mensagemExistente.remove();
//     }

//     const mensagem = document.createElement("div");
//     mensagem.classList.add("mensagem-dia");
//     mensagem.innerHTML = `
//         <h2>
//             You look like my next mistake. Love’s a game, wanna play?<br />
//             <small class="fw-bold text-dark fs-6 opacity-75">Traduzido: Você parece meu próximo erro. O amor é um jogo, quer jogar?</small>
//             <br />
//             <code class="fw-bold">Taylor</code>
//         </h2>
//         <div class="column">
//             <h5><span class="badge bg-dark">Música de Hoje:</span></h5>
//             <div class="border border-light rounded border-audio">
//                 <audio controls id="audio" class="audio">
//                     <source src="audios/audio.mp3" type="audio/mpeg" />
//                     Seu navegador não suporta o elemento de áudio.
//                 </audio>
//             </div>
//         </div>
//     `;

//     document.body.appendChild(mensagem);
// }

// function esconderCalendario() {
//     calendarioElement.style.display = "none";
// }

// adicionarDiasDoMes();

const infoDiaElement = document.querySelector(".dias");
const calendarioElement = document.querySelector(".calendario");

// Array de mensagens para cada dia do mês (1 a 31)
const mensagens = [
    `<h2>
    Give a little, get a lot.
    That's how you do it with love.<br />
        <small class="fw-bold text-dark fs-6 opacity-75">Traduzido: Dê um pouco, receba muito.
        É assim que se faz com o amor.</small>
        <br />
        <code class="fw-bold">Marina</code>
    </h2>
    <div class="column">
        <h5><span class="badge bg-dark">Música de Hoje: <span class="text-color">Obsessions</span></span></h5>
        <div class="border border-light rounded border-audio">
            <audio controls id="audio" class="audio">
                <source src="audios/audio1.mp3" type="audio/mpeg" />
                Seu navegador não suporta o elemento de áudio.
            </audio>
        </div>
        <a href="calendar.html"><button class="btn btn-sm btn-outline-dark mt-2"><i class="fa-solid fa-caret-left"></i> Voltar</button></a>
    </div>`,
    `<h2>
    Women and men, we are equal.
    But love will always be a game.<br />
        <small class="fw-bold text-dark fs-6 opacity-75">Traduzido: Mulheres e homens, somos iguais.
        Mas o amor sempre será um jogo.</small>
        <br />
        <code class="fw-bold">Marina</code>
    </h2>
    <div class="column">
        <h5><span class="badge bg-dark">Música de Hoje: <span class="text-color">Bubblegum Bitch    </span></span></h5>
        <div class="border border-light rounded border-audio">
            <audio controls id="audio" class="audio">
                <source src="audios/audio2.mp3" type="audio/mpeg" />
                Seu navegador não suporta o elemento de áudio.
            </audio>
        </div>
        <a href="calendar.html"><button class="btn btn-sm btn-outline-dark mt-2"><i class="fa-solid fa-caret-left"></i> Voltar</button></a>
    </div>`,
    `<h2>
    You never told me what made you strong and what made you weak
    <br />
        <small class="fw-bold text-dark fs-6 opacity-75">Traduzido: Você nunca me disse o que te fez forte e o que te fez fraco</small>
        <br />
        <code class="fw-bold">Marina</code>
    </h2>
    <div class="column">
        <h5><span class="badge bg-dark">Música de Hoje: <span class="text-color">Froot</span></span></h5>
        <div class="border border-light rounded border-audio">
            <audio controls id="audio" class="audio">
                <source src="audios/audio3.mp3" type="audio/mpeg" />
                Seu navegador não suporta o elemento de áudio.
            </audio>
        </div>
        <a href="calendar.html"><button class="btn btn-sm btn-outline-dark mt-2"><i class="fa-solid fa-caret-left"></i> Voltar</button></a>
    </div>`,
    `<h2>
    It's okay to say you have a weakness. You don't always have to be on top. Better to be hated than loved for what you're not.<br />
        <small class="fw-bold text-dark fs-6 opacity-75">Traduzido: Tudo bem dizer que você tem um ponto fraco. Você não precisa estar sempre por cima. Melhor ser odiado do que amado pelo que você não é.</small>
        <br />
        <code class="fw-bold">Marina</code>
    </h2>
    <div class="column">
        <h5><span class="badge bg-dark">Música de Hoje: <span class="text-color">Obsessions</span></span></h5>
        <div class="border border-light rounded border-audio">
            <audio controls id="audio" class="audio">
                <source src="audios/audio4.mp3" type="audio/mpeg" />
                Seu navegador não suporta o elemento de áudio.
            </audio>
        </div>
        <a href="calendar.html"><button class="btn btn-sm btn-outline-dark mt-2"><i class="fa-solid fa-caret-left"></i> Voltar</button></a>
    </div>`,
    `<h2>
        You look like my next mistake. Love’s a game, wanna play?<br />
        <small class="fw-bold text-dark fs-6 opacity-75">Traduzido: Você parece meu próximo erro. O amor é um jogo, quer jogar?</small>
        <br />
        <code class="fw-bold">Taylor</code>
    </h2>
    <div class="column">
        <h5><span class="badge bg-dark">Música de Hoje: <span class="text-color">Obsessions</span></span></h5>
        <div class="border border-light rounded border-audio">
            <audio controls id="audio" class="audio">
                <source src="audios/audio5.mp3" type="audio/mpeg" />
                Seu navegador não suporta o elemento de áudio.
            </audio>
        </div>
        <a href="calendar.html"><button class="btn btn-sm btn-outline-dark mt-2"><i class="fa-solid fa-caret-left"></i> Voltar</button></a>
    </div>`,
    `<h2>
        You look like my next mistake. Love’s a game, wanna play?<br />
        <small class="fw-bold text-dark fs-6 opacity-75">Traduzido: Você parece meu próximo erro. O amor é um jogo, quer jogar?</small>
        <br />
        <code class="fw-bold">Taylor</code>
    </h2>
    <div class="column">
        <h5><span class="badge bg-dark">Música de Hoje: <span class="text-color">Obsessions</span></span></h5>
        <div class="border border-light rounded border-audio">
            <audio controls id="audio" class="audio">
                <source src="audios/audio6.mp3" type="audio/mpeg" />
                Seu navegador não suporta o elemento de áudio.
            </audio>
        </div>
        <a href="calendar.html"><button class="btn btn-sm btn-outline-dark mt-2"><i class="fa-solid fa-caret-left"></i> Voltar</button></a>
    </div>`,
    `<h2>
        You look like my next mistake. Love’s a game, wanna play?<br />
        <small class="fw-bold text-dark fs-6 opacity-75">Traduzido: Você parece meu próximo erro. O amor é um jogo, quer jogar?</small>
        <br />
        <code class="fw-bold">Taylor</code>
    </h2>
    <div class="column">
        <h5><span class="badge bg-dark">Música de Hoje: <span class="text-color">Obsessions</span></span></h5>
        <div class="border border-light rounded border-audio">
            <audio controls id="audio" class="audio">
                <source src="audios/audio7.mp3" type="audio/mpeg" />
                Seu navegador não suporta o elemento de áudio.
            </audio>
        </div>
        <a href="calendar.html"><button class="btn btn-sm btn-outline-dark mt-2"><i class="fa-solid fa-caret-left"></i> Voltar</button></a>
    </div>`,
    `<h2>
        You look like my next mistake. Love’s a game, wanna play?<br />
        <small class="fw-bold text-dark fs-6 opacity-75">Traduzido: Você parece meu próximo erro. O amor é um jogo, quer jogar?</small>
        <br />
        <code class="fw-bold">Taylor</code>
    </h2>
    <div class="column">
        <h5><span class="badge bg-dark">Música de Hoje: <span class="text-color">Obsessions</span></span></h5>
        <div class="border border-light rounded border-audio">
            <audio controls id="audio" class="audio">
                <source src="audios/audio8.mp3" type="audio/mpeg" />
                Seu navegador não suporta o elemento de áudio.
            </audio>
        </div>
        <a href="calendar.html"><button class="btn btn-sm btn-outline-dark mt-2"><i class="fa-solid fa-caret-left"></i> Voltar</button></a>
    </div>`,
    `<h2>
        You look like my next mistake. Love’s a game, wanna play?<br />
        <small class="fw-bold text-dark fs-6 opacity-75">Traduzido: Você parece meu próximo erro. O amor é um jogo, quer jogar?</small>
        <br />
        <code class="fw-bold">Taylor</code>
    </h2>
    <div class="column">
        <h5><span class="badge bg-dark">Música de Hoje: <span class="text-color">Obsessions</span></span></h5>
        <div class="border border-light rounded border-audio">
            <audio controls id="audio" class="audio">
                <source src="audios/audio9.mp3" type="audio/mpeg" />
                Seu navegador não suporta o elemento de áudio.
            </audio>
        </div>
        <a href="calendar.html"><button class="btn btn-sm btn-outline-dark mt-2"><i class="fa-solid fa-caret-left"></i> Voltar</button></a>
    </div>`,
    `<h2>
        You look like my next mistake. Love’s a game, wanna play?<br />
        <small class="fw-bold text-dark fs-6 opacity-75">Traduzido: Você parece meu próximo erro. O amor é um jogo, quer jogar?</small>
        <br />
        <code class="fw-bold">Taylor</code>
    </h2>
    <div class="column">
        <h5><span class="badge bg-dark">Música de Hoje: <span class="text-color">Obsessions</span></span></h5>
        <div class="border border-light rounded border-audio">
            <audio controls id="audio" class="audio">
                <source src="audios/audio10.mp3" type="audio/mpeg" />
                Seu navegador não suporta o elemento de áudio.
            </audio>
        </div>
        <a href="calendar.html"><button class="btn btn-sm btn-outline-dark mt-2"><i class="fa-solid fa-caret-left"></i> Voltar</button></a>
    </div>`,
    `<h2>
        You look like my next mistake. Love’s a game, wanna play?<br />
        <small class="fw-bold text-dark fs-6 opacity-75">Traduzido: Você parece meu próximo erro. O amor é um jogo, quer jogar?</small>
        <br />
        <code class="fw-bold">Taylor</code>
    </h2>
    <div class="column">
        <h5><span class="badge bg-dark">Música de Hoje: <span class="text-color">Obsessions</span></span></h5>
        <div class="border border-light rounded border-audio">
            <audio controls id="audio" class="audio">
                <source src="audios/audio11.mp3" type="audio/mpeg" />
                Seu navegador não suporta o elemento de áudio.
            </audio>
        </div>
        <a href="calendar.html"><button class="btn btn-sm btn-outline-dark mt-2"><i class="fa-solid fa-caret-left"></i> Voltar</button></a>
    </div>`,
    `<h2>
        You look like my next mistake. Love’s a game, wanna play?<br />
        <small class="fw-bold text-dark fs-6 opacity-75">Traduzido: Você parece meu próximo erro. O amor é um jogo, quer jogar?</small>
        <br />
        <code class="fw-bold">Taylor</code>
    </h2>
    <div class="column">
        <h5><span class="badge bg-dark">Música de Hoje: <span class="text-color">Obsessions</span></span></h5>
        <div class="border border-light rounded border-audio">
            <audio controls id="audio" class="audio">
                <source src="audios/audio12.mp3" type="audio/mpeg" />
                Seu navegador não suporta o elemento de áudio.
            </audio>
        </div>
        <a href="calendar.html"><button class="btn btn-sm btn-outline-dark mt-2"><i class="fa-solid fa-caret-left"></i> Voltar</button></a>
    </div>`,
    `<h2>
        You look like my next mistake. Love’s a game, wanna play?<br />
        <small class="fw-bold text-dark fs-6 opacity-75">Traduzido: Você parece meu próximo erro. O amor é um jogo, quer jogar?</small>
        <br />
        <code class="fw-bold">Taylor</code>
    </h2>
    <div class="column">
        <h5><span class="badge bg-dark">Música de Hoje: <span class="text-color">Obsessions</span></span></h5>
        <div class="border border-light rounded border-audio">
            <audio controls id="audio" class="audio">
                <source src="audios/audio13.mp3" type="audio/mpeg" />
                Seu navegador não suporta o elemento de áudio.
            </audio>
        </div>
        <a href="calendar.html"><button class="btn btn-sm btn-outline-dark mt-2"><i class="fa-solid fa-caret-left"></i> Voltar</button></a>
    </div>`,
    `<h2>
        You look like my next mistake. Love’s a game, wanna play?<br />
        <small class="fw-bold text-dark fs-6 opacity-75">Traduzido: Você parece meu próximo erro. O amor é um jogo, quer jogar?</small>
        <br />
        <code class="fw-bold">Taylor</code>
    </h2>
    <div class="column">
        <h5><span class="badge bg-dark">Música de Hoje: <span class="text-color">Obsessions</span></span></h5>
        <div class="border border-light rounded border-audio">
            <audio controls id="audio" class="audio">
                <source src="audios/audio14.mp3" type="audio/mpeg" />
                Seu navegador não suporta o elemento de áudio.
            </audio>
        </div>
        <a href="calendar.html"><button class="btn btn-sm btn-outline-dark mt-2"><i class="fa-solid fa-caret-left"></i> Voltar</button></a>
    </div>`,
    `<h2>
        You look like my next mistake. Love’s a game, wanna play?<br />
        <small class="fw-bold text-dark fs-6 opacity-75">Traduzido: Você parece meu próximo erro. O amor é um jogo, quer jogar?</small>
        <br />
        <code class="fw-bold">Taylor</code>
    </h2>
    <div class="column">
        <h5><span class="badge bg-dark">Música de Hoje: <span class="text-color">Obsessions</span></span></h5>
        <div class="border border-light rounded border-audio">
            <audio controls id="audio" class="audio">
                <source src="audios/audio15.mp3" type="audio/mpeg" />
                Seu navegador não suporta o elemento de áudio.
            </audio>
        </div>
        <a href="calendar.html"><button class="btn btn-sm btn-outline-dark mt-2"><i class="fa-solid fa-caret-left"></i> Voltar</button></a>
    </div>`,
    `<h2>
        You look like my next mistake. Love’s a game, wanna play?<br />
        <small class="fw-bold text-dark fs-6 opacity-75">Traduzido: Você parece meu próximo erro. O amor é um jogo, quer jogar?</small>
        <br />
        <code class="fw-bold">Taylor</code>
    </h2>
    <div class="column">
        <h5><span class="badge bg-dark">Música de Hoje: <span class="text-color">Obsessions</span></span></h5>
        <div class="border border-light rounded border-audio">
            <audio controls id="audio" class="audio">
                <source src="audios/audio16.mp3" type="audio/mpeg" />
                Seu navegador não suporta o elemento de áudio.
            </audio>
        </div>
        <a href="calendar.html"><button class="btn btn-sm btn-outline-dark mt-2"><i class="fa-solid fa-caret-left"></i> Voltar</button></a>
    </div>`,
    `<h2>
        You look like my next mistake. Love’s a game, wanna play?<br />
        <small class="fw-bold text-dark fs-6 opacity-75">Traduzido: Você parece meu próximo erro. O amor é um jogo, quer jogar?</small>
        <br />
        <code class="fw-bold">Taylor</code>
    </h2>
    <div class="column">
        <h5><span class="badge bg-dark">Música de Hoje: <span class="text-color">Obsessions</span></span></h5>
        <div class="border border-light rounded border-audio">
            <audio controls id="audio" class="audio">
                <source src="audios/audio17.mp3" type="audio/mpeg" />
                Seu navegador não suporta o elemento de áudio.
            </audio>
        </div>
        <a href="calendar.html"><button class="btn btn-sm btn-outline-dark mt-2"><i class="fa-solid fa-caret-left"></i> Voltar</button></a>
    </div>`,
    `<h2>
        You look like my next mistake. Love’s a game, wanna play?<br />
        <small class="fw-bold text-dark fs-6 opacity-75">Traduzido: Você parece meu próximo erro. O amor é um jogo, quer jogar?</small>
        <br />
        <code class="fw-bold">Taylor</code>
    </h2>
    <div class="column">
        <h5><span class="badge bg-dark">Música de Hoje: <span class="text-color">Obsessions</span></span></h5>
        <div class="border border-light rounded border-audio">
            <audio controls id="audio" class="audio">
                <source src="audios/audio18.mp3" type="audio/mpeg" />
                Seu navegador não suporta o elemento de áudio.
            </audio>
        </div>
        <a href="calendar.html"><button class="btn btn-sm btn-outline-dark mt-2"><i class="fa-solid fa-caret-left"></i> Voltar</button></a>
    </div>`,
    `<h2>
        You look like my next mistake. Love’s a game, wanna play?<br />
        <small class="fw-bold text-dark fs-6 opacity-75">Traduzido: Você parece meu próximo erro. O amor é um jogo, quer jogar?</small>
        <br />
        <code class="fw-bold">Taylor</code>
    </h2>
    <div class="column">
        <h5><span class="badge bg-dark">Música de Hoje: <span class="text-color">Obsessions</span></span></h5>
        <div class="border border-light rounded border-audio">
            <audio controls id="audio" class="audio">
                <source src="audios/audio19.mp3" type="audio/mpeg" />
                Seu navegador não suporta o elemento de áudio.
            </audio>
        </div>
        <a href="calendar.html"><button class="btn btn-sm btn-outline-dark mt-2"><i class="fa-solid fa-caret-left"></i> Voltar</button></a>
    </div>`,
    `<h2>
        You look like my next mistake. Love’s a game, wanna play?<br />
        <small class="fw-bold text-dark fs-6 opacity-75">Traduzido: Você parece meu próximo erro. O amor é um jogo, quer jogar?</small>
        <br />
        <code class="fw-bold">Taylor</code>
    </h2>
    <div class="column">
        <h5><span class="badge bg-dark">Música de Hoje: <span class="text-color">Obsessions</span></span></h5>
        <div class="border border-light rounded border-audio">
            <audio controls id="audio" class="audio">
                <source src="audios/audio20.mp3" type="audio/mpeg" />
                Seu navegador não suporta o elemento de áudio.
            </audio>
        </div>
        <a href="calendar.html"><button class="btn btn-sm btn-outline-dark mt-2"><i class="fa-solid fa-caret-left"></i> Voltar</button></a>
    </div>`,
    `<h2>
        You look like my next mistake. Love’s a game, wanna play?<br />
        <small class="fw-bold text-dark fs-6 opacity-75">Traduzido: Você parece meu próximo erro. O amor é um jogo, quer jogar?</small>
        <br />
        <code class="fw-bold">Taylor</code>
    </h2>
    <div class="column">
        <h5><span class="badge bg-dark">Música de Hoje: <span class="text-color">Obsessions</span></span></h5>
        <div class="border border-light rounded border-audio">
            <audio controls id="audio" class="audio">
                <source src="audios/audio21.mp3" type="audio/mpeg" />
                Seu navegador não suporta o elemento de áudio.
            </audio>
        </div>
        <a href="calendar.html"><button class="btn btn-sm btn-outline-dark mt-2"><i class="fa-solid fa-caret-left"></i> Voltar</button></a>
    </div>`,
    `<h2>
        You look like my next mistake. Love’s a game, wanna play?<br />
        <small class="fw-bold text-dark fs-6 opacity-75">Traduzido: Você parece meu próximo erro. O amor é um jogo, quer jogar?</small>
        <br />
        <code class="fw-bold">Taylor</code>
    </h2>
    <div class="column">
        <h5><span class="badge bg-dark">Música de Hoje: <span class="text-color">Obsessions</span></span></h5>
        <div class="border border-light rounded border-audio">
            <audio controls id="audio" class="audio">
                <source src="audios/audio22.mp3" type="audio/mpeg" />
                Seu navegador não suporta o elemento de áudio.
            </audio>
        </div>
        <a href="calendar.html"><button class="btn btn-sm btn-outline-dark mt-2"><i class="fa-solid fa-caret-left"></i> Voltar</button></a>
    </div>`,
    `<h2>
        You look like my next mistake. Love’s a game, wanna play?<br />
        <small class="fw-bold text-dark fs-6 opacity-75">Traduzido: Você parece meu próximo erro. O amor é um jogo, quer jogar?</small>
        <br />
        <code class="fw-bold">Taylor</code>
    </h2>
    <div class="column">
        <h5><span class="badge bg-dark">Música de Hoje: <span class="text-color">Obsessions</span></span></h5>
        <div class="border border-light rounded border-audio">
            <audio controls id="audio" class="audio">
                <source src="audios/audio23.mp3" type="audio/mpeg" />
                Seu navegador não suporta o elemento de áudio.
            </audio>
        </div>
        <a href="calendar.html"><button class="btn btn-sm btn-outline-dark mt-2"><i class="fa-solid fa-caret-left"></i> Voltar</button></a>
    </div>`,
    `<h2>
        You look like my next mistake. Love’s a game, wanna play?<br />
        <small class="fw-bold text-dark fs-6 opacity-75">Traduzido: Você parece meu próximo erro. O amor é um jogo, quer jogar?</small>
        <br />
        <code class="fw-bold">Taylor</code>
    </h2>
    <div class="column">
        <h5><span class="badge bg-dark">Música de Hoje: <span class="text-color">Obsessions</span></span></h5>
        <div class="border border-light rounded border-audio">
            <audio controls id="audio" class="audio">
                <source src="audios/audio24.mp3" type="audio/mpeg" />
                Seu navegador não suporta o elemento de áudio.
            </audio>
        </div>
        <a href="calendar.html"><button class="btn btn-sm btn-outline-dark mt-2"><i class="fa-solid fa-caret-left"></i> Voltar</button></a>
    </div>`,
    `<h2>
        You look like my next mistake. Love’s a game, wanna play?<br />
        <small class="fw-bold text-dark fs-6 opacity-75">Traduzido: Você parece meu próximo erro. O amor é um jogo, quer jogar?</small>
        <br />
        <code class="fw-bold">Taylor</code>
    </h2>
    <div class="column">
        <h5><span class="badge bg-dark">Música de Hoje: <span class="text-color">Obsessions</span></span></h5>
        <div class="border border-light rounded border-audio">
            <audio controls id="audio" class="audio">
                <source src="audios/audio25.mp3" type="audio/mpeg" />
                Seu navegador não suporta o elemento de áudio.
            </audio>
        </div>
        <a href="calendar.html"><button class="btn btn-sm btn-outline-dark mt-2"><i class="fa-solid fa-caret-left"></i> Voltar</button></a>
    </div>`,
    `<h2>
        You look like my next mistake. Love’s a game, wanna play?<br />
        <small class="fw-bold text-dark fs-6 opacity-75">Traduzido: Você parece meu próximo erro. O amor é um jogo, quer jogar?</small>
        <br />
        <code class="fw-bold">Taylor</code>
    </h2>
    <div class="column">
        <h5><span class="badge bg-dark">Música de Hoje: <span class="text-color">Obsessions</span></span></h5>
        <div class="border border-light rounded border-audio">
            <audio controls id="audio" class="audio">
                <source src="audios/audio26.mp3" type="audio/mpeg" />
                Seu navegador não suporta o elemento de áudio.
            </audio>
        </div>
        <a href="calendar.html"><button class="btn btn-sm btn-outline-dark mt-2"><i class="fa-solid fa-caret-left"></i> Voltar</button></a>
    </div>`,
    `<h2>
        You look like my next mistake. Love’s a game, wanna play?<br />
        <small class="fw-bold text-dark fs-6 opacity-75">Traduzido: Você parece meu próximo erro. O amor é um jogo, quer jogar?</small>
        <br />
        <code class="fw-bold">Taylor</code>
    </h2>
    <div class="column">
        <h5><span class="badge bg-dark">Música de Hoje: <span class="text-color">Obsessions</span></span></h5>
        <div class="border border-light rounded border-audio">
            <audio controls id="audio" class="audio">
                <source src="audios/audio27.mp3" type="audio/mpeg" />
                Seu navegador não suporta o elemento de áudio.
            </audio>
        </div>
        <a href="calendar.html"><button class="btn btn-sm btn-outline-dark mt-2"><i class="fa-solid fa-caret-left"></i> Voltar</button></a>
    </div>`,
    `<h2>
        You look like my next mistake. Love’s a game, wanna play?<br />
        <small class="fw-bold text-dark fs-6 opacity-75">Traduzido: Você parece meu próximo erro. O amor é um jogo, quer jogar?</small>
        <br />
        <code class="fw-bold">Taylor</code>
    </h2>
    <div class="column">
        <h5><span class="badge bg-dark">Música de Hoje: <span class="text-color">Obsessions</span></span></h5>
        <div class="border border-light rounded border-audio">
            <audio controls id="audio" class="audio">
                <source src="audios/audio28.mp3" type="audio/mpeg" />
                Seu navegador não suporta o elemento de áudio.
            </audio>
        </div>
        <a href="calendar.html"><button class="btn btn-sm btn-outline-dark mt-2"><i class="fa-solid fa-caret-left"></i> Voltar</button></a>
    </div>`,
    `<h2>
        You look like my next mistake. Love’s a game, wanna play?<br />
        <small class="fw-bold text-dark fs-6 opacity-75">Traduzido: Você parece meu próximo erro. O amor é um jogo, quer jogar?</small>
        <br />
        <code class="fw-bold">Taylor</code>
    </h2>
    <div class="column">
        <h5><span class="badge bg-dark">Música de Hoje: <span class="text-color">Obsessions</span></span></h5>
        <div class="border border-light rounded border-audio">
            <audio controls id="audio" class="audio">
                <source src="audios/audio29.mp3" type="audio/mpeg" />
                Seu navegador não suporta o elemento de áudio.
            </audio>
        </div>
        <a href="calendar.html"><button class="btn btn-sm btn-outline-dark mt-2"><i class="fa-solid fa-caret-left"></i> Voltar</button></a>
    </div>`,
    `<h2>
        You look like my next mistake. Love’s a game, wanna play?<br />
        <small class="fw-bold text-dark fs-6 opacity-75">Traduzido: Você parece meu próximo erro. O amor é um jogo, quer jogar?</small>
        <br />
        <code class="fw-bold">Taylor</code>
    </h2>
    <div class="column">
        <h5><span class="badge bg-dark">Música de Hoje: <span class="text-color">Obsessions</span></span></h5>
        <div class="border border-light rounded border-audio">
            <audio controls id="audio" class="audio">
                <source src="audios/audio30.mp3" type="audio/mpeg" />
                Seu navegador não suporta o elemento de áudio.
            </audio>
        </div>
        <a href="calendar.html"><button class="btn btn-sm btn-outline-dark mt-2"><i class="fa-solid fa-caret-left"></i> Voltar</button></a>
    </div>`,
    `<h2>
        You look like my next mistake. Love’s a game, wanna play?<br />
        <small class="fw-bold text-dark fs-6 opacity-75">Traduzido: Você parece meu próximo erro. O amor é um jogo, quer jogar?</small>
        <br />
        <code class="fw-bold">Taylor</code>
    </h2>
    <div class="column">
        <h5><span class="badge bg-dark">Música de Hoje: <span class="text-color">Obsessions</span></span></h5>
        <div class="border border-light rounded border-audio">
            <audio controls id="audio" class="audio">
                <source src="audios/audio31.mp3" type="audio/mpeg" />
                Seu navegador não suporta o elemento de áudio.
            </audio>
        </div>
        <a href="calendar.html"><button class="btn btn-sm btn-outline-dark mt-2"><i class="fa-solid fa-caret-left"></i> Voltar</button></a>
    </div>`,
];

const mensagensObj = [
    {
        titulo:
            "Give a little, get a lot.\n    That's how you do it with love.",
        traducao:
            "Traduzido: Dê um pouco, receba muito.\n        É assim que se faz com o amor.",
        artista: "Marina",
        musica: "Obsessions",
        audio: "audios/audio1.mp3",
    },
    {
        titulo:
            "Women and men, we are equal.\n    But love will always be a game.",
        traducao:
            "Traduzido: Mulheres e homens, somos iguais.\n        Mas o amor sempre será um jogo.",
        artista: "Marina",
        musica: "Bubblegum Bitch",
        audio: "audios/audio2.mp3",
    },
    {
        titulo: "You never told me what made you strong and what made you weak",
        traducao:
            "Traduzido: Você nunca me disse o que te fez forte e o que te fez fraco",
        artista: "Marina",
        musica: "Froot",
        audio: "audios/audio3.mp3",
    },
    {
        titulo:
            "It's okay to say you have a weakness. You don't always have to be on top. Better to be hated than loved for what you're not.",
        traducao:
            "Traduzido: Tudo bem dizer que você tem um ponto fraco. Você não precisa estar sempre por cima. Melhor ser odiado do que amado pelo que você não é.",
        artista: "Marina",
        musica: "Staring Role",
        audio: "audios/audio4.mp3",
    },
    {
        titulo: "You look like my next mistake. Love’s a game, wanna play?",
        traducao:
            "Traduzido: Você parece meu próximo erro. O amor é um jogo, quer jogar?",
        artista: "Taylor",
        musica: "Are you satisfied?",
        audio: "audios/audio5.mp3",
    },
    {
        titulo: "You look like my next mistake. Love’s a game, wanna play?",
        traducao:
            "Traduzido: Você parece meu próximo erro. O amor é um jogo, quer jogar?",
        artista: "Taylor",
        musica: "Obsessions",
        audio: "audios/audio6.mp3",
    },
    {
        titulo: "You look like my next mistake. Love’s a game, wanna play?",
        traducao:
            "Traduzido: Você parece meu próximo erro. O amor é um jogo, quer jogar?",
        artista: "Taylor",
        musica: "Obsessions",
        audio: "audios/audio7.mp3",
    },
    {
        titulo: "You look like my next mistake. Love’s a game, wanna play?",
        traducao:
            "Traduzido: Você parece meu próximo erro. O amor é um jogo, quer jogar?",
        artista: "Taylor",
        musica: "Obsessions",
        audio: "audios/audio8.mp3",
    },
    {
        titulo: "You look like my next mistake. Love’s a game, wanna play?",
        traducao:
            "Traduzido: Você parece meu próximo erro. O amor é um jogo, quer jogar?",
        artista: "Taylor",
        musica: "Obsessions",
        audio: "audios/audio9.mp3",
    },
    {
        titulo: "You look like my next mistake. Love’s a game, wanna play?",
        traducao:
            "Traduzido: Você parece meu próximo erro. O amor é um jogo, quer jogar?",
        artista: "Taylor",
        musica: "Obsessions",
        audio: "audios/audio10.mp3",
    },
    {
        titulo: "You look like my next mistake. Love’s a game, wanna play?",
        traducao:
            "Traduzido: Você parece meu próximo erro. O amor é um jogo, quer jogar?",
        artista: "Taylor",
        musica: "Obsessions",
        audio: "audios/audio11.mp3",
    },
    {
        titulo: "You look like my next mistake. Love’s a game, wanna play?",
        traducao:
            "Traduzido: Você parece meu próximo erro. O amor é um jogo, quer jogar?",
        artista: "Taylor",
        musica: "Obsessions",
        audio: "audios/audio12.mp3",
    },
    {
        titulo: "You look like my next mistake. Love’s a game, wanna play?",
        traducao:
            "Traduzido: Você parece meu próximo erro. O amor é um jogo, quer jogar?",
        artista: "Taylor",
        musica: "Obsessions",
        audio: "audios/audio13.mp3",
    },
    {
        titulo: "You look like my next mistake. Love’s a game, wanna play?",
        traducao:
            "Traduzido: Você parece meu próximo erro. O amor é um jogo, quer jogar?",
        artista: "Taylor",
        musica: "Obsessions",
        audio: "audios/audio14.mp3",
    },
    {
        titulo: "You look like my next mistake. Love’s a game, wanna play?",
        traducao:
            "Traduzido: Você parece meu próximo erro. O amor é um jogo, quer jogar?",
        artista: "Taylor",
        musica: "Obsessions",
        audio: "audios/audio15.mp3",
    },
    {
        titulo: "You look like my next mistake. Love’s a game, wanna play?",
        traducao:
            "Traduzido: Você parece meu próximo erro. O amor é um jogo, quer jogar?",
        artista: "Taylor",
        musica: "Obsessions",
        audio: "audios/audio16.mp3",
    },
    {
        titulo: "You look like my next mistake. Love’s a game, wanna play?",
        traducao:
            "Traduzido: Você parece meu próximo erro. O amor é um jogo, quer jogar?",
        artista: "Taylor",
        musica: "Obsessions",
        audio: "audios/audio17.mp3",
    },
    {
        titulo: "You look like my next mistake. Love’s a game, wanna play?",
        traducao:
            "Traduzido: Você parece meu próximo erro. O amor é um jogo, quer jogar?",
        artista: "Taylor",
        musica: "Obsessions",
        audio: "audios/audio18.mp3",
    },
    {
        titulo: "You look like my next mistake. Love’s a game, wanna play?",
        traducao:
            "Traduzido: Você parece meu próximo erro. O amor é um jogo, quer jogar?",
        artista: "Taylor",
        musica: "Obsessions",
        audio: "audios/audio19.mp3",
    },
    {
        titulo: "You look like my next mistake. Love’s a game, wanna play?",
        traducao:
            "Traduzido: Você parece meu próximo erro. O amor é um jogo, quer jogar?",
        artista: "Taylor",
        musica: "Obsessions",
        audio: "audios/audio20.mp3",
    },
    {
        titulo: "You look like my next mistake. Love’s a game, wanna play?",
        traducao:
            "Traduzido: Você parece meu próximo erro. O amor é um jogo, quer jogar?",
        artista: "Taylor",
        musica: "Obsessions",
        audio: "audios/audio21.mp3",
    },
    {
        titulo: "You look like my next mistake. Love’s a game, wanna play?",
        traducao:
            "Traduzido: Você parece meu próximo erro. O amor é um jogo, quer jogar?",
        artista: "Taylor",
        musica: "Obsessions",
        audio: "audios/audio22.mp3",
    },
    {
        titulo: "You look like my next mistake. Love’s a game, wanna play?",
        traducao:
            "Traduzido: Você parece meu próximo erro. O amor é um jogo, quer jogar?",
        artista: "Taylor",
        musica: "Obsessions",
        audio: "audios/audio23.mp3",
    },
    {
        titulo: "You look like my next mistake. Love’s a game, wanna play?",
        traducao:
            "Traduzido: Você parece meu próximo erro. O amor é um jogo, quer jogar?",
        artista: "Taylor",
        musica: "Obsessions",
        audio: "audios/audio24.mp3",
    },
    {
        titulo: "You look like my next mistake. Love’s a game, wanna play?",
        traducao:
            "Traduzido: Você parece meu próximo erro. O amor é um jogo, quer jogar?",
        artista: "Taylor",
        musica: "Obsessions",
        audio: "audios/audio25.mp3",
    },
    {
        titulo: "You look like my next mistake. Love’s a game, wanna play?",
        traducao:
            "Traduzido: Você parece meu próximo erro. O amor é um jogo, quer jogar?",
        artista: "Taylor",
        musica: "Obsessions",
        audio: "audios/audio26.mp3",
    },
    {
        titulo: "You look like my next mistake. Love’s a game, wanna play?",
        traducao:
            "Traduzido: Você parece meu próximo erro. O amor é um jogo, quer jogar?",
        artista: "Taylor",
        musica: "Obsessions",
        audio: "audios/audio27.mp3",
    },
    {
        titulo: "You look like my next mistake. Love’s a game, wanna play?",
        traducao:
            "Traduzido: Você parece meu próximo erro. O amor é um jogo, quer jogar?",
        artista: "Taylor",
        musica: "Obsessions",
        audio: "audios/audio28.mp3",
    },
    {
        titulo: "You look like my next mistake. Love’s a game, wanna play?",
        traducao:
            "Traduzido: Você parece meu próximo erro. O amor é um jogo, quer jogar?",
        artista: "Taylor",
        musica: "Obsessions",
        audio: "audios/audio29.mp3",
    },
    {
        titulo: "You look like my next mistake. Love’s a game, wanna play?",
        traducao:
            "Traduzido: Você parece meu próximo erro. O amor é um jogo, quer jogar?",
        artista: "Taylor",
        musica: "Obsessions",
        audio: "audios/audio30.mp3",
    },
    {
        titulo: "You look like my next mistake. Love’s a game, wanna play?",
        traducao:
            "Traduzido: Você parece meu próximo erro. O amor é um jogo, quer jogar?",
        artista: "Taylor",
        musica: "Obsessions",
        audio: "audios/audio31.mp3",
    },
];

function generateHTML(msg) {
    const dia = document.createElement("div");
    dia.classList.add("mensagem-dia");

    dia.innerHTML = `
        <h2 class="title-message">${msg.titulo}</h2>
        <p class="mb-2">
            <small class="subtitle-message">${msg.traducao}</small>
        </p>
        
        <code class="code-message">${msg.artista}</code>
        
        <div class="column mt-2">
            <p class="p-badge-message">
                <span class="badge-message">
                    Música de Hoje: <span class="text-color">${msg.musica}</span>
                </span>
            </p>
            <div class="border border-light rounded border-audio">
                <audio controls id="audio" class="audio">
                    <source src="${msg.audio}" type="audio/mpeg" />
                    Seu navegador não suporta o elemento de áudio.
                </audio>
            </div>
            <button class="btn-spotify" id="click">Clique para abrir no Spotify</button>
            <section id="spotify">
                <iframe style="border-radius:12px; margin-top: 10px" src="https://open.spotify.com/embed/playlist/4UYT29OhraGoE2bnPdFDP0?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </section>
        </div>
    `;

    return dia;
}

function adicionarDiasDoMes() {
    const dataAtual = new Date();
    const anoAtual = dataAtual.getFullYear();
    const mesAtual = dataAtual.getMonth();
    const diaAtual = dataAtual.getDate();
    const diasNoMes = new Date(anoAtual, mesAtual + 1, 0).getDate();

    for (let i = 1; i <= diasNoMes; i++) {
        const novoDia = document.createElement("div");
        novoDia.textContent = i;
        novoDia.classList.add("dia-mes");
        if (i > diaAtual) {
            novoDia.classList.add("dia-inativo");
        } else {
            novoDia.addEventListener("click", function () {
                exibirMensagem(i);
            });
        }

        infoDiaElement.appendChild(novoDia);
    }
}

function exibirMensagem(dia) {
    const mensagem = generateHTML(mensagensObj[dia - 1]);
    const mensagemContainer = document.querySelector(".mensagem");

    mensagemContainer.innerHTML = "";

    mensagemContainer.appendChild(mensagem);

    const botao = document.getElementById("click");
    const spotifyDiv = document.getElementById("spotify");

    botao.addEventListener("click", function () {
        const estaVisivel = spotifyDiv.clientHeight !== 0;

        if (estaVisivel) {
            spotifyDiv.style.height = "0";
        } else {
            // Define uma altura fixa ou 'auto' para mostrar todo o conteúdo
            spotifyDiv.style.height = "180px"; // Substitua com a altura desejada ou 'auto'
        }
    });
}

adicionarDiasDoMes();
