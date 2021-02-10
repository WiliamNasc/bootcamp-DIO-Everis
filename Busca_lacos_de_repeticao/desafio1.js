let qtdeCandidatos = parseInt(gets());
let candidatos = [];

for (let i = 0; i < qtdeCandidatos; i++) {
  let entrada = gets().split(' ');
  candidatos[i] = { matricula: parseInt(entrada.shift()), nota: parseFloat(entrada.shift()) };
}

let maiorNota = candidatos.reduce(function(valorPrevio, valorCorrente) {
  return { nota: Math.max(valorPrevio.nota, valorCorrente.nota) };
});

for (let i = 0; i < qtdeCandidatos; i++) {
  if (maiorNota.nota < 8) {
    console.log('Minimum note not reached');
    break;
  } else if (candidatos[i].nota === maiorNota.nota) {
    console.log(candidatos[i].matricula);
  }
}