// Objetivos
// OBJETIVO 1 - quando clicarmos na seta de avançar temos que mostrar o proximo 
// cartao da lista
  
// passo 1 - dar um jeito de pegar o elemento HTML da seta avancar
// passo 2 - dar um jeito de identificar o clique do usuário na seta avançar
// passo 3 - fazer aparecer o próximo cartão da lista
// passo 4 - buscar o cartão que esta selecionado e esconder

// OBJETIVO 2 - quando clicarmos na seta de voltar temos que mostrar o cartão 
// anterior da lista
  
// passo 1 - dar um jeito de pegar o elemento HTML da seta voltar
// passo 2 - dar um jeito de identificar o clique do usuário na seta voltar
// passo 3 - fazer aparecer o cartão anterior da lista
// passo 4 - buscar o cartão que esta selecionado e esconder

const btn_avancar = document.getElementById('btn-avancar');
const btn_voltar = document.getElementById('btn-voltar');
const cartoes = document.querySelectorAll('.cartao')

let cartaoAtual = 0;

btn_avancar.addEventListener('click', function(){
    const forUltimoCartao = cartaoAtual === cartoes.length - 1
    if (forUltimoCartao) return;

    esconderCartaoSelecionado();
    cartaoAtual += 1
    adicionarSelecionado();
})

btn_voltar.addEventListener('click', function(){
    const forPrimeiroCartao = cartaoAtual <= 0
    if (forPrimeiroCartao) return;

    esconderCartaoSelecionado();
    cartaoAtual -= 1
    adicionarSelecionado();
})








function adicionarSelecionado() {
    cartoes[cartaoAtual].classList.add('selecionado');
}

function esconderCartaoSelecionado() {
    const cartaoSelecionado = document.querySelector('.selecionado');
    cartaoSelecionado.classList.remove('selecionado');
}
