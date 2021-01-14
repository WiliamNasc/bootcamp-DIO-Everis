let contaNotasValidas = 0;
let notas = [];

while (true) {
    let nota = parseFloat(gets()).toFixed(2);

    if (!nota)
        break;

    if (nota >= 0 && nota <= 10) {
        notas.push(nota);
        contaNotasValidas++;
        if (contaNotasValidas === 2)
            break
    } else {
        console.log('nota inválida');
    }
}

let totalNotas = notas.reduce((total, nota) => {
    return total += nota;
}, 0);

let mediaNotas = totalNotas / 2;

console.log('media = ' , mediaNotas);