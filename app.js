//let titulo = document.querySelector('h1');
//let paragrafo = document.querySelector('p');

//titulo.innerHTML = ' Jogo do  numero secreto ';
//paragrafo.innerHTML = 'Selecione um numero entre 1 e 100';

//let tag = document.querySelector(tag)
// tag.innerHTML = texto
let listaDeNumeros = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


function verificarChute() {
      let chute = document.querySelector('input').value
      if (chute == numeroSecreto) {
            selecionarTag('h1', 'Você acertou!!')
            let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
            let mensagemTentativas = `Você descobriu o numero secreto com ${tentativas} ${palavraTentativa}`
            selecionarTag('p', mensagemTentativas)
            document.getElementById('reiniciar').removeAttribute('disabled')

      } else {
            if (chute > numeroSecreto) {
                  selecionarTag('h1', 'Você errou!!')
                  selecionarTag('p', 'Tente um numero menor')
            } else {
                  selecionarTag('h1', 'Você errou!!')
                  selecionarTag('p', 'Tente um numero maior')
            }
            tentativas++
            limparCampo()
      }
}

function limparCampo() {
      chute = document.querySelector('input');
      chute.value = ' '
}

function selecionarTag(nomeTag, textoExibido) {
      let campo = document.querySelector(nomeTag);
      campo.innerHTML = `${textoExibido}`
      if ('speechSynthesis' in window) {
            let utterance = new SpeechSynthesisUtterance(textoExibido);
            utterance.lang = 'pt-BR';
            utterance.rate = 1.2;
            window.speechSynthesis.speak(utterance);
      } else {
            console.log("Web Speech API não suportada neste navegador.");
      }}

      function gerarNumeroAleatorio() {
            let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1)
            let quantidadeDeElementosNaLista = listaDeNumeros.length;

            if (quantidadeDeElementosNaLista == 5) {
                  listaDeNumeros = []
            }

            if (listaDeNumeros.includes(numeroEscolhido)) {
                  return gerarNumeroAleatorio()
            } else {
                  listaDeNumeros.push(numeroEscolhido)
                  return numeroEscolhido
            }
      }

      function reiniciarJogo() {
            numeroSecreto = gerarNumeroAleatorio()
            limparCampo()
            tentativas = 1
            document.getElementById('reiniciar').setAttribute('disabled', true)
            exibirMensagemInicial()
      }

      function exibirMensagemInicial() {
            selecionarTag('h1', 'Jogo do  numero secreto ')
            selecionarTag('p', 'Selecione um numero entre 1 e 10')
      }

      exibirMensagemInicial()