let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function exibirMensagemNoConsole() {
    console.log('O botão foi clicado');
}

function exibirAlerta() {
    alert("Eu amo JS");
}

function exibirPrompt() {
    let nomeCidade = prompt('Digite uma cidade do Brasil:');
    alert(`Estive em ${nomeCidade} e lembrei de você`)
}

function somandoDoisNumeros() {
    let num1 = parseInt(prompt('Digite o primeiro número:'));
    let num2 = parseInt(prompt('Digite o segundo número:'));
    let resultado = num1 + num2;
    alert(`${num1} + ${num2} = ${resultado}`);
}