let kmPorLitro = 12;
let entrada = "22 67".split(" ");
console.log("Entrada: ", entrada);
let tempoGastoViagem = entrada[0];
console.log("Tempo Gasto, na viagem: ", tempoGastoViagem);
let velocidadeMedia = entrada[1];
console.log("Velocidade média: ", velocidadeMedia);
let qtdeLitrosNecessarios = ((tempoGastoViagem * velocidadeMedia) / kmPorLitro).toFixed(3);
console.log("Quantidade de litros gastos: " , qtdeLitrosNecessarios);