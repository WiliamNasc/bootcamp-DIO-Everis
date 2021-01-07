let a = -7;
let b = -3;
let resto = 0;
let quociente = 0;

console.log("Entrada: ", a, " ", b, "\n");

resto = parseInt(a % b);
if (resto < 0) {
    resto = resto + Math.abs(b);
}
quociente = parseInt((a - resto) / b);

console.log("Saída: ", quociente, " ", resto);