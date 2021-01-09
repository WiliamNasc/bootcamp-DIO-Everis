/* Symbol é:
   - Um identificador único;
   - Não pode ser reescrito;
   - É uma forma de mostrar que determinada propriedade,
     não deve ser manipulada;
   - O symbol pode ser acessado (e manipulado) por um/ns método/s (Well known symbols), ou por quem,
     estiver o utilizando em seu contexto 
*/

const uniqueId = Symbol('Unique ID');
const uniqueId2 = Symbol('Unique ID');
console.log(uniqueId, uniqueId2);
console.log(uniqueId === uniqueId2); // retorna false, a descrição pode ser a mesma, mais cada objeto é único.

const uniqueIdObjeto = Symbol('Unique ID - Objeto');
const objeto = {
    [uniqueIdObjeto]: 'Id'
};
console.log(objeto);
console.log(Object.getOwnPropertySymbols(objeto));

const vetor = [1, 2, 3, 4];
const iteradorSymbolVetor = vetor[Symbol.iterator](); // cria uma interface, permitindo o consumo (manipulação), de uma lista, ou quaisquer estrutura de dados.
// console.log(iteradorSymbolVetor.next());
// console.log(iteradorSymbolVetor.next());
// console.log(iteradorSymbolVetor.next());
// console.log(iteradorSymbolVetor.next());
// console.log(iteradorSymbolVetor.next()); // retorna um valor undefined, e o done true, isso significa que você chegou ao fim dos conteúdos do iterador.
while (true) { // forma antiga de percorrer o iterador
    let { value, done } = iteradorSymbolVetor.next();
    if (done) {
        break;
    }
    console.log(value);
}
for (let value of vetor) { // forma nova
    console.log(value);
}

const texto = 'Boa noite';
for (const value of texto) {
    console.log(value);
}

/* Tornando um objeto iterável */

const objeto1 = {
    values: [1, 2, 3, 4],
    [Symbol.iterator]() {
        let i = 0;

        return {
            next: () => {
                i++;

                return {
                    value: this.values[i - 1],
                    done: i > this.values.length
                };
            }
        };
    }
};
for (const value of objeto1) {
    console.log(value);
}

const vetor2 = [...objeto1]; // Após fazer as implementações, que transformam a característica de um objeto em interável, é possível utilizar o spread.
console.log(vetor2);