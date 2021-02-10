let tipoDeVinho = parseInt(gets());
let respostaDeCompetidores = gets().split(' ');

let numeroDeCompetidoresCorretos = respostaDeCompetidores
    .filter(
      respostasCorretas => respostasCorretas.includes(tipoDeVinho)
      )
    .length;

console.log(numeroDeCompetidoresCorretos);