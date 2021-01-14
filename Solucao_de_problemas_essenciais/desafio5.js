let joias = [];

while (true) {
  let entrada = gets();
  
  if (!entrada)
    break;
  
  joias.push(entrada);
}

let tiposJoias = joias.filter((elemento, indice, vetor) => {
  return vetor.indexOf(elemento) === indice;
});

console.log(tiposJoias.length);