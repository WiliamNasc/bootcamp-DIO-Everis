function emitirMsg() {
    document.getElementById('mensagem-agradecimento').innerHTML = '<b>eeee</b>';
}

function redirecionarOutraPagina() {
    window.open('http://www.google.com.br'); // abre o link em outra janela
    window.location.href = 'http://www.google.com.br'; // abre o link na mesma janela
}

function trocarConteudo(elemento) {
    //document.getElementById('mensagem-mouse').innerHTML = 'Mouse passou por aqui';
    elemento.innerHTML = 'Mouse passou por aqui';
}

function voltarConteudo(elemento) {
    //document.getElementById('mensagem-mouse').innerHTML = 'Passe o mouse aqui';
    elemento.innerHTML = 'Passe ou mouse aqui';
}

function carregarPagina() {
    console.log('Página carregada');
}

function selecionado(elemento) {
    console.log(elemento.value);
}

/* Funções
function soma (a, b) {
    return a + b;
}

function setReplace (frase, conteudo, novoConteudo) {
    return frase.replace(conteudo, novoConteudo);
}

function eMaiorDeIdade (idade) {
    if (idade >= 18) {
        return true;
    } else {
        return false;
    }
}

console.log(soma(2, 2));
console.log(setReplace('Vai Palmeiras !!!', 'Palmeiras',  'Corinthians'));
console.log(eMaiorDeIdade(18));
*/

/* Trabalhando com Data
 var data = new Date();
 console.log(data.getDate());
 console.log(data.getHours());
 console.log(data.getMinutes());
 */

/* Estrutura básica, de repetição
var cont = 1;
while (cont <= 5) {
    console.log('Contando no while ' + cont);
    cont++;
}

for (let i = 1; i <= 5; i++) {
    console.log('Contando no for ' + i);
}
*/

/* Estrutura básica, de decisão
var idade = prompt('Qual a sua idade ?');

if (idade >= 18) {
    console.log('Maior de idade');
} else {
    console.log('Menor de idade');
}
*/

/* Primeiras aulas
var nome = 'Wiliam Nascimento';
var idade = 21;
var frase = 'Palmeiras têm mundial.';
var lista = ['Snyder´s - Justice League', 'The Batman', 'Joker'];
var time = {
    nome: 'Corinthians',
    fundacao: 1910
};
var times = [
    {
        nome: 'Corinthians',
        fundacao: 1910
    },
    {
        nome: 'Botafogo',
        fundacao: 1910
    }
];

console.log(time);
console.log(time.nome);
console.log(times);
console.log(times[1].nome);

//alert(nome + ' têm ' + idade + ' anos.');

console.log('Nome: ' + nome + "\nIdade: " + idade);
console.log(frase.replace('têm', 'não têm'));
console.log(lista);
console.log(lista[0]);
lista.push('Suicide Squad');
console.log(lista);
lista.pop();
console.log(lista);
console.log('Tamanho da Lista: ' + lista.length);
console.log(lista.toString()[0]);
console.log(lista.join(' | '));
*/