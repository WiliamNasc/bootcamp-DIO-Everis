let R = parseInt(gets());
let V = 0;
let soma = 0;
let contaSomas = 0;

while (V <= R) {
    V = parseInt(gets());
}

while (soma <= V) {
    soma = (R + contaSomas) + soma;
    contaSomas++;
}

console.log(contaSomas);