let entrada = 0, r = 3 /*r=3, é equivalente a r=gets()*/, v = 0, soma = 0, contaSomas = 0;

while (!entrada) {
    entrada = 3;
    entrada = 1;
    entrada = 20;
    if (entrada > r) {
        v = r;
        r = entrada;
        console.log('v: ', v);
        console.log('r: ', r);
    }
}

while (soma < r) {
    soma = (v + contaSomas) + soma;
    contaSomas++;
}

console.log('soma: ', soma);
console.log('qtdeSomas: ', contaSomas);