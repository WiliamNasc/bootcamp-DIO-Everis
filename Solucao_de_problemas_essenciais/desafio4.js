let contaNotasValidas = 0;
let notas = [];

while (true) {
    let nota = parseFloat(gets());

    if (!nota)
        break;

    if (nota >= 0 && nota <= 10) {
        notas.push(nota);
        contaNotasValidas++;
        if (contaNotasValidas === 2)
            break;
    } else {
        console.log('nota invalida');
    }
}

let totalNotas = notas.reduce((total, nota) => {
    return total += nota;
}, 0);
let mediaNotas = (totalNotas / 2).toFixed(2);

console.log('media = ' + mediaNotas);