let primeiroNumero = -8;
let segundoNumero = 0;

if ((primeiroNumero < 0 && segundoNumero === 0) || (primeiroNumero > 0 && segundoNumero === 0)) {
    console.log('divisão impossível');
} else {
    let totalDivisao = (primeiroNumero / segundoNumero).toFixed(1);
    console.log(totalDivisao);
}
