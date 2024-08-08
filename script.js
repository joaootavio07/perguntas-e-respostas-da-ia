const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "PUBG, ou PlayerUnknown's Battlegrounds, é um jogo de batalha real desenvolvido e publicado pela PUBG Corporation,uma subsidiária da empresa sul-coreana Bluehole.  Lançado inicialmente para PC em março de 2017, PUBG foi um dos primeiros jogos a popularizar o gênero de batalha real em larga escala. Qual voce prefere ?",
        alternativas: [
            {
                texto: "mobile",
                afirmacao: "prefere jogar no celular "
            },
            {
                texto: "computador",
                afirmacao: "prefere jogar no computador"
            }
        ]
    },
    {
        enunciado: "PUBG teve um impacto significativo na indústria de jogos, popularizando o gênero de batalha real e inspirando muitos outros jogos do mesmo estilo. Sua combinação de intensidade, estratégia e imersão continua a atrair jogadores ao redor do mundo, garantindo seu lugar como um dos jogos mais influentes da última década. Qual e o seu estilo de jogo ?",
        alternativas: [
            {
                texto: "rushar",
                afirmacao: "ele e confiante e um ótimo jogador"
            },
            {
                texto: "camperar",
                afirmacao: "ele gosta de traçar estrategias e não é muito confiante"
            }
        ]
    },
    {
        enunciado: "O PUBG é um jogo que que você pode comprar meudas dentro do jogo para comprar skins e etc. O Se você escolher a versão mobali o nome dessa moeda e dentro do jogo é UC, se você escolheu a versão de pc o nome e G-COIN. Você ja gastou? Você gosta de gastar dinheiro com jogo ?",
        alternativas: [
            {
                texto: "Sim, gosto muito, me sinto muito bom quando estou com skins",
                afirmacao: "É um apreciador de skins"
            },
            {
                texto: "Nao, acho isso desnecessário e não tenho muito dinheiro para gastar",
                afirmacao: "É mas humilde e gosta de guardar dinheiro"
            }
        ]
    },
    
   
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "sobre voce no PUBG";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
