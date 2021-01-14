let N = parseInt(gets());

for (let i = 1; i <= N; i++){
  let numeroAoQuadrado = Math.pow(i, 2);
  let numeroAoCubo = Math.pow(i, 3);
  console.log(i, numeroAoQuadrado, numeroAoCubo);
}