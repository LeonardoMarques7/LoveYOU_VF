// adicionarDiasDoMes();

const infoDiaElement = document.querySelector(".dias");
const calendarioElement = document.querySelector(".calendario");

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
        titulo: "TV taught me what to feel. Now real life has no appeal",
        traducao:
            "Traduzido: A TV me ensinou o que sentir. Agora a vida real não tem nenhum apel",
        artista: "Marina",
        musica: "Are you Satisfied?",
        audio: "audios/audio5.mp3",
    },
    {
        titulo:
            "Flowers in my hair, I belong to the sea. Where we used to be, sitting by the orange trees. Summer is in the air, bodies in the heat. Just you and me, sitting by the orange trees.",
        traducao:
            "Traduzido: Flores no meu cabelo, eu pertenço ao mar. Onde costumávamos estar, sentados junto às laranjeiras. O verão está no ar, corpos no calor. Só você e eu, sentados junto às laranjeiras",
        artista: "Marina",
        musica: "Rootless",
        audio: "audios/audio6.mp3",
    },
    {
        titulo: "You can't have peace without war.",
        traducao: "Traduzido: Você não pode ter paz sem uma guerra.",
        artista: "Marina",
        musica: "Hermit the Frog",
        audio: "audios/audio7.mp3",
    },
    {
        titulo: "Can you feel my heart?",
        traducao: "Traduzido: Você consegue sentir meu coração?",
        artista: "Bring Me The Horizon",
        musica: "sTraNgeRs",
        audio: "audios/audio8.mp3",
    },
    {
        titulo:
            "Remember, if you write anything nasty about me, I'll show up and blow up your bathroom.",
        traducao:
            "Traduzido: Lembre-se, se você escrever qualquer coisa desagradável sobre mim, vou aparecer e explodir seu banheiro.",
        artista: "Hole",
        musica: "Violet",
        audio: "audios/audio9.mp3",
    },
    {
        titulo:
            "Do I honestly always seem to be dreaming of something I can never be?",
        traducao:
            "Traduzido: Honestamente pareço estar sempre sonhando com algo que nunca poderei ser?",
        artista: "Korn",
        musica: "H@rd3r",
        audio: "audios/audio10.mp3",
    },
    {
        titulo:
            "If you're spreading light, you don't care where the sunshine goes.",
        traducao:
            "Traduzido: Se você estiver espalhando a luz, você não se importa onde vai o sol.",
        artista: "Nelly Furtado",
        musica: "Maneater",
        audio: "audios/audio11.mp3",
    },
    {
        titulo:
            "You can tell me when it’s over, if the high was worth the pain.",
        traducao:
            "Traduzido: Você pode me dizer quando acabar se os momentos bons superaram a dor.",
        artista: "Taylor",
        musica: "Out of the Woods ",
        audio: "audios/audio12.mp3",
    },
    {
        titulo: "You look like my next mistake. Love’s a game, wanna play?",
        traducao:
            "Traduzido: Você parece meu próximo erro. O amor é um jogo, quer jogar?",
        artista: "Taylor",
        musica: "Bejeweled",
        audio: "audios/audio13.mp3",
    },
    {
        titulo: "And all the fears you hold so dear.",
        traducao: "Traduzido: E todos os medos a que você tanto se apega.",
        artista: "Bôa",
        musica: "Duvet",
        audio: "audios/audio14.mp3",
    },
    {
        titulo: "What you waiting",
        traducao: "Traduzido: O que você está esperando",
        artista: "Gwen Stefani",
        musica: "What You Waiting For?",
        audio: "audios/audio15.mp3",
    },
    {
        titulo: "Tired image of a star.",
        traducao: "Traduzido: Imagem cansada de uma estrela.",
        artista: "Marina",
        musica: "Sex Yeah",
        audio: "audios/audio16.mp3",
    },
    {
        titulo: "Yeah, it's time to forget.",
        traducao: "Traduzido: Sim, é hora de esquecer.",
        artista: "Marina",
        musica: "Forget",
        audio: "audios/audio17.mp3",
    },
    {
        titulo: "You're so gorgeous.",
        traducao: "Traduzido: Você é tão deslumbrante.",
        artista: "Taylor",
        musica: "Gorgeous",
        audio: "audios/audio18.mp3",
    },
    {
        titulo: "Beating me in a war I can't win.",
        traducao:
            "Traduzido: Derrotando-me em uma guerra que não posso vencer.",
        artista: "Taylor",
        musica: "Voices",
        audio: "audios/audio19.mp3",
    },
    {
        titulo: "Honey, look at me.",
        traducao: "Traduzido: Querido, olhe para mim.",
        artista: "Mitski",
        musica: "Brand New City",
        audio: "audios/audio20.mp3",
    },
    {
        titulo: "I need to talk to you, I need to feel it deeply.",
        traducao:
            "Traduzido: Eu preciso falar com você, preciso sentir isso profundamente.",
        artista: "Bôa",
        musica: "Deeply",
        audio: "audios/audio21.mp3",
    },
    {
        titulo: "I ain't no hollaback girl.",
        traducao: "Traduzido: Eu não sou uma garota qualquer",
        artista: "Gwen Stefani",
        musica: "Hollaback Girl",
        audio: "audios/audio22.mp3",
    },
    {
        titulo: "I touch my phone as if it's your face.",
        traducao:
            "Traduzido: Eu toco no meu celular como se fosse o seu rosto.",
        artista: "Taylor",
        musica: "You're On Your Own, Kid",
        audio: "audios/audio23.mp3",
    },
    {
        titulo: "'Cause I dance like an aristocrat.",
        traducao: "Traduzido: Porque eu danço como um aristocrata.",
        artista: "Poppy",
        musica: "Aristocrat",
        audio: "audios/audio24.mp3",
    },
    {
        titulo: "私がいる限り、あなたは最強です。",
        traducao:
            "Traduzido: Enquanto eu estiver aqui, você será o mais forte.",
        artista: "Haikyuu",
        musica: "Fly high",
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

function generateHTML(mensagensObj) {
    const dia = document.createElement("div");
    dia.classList.add("mensagem-dia");

    dia.innerHTML = `
        <h2 class="title-message">${mensagensObj.titulo}</h2>
        <p class="mb-2">
            <small class="subtitle-message">${mensagensObj.traducao}</small>
        </p>
        
        <code class="code-message">${mensagensObj.artista}</code>
        
        <div class="column mt-2">
            <p class="p-badge-message">
                <span class="badge-message">
                    Música de Hoje: <span class="text-color">${mensagensObj.musica}</span>
                </span>
            </p>
            <div class="border border-light rounded border-audio">
                <audio controls id="audio" class="audio">
                    <source src="${mensagensObj.audio}" type="audio/mpeg" />
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
