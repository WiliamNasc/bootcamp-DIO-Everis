/* Generators são:
   - Funções com pausa;
   - Trabalham usando iteradores;
   - Controla a função (seu fluxo, podendo pausá-la, por exemplo);
   - Permite enviar dados de fora da função, para dentro dela;
   - Pode ser usado, para construir iteradores.
*/

function* hello() { // function + "*" = transforma a função em um generator.
    console.log('Hello');
    yield 1; // pausa o próximo retorno, mostrando apenas o conteúdo de cima, e um value, no caso 1.

    console.log('From');
    const value = yield 2;

    console.log(value);
}

const iteratorGeneratorHello = hello();

console.log(iteratorGeneratorHello.next());
console.log(iteratorGeneratorHello.next());
console.log(iteratorGeneratorHello.next('Function\nOutside'));

function* numerosNaturais() {
    let numero = 0;
    while (true) {
        yield numero;
        numero++;
    }
}

const iteratorGeneratorNumerosNaturais = numerosNaturais();
console.log(iteratorGeneratorNumerosNaturais.next());
console.log(iteratorGeneratorNumerosNaturais.next());
console.log(iteratorGeneratorNumerosNaturais.next());
console.log(iteratorGeneratorNumerosNaturais.next());

const objeto1 = {
    values: [1, 2, 3, 4],
    *[Symbol.iterator]() {
        for (let i = 0; i < this.values.length; i++) {
            yield this.values[i];
        }
    }
};

for (const value of objeto1) {
    console.log(value);
}
