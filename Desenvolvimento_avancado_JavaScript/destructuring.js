/* Permite:
    - Destruir arrays, e atribuir cada um de seus valores,
      em variáveis;
    - Destruir objetos;
    - Destruie objetos, dentro de objetos
*/

var filmes = ['Ação', 'Terror', 'Comédia', 'Romance', ['Quadrinhos']];
var filmeAção = filmes[0], filmeTerror = [1], filmeComedia = [2], filmeRomance = [3], filmeQuadrinhos = filmes[4][0];
var [filmeAção1, filmeTerror1, filmeComedia1, filmeRomance, [filmeQuadrinhos1]] = ['Ação', 'Terror', 'Comédia', 'Romance', ['Quadrinhos']];

console.log('Atribuiçã antiga: ', filmeQuadrinhos, '\nAtribuição com Destruturing: ', filmeQuadrinhos1);

var objeto = {
    nome: 'Whinderson'
};

var nome = objeto.nome;

var { nome: nome1 } = objeto;

console.log('Forma antiga: ', nome, '\nCom Destruturing: ', nome1);

var vetor = [1, 2, 3];
var [numeroUm, numeroDois] = vetor;

console.log(numeroUm, numeroDois);

var objeto1 = {
    nome: 'Wiliam',
    prop: {
        idade: 21,
        coresFavoritas: ['Preto', 'Azul', 'Vermelho']
    }
};
var { prop: { idade: idade2, coresFavoritas: [cor1, cor2, cor3] } } = objeto1;
console.log(idade2, cor1, cor2, cor3);

var vetor1 = [{ nome: 'Wiliam', idade: 21, tipo: 'Legal' }];
var [{ nome: nomePessoa, idade: idadePessoa, tipo: tipoPessoa }] = vetor1;
console.log(nomePessoa, idadePessoa, tipoPessoa);

function soma([a, b] = [0, 0]) {
    return a + b;
}

console.log(soma([1, 2]));

function multiplicacao({ a, b }) {
    return a * b;
}

console.log(multiplicacao({ a: 2, b: 3 }));