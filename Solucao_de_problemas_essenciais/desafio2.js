let numeroTartarugasGrupo = 10;
let velocidadesTarturugas = '19 9 1 4 5 8 6 11 9 7'.split(' ');
console.log(velocidadesTarturugas);

let maiorVelocidadeTartarugaGrupo = velocidadesTarturugas.reduce((velocidadeMaxima, velocidade) => {
    return Math.max(velocidadeMaxima, velocidade);
}, 0);
console.log(maiorVelocidadeTartarugaGrupo);

let nivelTartaruga = (velocidade) => {
    if (velocidade < 10)
        return 1;
    if (velocidade >= 10 && velocidade < 20)
        return 2;
    else
        return 3;
};
console.log(nivelTartaruga(maiorVelocidadeTartarugaGrupo));