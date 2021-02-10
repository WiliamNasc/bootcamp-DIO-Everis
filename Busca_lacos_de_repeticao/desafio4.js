let qtdeNumerosListaPink = parseInt(gets());
let entrada = gets().split(' ');
let listaPink = Array(qtdeNumerosListaPink);
let listaMultiplos = [
  {multiplo: 2, qtdeSemelhantes: 0},
  {multiplo: 3, qtdeSemelhantes: 0},
  {multiplo: 4, qtdeSemelhantes: 0},
  {multiplo: 5, qtdeSemelhantes: 0}
];

for (let i = 0; i < listaPink.length; i++) {
  listaPink[i] = entrada[i];
}

for (let i = 0; i < listaPink.length; i++) {
  for (let j = 0; j < listaMultiplos.length; j++) {
    if (listaPink[i] % listaMultiplos[j].multiplo === 0) {
      listaMultiplos[j].qtdeSemelhantes++;
    }
  }
}

for (let i = 0; i < listaMultiplos.length; i++) {
  console.log(
    listaMultiplos[i].qtdeSemelhantes,
    ' Multiplo(s) de ',
    listaMultiplos[i].multiplo
  );
}