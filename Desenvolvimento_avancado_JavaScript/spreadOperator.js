/*
    Podemos utilizar o spread operator em: 
    Strings;
    arrays;
    literal objects;
    objetos iteráveis;
    construção de arrays.
    
    - Ele nos ajuda a quebrar os argumentos recebidos, em uma função.
    - Não pode ser usado na construção de objetos, que não sejam iteráveis.
*/

const multiplicacao = (...argumentos) => argumentos.reduce((valorAcumulado, valor) => valorAcumulado * valor, 1);

const executaMultiplicacao = (...restoArgumentos) => {
    return multiplicacao(...restoArgumentos);
};

console.log(executaMultiplicacao(2, 3, 4, 5, 2));

const texto = 'The Batman';

function logArgs(...args) {
    console.log(args);
}

logArgs(...texto);

const vetor = [1, 2, 3, 4];
logArgs(...vetor);

const vetor2 = [...vetor, 5, 6, 7];
const vetor3 = [...vetor, ...vetor2, 8, 9, 10];
console.log(vetor3);

const objeto = {
    nome: 'Wiliam'
}

/*
const vetor4 = [...objeto]; // irá ocorrer um erro, pois estamos tentando criar array, a partir de um objeto.
*/

/* A ordem de declaração das propriedades de um objeto são importantes,
   pois dependendo se "...objeto" for declarado depois de nome: 'José', por exemplo,
   a última declaração irá sobreescrever a primeira.
*/

const objeto1 = {
    ...objeto,
    idade: 21
}

console.log(objeto1);

const vilao = {
    personagem: 'Joker',
    historia: 'A piada mortal'
}

const heroi = {
    personagem: 'Batman',
    historia: 'O cavaleiro das trevas'
};

const personagens = {
    ...vilao,
    ...heroi
};

/* Irá mostrar apenas as informações do heroi,
   pelas propriedades de vilao e heroi serem iguais,
   o último a ser "clonado", é o que será guardado,
   no novo objeto.
*/
console.log(personagens);

/* Clone raso, caso o objeto clonado,
   tenha subojetos, eles poderam ser alterados,
   pelo novo objeto criado;
*/

const objeto6 = {
    nome: 'Carlos',
    subojeto: {
        nome: 'Wiliam'
    }
};

console.log('Clone Raso - Problema. \nAntes de Clonar: \n', objeto6);

const objeto7 = { ...objeto6 };

objeto7.subojeto.nome = 'José';

console.log('Depois de clonar, e alterar o subobjeto, no novo objeto criado: \n', objeto6);

/* Contornando o problema de clone raso,
   na alteração de subojetos.
*/

const objeto8 = {
    nome: 'Carlos',
    subojeto: {
        nome: 'Wiliam'
    }
};

console.log('Clone Raso - Solução. \nAntes de Clonar: \n', objeto8);

const objeto9 = { ...objeto8, subobjeto: { ...objeto8.subojeto } };

objeto7.subojeto.nome = 'José';

console.log('Depois de clonar, e alterar o subobjeto, no novo objeto criado: \n', objeto8);

