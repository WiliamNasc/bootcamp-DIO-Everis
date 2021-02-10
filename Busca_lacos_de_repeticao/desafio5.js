let tamanhoVetor = parseInt(gets());
let vetor = Array(tamanhoVetor);
let entrada = gets()
    .replace(/\s/g, ',')
    .trim()
    .split(',')
;

for (let i = 0; i < tamanhoVetor; i++) {
    vetor[i] = parseFloat(entrada[i]);
}

console.log(
    'Menor valor: ',
    Math.min(...vetor),
    '\nPosicao: ',
    vetor.indexOf(Math.min(...vetor))
);