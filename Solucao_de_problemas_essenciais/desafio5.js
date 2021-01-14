let entrada = '';
let joias = [];

while (!entrada) {
    entrada = '((' // gets()
    joias.push(entrada);
    entrada = '((';
    joias.push(entrada);
    entrada = '(';
    joias.push(entrada);
    entrada = '))';
    joias.push(entrada);
    entrada = '))';
    joias.push(entrada);
}

let tiposJoias = joias.filter((elemento, indice, vetor) => {

 return vetor.indexOf(elemento) === indice;

});

console.log(joias);
console.log(tiposJoias.length);