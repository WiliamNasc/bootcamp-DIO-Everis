function somaComFunction(...argumentos) {
    console.log('Argumentos recebidos: ', argumentos);
    return argumentos.reduce((valorAcumulado, valor) => valorAcumulado + valor, 0);
}

const somaComArrowFunction = (a, b, ...restoArgumentos) => {
    console.log('Argumentos recebidos: ', a, b, restoArgumentos);
    return a + b + restoArgumentos.reduce((valorAcumulado, valor) => valorAcumulado + valor, 0);
}

console.log('Soma (com function) = ' + somaComFunction(2, 2, 4, 4, 4, 2));
console.log('Soma (com arrow function) = ' + somaComArrowFunction(1, 2, 3, 4, 5, 6, 1));